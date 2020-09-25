import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const FETCH_INVENTORY = "FETCH_INVENTORY";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_NAME = "EDIT_NAME";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
export const DELETE_ITEM = "DELETE_ITEM";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_ITEM = "FETCH_ITEM";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
//Get Entire Inventory List
export const fetchInventory = () => {
  return (dispatch) => {
    console.log("fetch is called");
    const userId = localStorage.getItem("id");
    axiosWithAuth()
      .get(`api/items/user/${userId}`)
      .then((response) => {
        console.log(response);
        const items = response.data.data;
        dispatch({ type: FETCH_INVENTORY, payload: items });
      });
  };
};
//Add Item Action
//Erica to insert code here
export const addItem = (newProduct) => {
  return (dispatch) => {
    const userId = localStorage.getItem("id");
    console.log("Item was posted");
    axiosWithAuth()
      .post(`api/items/user/${userId}`, {
        ...newProduct,
        user_id: userId,
      })
      .then((response) => {
        dispatch({ type: ADD_ITEM, payload: response.data.data });
      });
  };
};
//Get Item Categories
//Mary to insert code here
export const fetchItemCategories = () => {
  return (dispatch) => {
    axiosWithAuth()
      .get("api/categories")
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_CATEGORIES, payload: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//Add Item Category Action
//Mary to insert code here
export const addCategory = (newCategory) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`api/categories`, newCategory)
      .then((response) => {
        dispatch({ type: ADD_CATEGORY, payload: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//Update Name Action
//Erica to insert code here
export const editName = (product, productId) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`api/items/${productId}`, product)
      .then((response) => {
        dispatch({ type: EDIT_NAME, payload: response.data.data });
      });
  };
};
//Update Description Action
//Mary to insert code here
export const editItemDescription = (product, productId) => {
  return (dispatch) => {
    dispatch({ type: EDIT_DESCRIPTION });
    axiosWithAuth()
      .put(`/api/items/${productId}`, product)
      .then((response) => {
        console.log("RESPONSE", response);
        dispatch({ type: EDIT_DESCRIPTION, payload: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//Delete Item Action
//Mary & Erica to pair program
export const deleteItem = (productId) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`/api/items/${productId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: DELETE_ITEM, payload: productId });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCategory = (categoryId) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`/api/categories/${categoryId}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: DELETE_CATEGORY, payload: categoryId });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


