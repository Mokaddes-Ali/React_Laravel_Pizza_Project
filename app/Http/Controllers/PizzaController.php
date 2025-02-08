<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizzas/Index', [
            'pizzas' => $pizzas
        ]);
    }

    public function show($id)
{
    $pizza = Pizza::findOrFail($id);
    return inertia('Pizzas/Show', ['pizza' => $pizza]);
}

public function edit($id)
{
    $pizza = Pizza::findOrFail($id);
    return inertia('Pizzas/Edit', ['pizza' => $pizza]);
}

public function update(Request $request, $id)
{
    $pizza = Pizza::findOrFail($id);
    $pizza->update($request->all());
    return redirect()->route('pizzas.index')->with('success', 'Pizza updated successfully!');
}
}
