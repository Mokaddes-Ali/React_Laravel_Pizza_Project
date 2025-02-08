import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const PizzaTable = () => {
    const { pizzas } = usePage().props; // Inertia থেকে data আনো

    return (
        <>
        <AuthenticatedLayout>
        <div className="p-6">
            <Head title="Pizza List" />
            <h1 className="text-2xl font-bold mb-4">Pizza List</h1>

            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Serial</th>
                        <th className="border p-2">Order ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Size</th>
                        <th className="border p-2">Crust</th>
                        <th className="border p-2">Toppings</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.map((pizza) => (
                        <tr key={pizza.id} className="text-center">
                            <td className="border p-2">{pizza.id}</td>
                            <td className="border p-2">{pizza.order_id}</td>
                            <td className="border p-2">{pizza.name}</td>
                            <td className="border p-2">{pizza.size}</td>
                            <td className="border p-2">{pizza.crust}</td>
                            <td className="border p-2">{pizza.toppings}</td>
                            <td className="border p-2">{pizza.status}</td>
                            <td className="border p-2">
    <Link href={route('pizzas.show', pizza.id)} className="text-blue-500 me-2">
        View
    </Link>
    <Link href={route('pizzas.edit', pizza.id)} className="text-green-500">
        Edit
    </Link>
</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </AuthenticatedLayout>
        </>
    );
};

export default PizzaTable;
