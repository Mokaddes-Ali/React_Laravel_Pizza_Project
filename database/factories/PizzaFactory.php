<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => $this->faker->randomDigitNot(0),
            'user_id' => $this->faker->randomDigitNot(0),
            'name' => $this->faker->word,
            'size' => $this->faker->randomElement(['small', 'medium', 'large']),
            'crust' => $this->faker->randomElement(['Normal','Thin', 'Garlic']),
            'toppings' => $this->faker->randomElement(['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon']),
            'status' => $this->faker->randomElement(['Ordered', 'Preparing','Bsking','Checking', 'Ready', 'Delivered']),
        ];
    }
}
