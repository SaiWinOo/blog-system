<?php

namespace App\Http\Controllers;

use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('topic', 'user')->withSum('claps', 'count')->paginate(10);
        return response()->json([
            'blogs' => $blogs
        ]);
    }

    public function show(Blog $blog)
    {
        $blog = $blog->load(['topic' => function ($query) {
            $query->select('id', 'name');
        }, 'user' => function ($query) {
            $query->select('id', 'name')->withCount('followers');
        }])->loadCount('comments')->loadSum('claps', 'count');

        $recommendedBlogs = Blog::where('user_id',  $blog->user->id)->with(['topic' => function ($query) {
            $query->select('id', 'name');
        }, 'user' => function ($query) {
            $query->select('id', 'name')->withCount('followers');
        }])->withCount('comments')->withSum('claps', 'count')->take(5)->get();
        return response()->json([
            'blog' => $blog,
            'recommendedBlogs' => $recommendedBlogs
        ]);
    }
}
