const initialState = {
  addedProducts: [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 3,
      quantity: 1,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  // Ensure state and addedProducts are always defined
  state = state || initialState;
  state.addedProducts = state.addedProducts || [];

  const { type, id, quantity } = action;

  switch (type) {
    case "ADD_PRODUCT":
      // Validate that id is a number and is not undefined or null
      if (typeof id !== 'number' || id == null) {
        console.error("Invalid product ID");
        return state;
      }

      // Check if the ID already exists in addedProducts
      const exists = state.addedProducts.some((product) => product.id === id);

      if (!exists) {
        return {
          ...state,
          addedProducts: [
            ...state.addedProducts,
            { id, quantity: 1 }, // Adding a new product with quantity 1
          ],
        };
      } else {
        console.log("Product already added");
        return state;
      }

    case "REMOVE_PRODUCT":
      return {
        ...state,
        addedProducts: state.addedProducts.filter(
          (product) => product.id !== id,
        ),
      };

    case "UPDATE_QUANTITY":
      // Validate that id is a number and quantity is a positive number
      if (typeof id !== 'number' || id == null || typeof quantity !== 'number' || quantity < 1) {
        console.error("Invalid product ID or quantity");
        return state;
      }

      // Check if the ID already exists in addedProducts
      const productIndex = state.addedProducts.findIndex(
        (product) => product.id === id,
      );

      if (productIndex !== -1) {
        // If the product exists, update its quantity
        const updatedProducts = [...state.addedProducts];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          quantity: quantity,
        };

        return {
          ...state,
          addedProducts: updatedProducts,
        };
      } else {
        console.error("Product not found");
        return state;
      }

    case "PRODUCT_ERR":
      console.log("PRODUCT_ERR: ", state);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { productReducer };
