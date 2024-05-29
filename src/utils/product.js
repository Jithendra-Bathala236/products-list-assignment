export const getCategories = (products) => {
    const categories = [];

    products.forEach((product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    return categories;
};

export const filterProducts = (products, category, sortOrder, query) => {
    const updatedProducts = applyFilters([...products], {
        category,
        sortOrder,
        query,
    });

    return updatedProducts;
};

const applyFilters = (products, { category, sortOrder, query }) => {
    if (category) {
        products = filterByCategory(products, category);
    }

    products = sortProducts(products, sortOrder);

    products = searchProducts(products, query);

    return products;
};

const filterByCategory = (products, category) => {
    return products.filter((product) => product.category === category);
};

const sortProducts = (products, sortOrder) => {
    return [
        ...products.sort((a, b) =>
            sortOrder == "low" ? a.price - b.price : b.price - a.price,
        ),
    ];
};

const searchProducts = (products, query) => {
    return products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
    );
};
