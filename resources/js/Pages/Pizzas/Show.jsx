import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { router } from '@inertiajs/react';
import PizzaStatus from "./PizzaStatus";

export default function Show() {
    const { pizza } = usePage().props;
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isDelivered, setIsDelivered] = useState(false);
    const [deliveryTime, setDeliveryTime] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    // Check if pizza status is 'Delivered'
    useEffect(() => {
        if (pizza.status === "Delivered") {
            setIsDelivered(true);
            setDeliveryTime(new Date().toLocaleString()); // Record the delivery time
            setSuccessMessage("Your pizza has been successfully delivered!"); // Set success message
        }
    }, [pizza.status]);

    // Timer for elapsed time, only if pizza isn't delivered
    useEffect(() => {
        if (!isDelivered) {
            const timer = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup timer on unmount or status change
        }
    }, [isDelivered]);

    useEffect(() => {
        localStorage.setItem('elapsedTime', elapsedTime); // Store the elapsed time in localStorage
    }, [elapsedTime]);

    // To reload pizza status without resetting the timer
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ['pizza'] });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Format the elapsed time as minutes:seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{pizza.name} Details</h1>
            <p>Size: {pizza.size}</p>
            <p>Crust: {pizza.crust}</p>
            <p>Toppings: {pizza.toppings}</p>
            <svg className="w-32 h-32 rotate-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 0h512v512H0z" fill="#fff" fillOpacity="1"></path>
                <g transform="translate(0,0)">
                    <path
                        d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                        fill="#2563eb" fillOpacity="1"></path>
                </g>
            </svg>
            <PizzaStatus currentStatus={pizza.status} />
            <div className="text-center mt-4">
                <p className="text-lg">{pizza.name} started {pizza.status.toLowerCase()} your order
                    {/* Only show the last updated time if the pizza is not delivered */}
                    {pizza.status !== "Delivered" && (
                        <span className="underline font-semibold">{pizza.last_updated}</span>
                    )}
                </p>
            </div>
            <p>Status: {pizza.status}</p>
            {/* Show success message for delivered status */}
            {successMessage && (
                <div className="mt-4 text-center text-green-500 font-semibold">
                    {successMessage}
                </div>
            )}
            {/* Show elapsed time only if not delivered, otherwise show delivery time */}
            {isDelivered ? (
                <div className="mt-4 text-center">
                    <p className="text-lg">Delivery Time: {deliveryTime}</p>
                </div>
            ) : (
                ''
            )}
            <Link href={route("pizzas.index")} className="text-blue-500">Back to List</Link>
        </div>
    );
}
