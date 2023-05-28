<?php

namespace Database\Factories;

use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => fake()->realText(40),
            'slug' => fake()->slug,
            'image' => 'https://i.pravatar.cc/150?img='.$this->faker->numberBetween(0, 70),
            'topic_id' => Topic::inRandomOrder()->first()->id,
            'body' => fake()->realText(1000),
            'duration' => fake()->numberBetween(3, 10),
        ];
    }
}
