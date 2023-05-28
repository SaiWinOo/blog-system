<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Blog;
use App\Models\Clap;
use App\Models\Topic;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // topics seeder
        $topics = ['programming', 'design', 'business', 'marketing',  'finance', 'politics', 'science', 'health', 'culture', 'travel', 'music', 'art', 'cooking', 'career', 'family', 'hobbies'];
        foreach ($topics as $topic) {
            Topic::factory()->create([
                'name' => $topic
            ]);
        }

        // blog seeder

        Blog::factory(100)->create();
        Clap::factory(100)->create();
        $this->call([
            CommentSeeder::class
        ]);
    }
}
