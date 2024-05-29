import { useEffect, useState } from "react";
import { filterProducts, getCategories } from "../utils/product";

const useFilteredProducts = (selectedCategory, sortOrder, searchQuery) => {
    const [products, setProducts] = useState([
        {
            name: "Beats Studio Pro",
            description:
                "Wireless noise-cancelling over-the-ear headphones with premium sound quality and comfort.",
            price: 199.99,
            image: "https://img.bbystatic.com/BestBuy_US/images/products/6501/6501019_sd.jpg",
            category: "Headphones",
        },
        {
            name: "Sony WH1000XM4",
            description:
                "Top-tier wireless noise-cancelling headphones with superior sound and comfort.",
            price: 349.99,
            image: "https://img.bbystatic.com/BestBuy_US/images/products/6408/6408356_sd.jpg",
            category: "Headphones",
        },
        {
            name: "Apple AirPods Pro",
            description:
                "High-performance wireless earbuds with active noise cancellation and adaptive EQ.",
            price: 249.99,
            image: "https://img.bbystatic.com/BestBuy_US/images/products/6447/6447382_sd.jpg",
            category: "Earbuds",
        },
        {
            name: "JBL Endurance Race",
            description:
                "Waterproof true wireless sport earbuds, perfect for workouts.",
            price: 49.99,
            image: "https://img.bbystatic.com/BestBuy_US/images/products/6501/6501223_sd.jpg",
            category: "Earbuds",
        },
        {
            name: "Bose QuietComfort",
            description:
                "Wireless noise-cancelling over-the-ear headphones known for comfort and sound quality.",
            price: 349.0,
            image: "https://img.bbystatic.com/BestBuy_US/images/products/6571/6571358_sd.jpg",
            category: "Headphones",
        },
    ]);

    const categories = getCategories(products);
    const [filteredProducts, setFilteredProducts] = useState([...products]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        try {
            // logic for fetching products from an API
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        setFilteredProducts(
            filterProducts(products, selectedCategory, sortOrder, searchQuery),
        );
    }, [selectedCategory, sortOrder, searchQuery]);

    return { categories, filteredProducts, loading, error };
};

export default useFilteredProducts;
