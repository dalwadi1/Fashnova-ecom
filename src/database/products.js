// lib/products.js
import { products } from "@/lib/images";

export const productList = [
    {
        id: 1,
        image: products.product1,
        category: "Women",
        price: 123,
        colors: ["red", "green", "blue", "yellow"],
    },
    {
        id: 2,
        image: products.product2,
        category: "Men",
        price: 150,
        colors: ["black", "green", "orange"],
    },
    {
        id: 3,
        image: products.product3,
        category: "Women",
        price: 180,
        colors: ["red", "pink", "blue"],
    },
    {
        id: 4,
        image: products.product4,
        category: "Kids",
        price: 99,
        colors: ["green", "yellow", "blue"],
    },
    {
        id: 5,
        image: products.product5,
        category: "Men",
        price: 200,
        colors: ["red", "black", "gray"],
    },
    {
        id: 6,
        image: products.product6,
        category: "Women",
        price: 140,
        colors: ["blue", "green", "brown"],
    },
    {
        id: 7,
        image: products.product7,
        category: "Men",
        price: 170,
        colors: ["red", "green", "purple"],
    },
];
