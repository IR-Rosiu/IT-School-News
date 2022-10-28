// Initializam state-ul.
export const initialState = {
  products: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      // Cautam produsul adaugat in produsele pe care le avem in state.
      const isInList = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      // Daca produsul este deja in state, returnam state-ul.
      if (isInList) {
        return state;
      } else {
        // Daca produsul nu este in state, il adaugam la inceputul liste de produse.
        const newState = {
          products: [action.payload, ...state.products],
        };
<<<<<<< HEAD
        localStorage.setItem("displayFavoritesNews", JSON.stringify(newState));
=======
>>>>>>> 1c47f867d3b08d54042e877295002352f014f0a5
        return newState;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      // Filtram produsele din state, elimnandu-l pe cel care are id-ul venit din payload.
      const filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      const newState = {
        products: filteredProducts,
      };
<<<<<<< HEAD
      localStorage.setItem("displayFavoritesNews", JSON.stringify(newState));
=======
>>>>>>> 1c47f867d3b08d54042e877295002352f014f0a5
      return newState;
    }
    // Nu uitam sa returnam state-ul pe cazul default.
    default: {
      return state;
    }
  }
}
