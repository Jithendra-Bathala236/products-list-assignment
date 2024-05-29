import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
import useFilteredProducts from "../../hooks/useFilteredProducts";
// import MultiRangeSlider from "../DoubleSlider/MultiRangeSlider";

const ProductsList = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("low");
    const [searchQuery, setSearchQuery] = useState("");

    const { categories, filteredProducts, loading, error } =
        useFilteredProducts(selectedCategory, sortOrder, searchQuery);

    const resetFilters = (event) => {
        event.preventDefault();
        setSelectedCategory("");
        setSortOrder("low");
        setSearchQuery("");
    };

    return (
        <main>
            <section>
                <form>
                    <label htmlFor="search">Search:</label>
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />

                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={selectedCategory}
                        onChange={(event) =>
                            setSelectedCategory(event.target.value)
                        }
                    >
                        <option value="">All</option>
                        {categories.map((category, index) => (
                            <option value={category} key={index}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="price">Price:</label>
                    <select
                        id="price"
                        name="price"
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                    <button onClick={resetFilters} type="reset">
                        Reset
                    </button>

                    {/* <MultiRangeSlider
                        min={0}
                        max={
                            Math.max(
                                ...products.map((product) => product.price),
                            ) + 1
                        }
                        onChange={({ min, max }) => {
                            console.log("Price Range:", min, max);
                        }}
                    /> */}
                </form>
            </section>

            <section className="products-container">
                <div className="products">
                    {loading ? (
                        <div className="loading">Loading...</div>
                    ) : error ? (
                        <div className="error">
                            Error occurred while fetching products.
                        </div>
                    ) : (
                        <>
                            {filteredProducts.length === 0 ? (
                                <div className="no-products">
                                    No products found!
                                </div>
                            ) : (
                                filteredProducts.map((product, index) => (
                                    <ProductCard
                                        product={product}
                                        key={index}
                                    />
                                ))
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default ProductsList;
