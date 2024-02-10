## Loadmore Component README

### 1. Basic Layout:

- The Loadmore component consists of a container div containing two main sections: `product-container` and `button-container`.
- The `product-container` section renders the fetched products, while the `button-container` section includes a button for loading more products.

### 2. Data Fetching and Pagination:

- Use the `useState` hook to manage state variables for `count`, `products`, `loading`, and `disabledButton`.
- Implement an `async` function `fetchProducts` to fetch products from the API endpoint.
- Manage loading states using `setLoading(true)` and `setLoading(false)`.
- Make a GET request to the API endpoint with pagination parameters (`limit` and `skip`).
- Update the `products` state with the new data upon receiving the response.
- Trigger the `fetchProducts` function whenever the `count` state changes using `useEffect`.

### 3. Button State and Pagination Limit:

- Monitor changes in the `products` state using another `useEffect` hook.
- Disable the button (`disabledButton`) if the length of `products` reaches 100.
- Update the button text conditionally to display appropriate messages based on the pagination limit.

### 4. Rendering Products:

- Iterate over the `products` array using the `map` function to render individual product cards.
- Ensure each product card has a unique `key` attribute to avoid React warnings.
- Display the product image and title within each card.

### 5. Handling Loading State:

- Conditionally render a loading message if the `loading` state is `true` to provide feedback while fetching products.


### 6. Error Handling:

- Implement error handling within the `fetchProducts` function to catch and log any errors during the API request.
- Update the `loading` state to `false` in case of errors to ensure proper UI behavior.

This README provides an overview of the Loadmore component, including data fetching, pagination, button state management, rendering products, handling loading states, CSS styling, and error handling.
