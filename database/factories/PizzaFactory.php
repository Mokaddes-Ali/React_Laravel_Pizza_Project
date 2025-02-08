<?php

namespace Database\Factories;

use App\Models\Pizza;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    protected $model = Pizza::class;

    public function definition(): array
    {
        return [
            'order_id' => $this->faker->unique()->numberBetween(100000, 999999),
            'user_id' => User::factory(),
            'name' => $this->faker->word,
            'size' => $this->faker->randomElement(['small', 'medium', 'large']),
            'crust' => $this->faker->randomElement(['Normal','Thin', 'Garlic']),
            'toppings' => $this->faker->randomElement(['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon']),
            'status' => $this->faker->randomElement(['Ordered', 'Preparing', 'Baking', 'Checking', 'Ready', 'Delivered']),
        ];
    }
}

