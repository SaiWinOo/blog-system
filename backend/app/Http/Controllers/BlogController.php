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
        $blog = $blog->load('topic', 'user')->loadCount('comments')->loadSum('claps', 'count');
        return response()->json([
            'blog' => $blog
        ]);
    }
}
