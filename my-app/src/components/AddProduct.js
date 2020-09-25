import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addItem } from "../store/actions/actions";
import { connect } from "react-redux";
const initialFormValues = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};
function AddProduct({ inventory, addItem, categories }) {
  const [newItem, setNewItem] = useState(initialFormValues);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit is happening");
    console.log('NEWITEM', { newItem });
    addItem(newItem);
    history.push("/inventory")
  };
  const handleChanges = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={handleSubmit}>
        <br></br>
        <label>
          Product name:
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Category:
          <select
            onChange={handleChanges}
            type="number"
            value={newItem.category_id}
            name="category_id"
          >
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.catname}
                </option>
              );
            })}
          </select>
        </label>
        <Link exact to="/add-category">
          <span>
            <button>Add Category</button>
          </span>
        </Link>
        <br></br>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <label>
          Price:
          <input
            type="number"
            step=".01"
            value={newItem.price}
            name="price"
            placeholder="0.00"
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
      {/* {products.map(product => (
                <Link key={product.id} to={``}
            )) */}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    inventory: state.inventory,
    categories: state.categories,
  };
}
export default connect(mapStateToProps, { addItem })(AddProduct);
