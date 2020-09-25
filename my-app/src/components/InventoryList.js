import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchInventory, deleteItem } from "../store/actions/actions";

const InventoryList = ({ inventory, fetchInventory, deleteItem }) => {
  console.log(inventory);
  console.log(fetchInventory);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);
  console.log("inventory: ", inventory);

  const handleDelete = (event, productId) => {
    event.preventDefault();
    deleteItem(productId);
    console.log(productId);
  };

  return (
    <div>
      <h2>Inventory List</h2>
      <Link exact to="/add-products">
        Add Items
      </Link>
      {inventory.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <span>
            <Link to={`/name-editor/${product.id}`}>
              <button>Edit Name</button>
            </Link>
          </span>
          <p>Category: {product.catname}</p>
          <p>Description: {product.description}</p>
          <span>
            <Link to={`/description-editor/${product.id}`}>
              <button>Edit Description</button>
            </Link>
          </span>
          <p>Price: {product.price}</p>
          <button onClick={(e) => handleDelete(e, product.id)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    inventory: state.inventory,
  };
}

export default connect(mapStateToProps, { fetchInventory, deleteItem })(InventoryList);
