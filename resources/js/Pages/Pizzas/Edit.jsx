import { useState } from "react";
import { usePage, Link, router } from "@inertiajs/react";

export default function Edit() {
    const { pizza } = usePage().props;
    const [form, setForm] = useState({
        name: pizza.name,
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings,
        status: pizza.status,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("pizzas.update", pizza.id), form);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-4">Edit Pizza</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Size:</label>
                    <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Crust:</label>
                    <select
                        name="crust"
                        value={form.crust}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Normal">Normal</option>
                        <option value="Thin">Thin</option>
                        <option value="Garlic">Garlic</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Toppings:</label>
                    <input
                        type="text"
                        name="toppings"
                        value={form.toppings}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Status:</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Ordered">Ordered</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Baking">Baking</option>
                        <option value="Checking">Checking</option>
                        <option value="Ready">Ready</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Update
                    </button>
                    <Link href={route("pizzas.index")} className="text-gray-500">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
