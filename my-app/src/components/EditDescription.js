import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editItemDescription } from "../store/actions/actions";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const EditDescription = ({ editItemDescription }) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);
  const params = useParams();

  console.log("ITEM ID", params)

  useEffect(() => {
    axiosWithAuth()
    .get(`/api/items/${params.id}`)
      .then((response) => {
        setUpdatedItem(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);


  const handleChanges = (event) => {
    event.persist();
    let value = event.target.value;
    setUpdatedItem({
      description: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editItemDescription(updatedItem, params.id);
  
  };

console.log("UPDATED ITEM", updatedItem)

  return (
    <div>
      <h1>Edit Description</h1>
      <h3>Name: {updatedItem.name}</h3>
      <p>Category: {updatedItem.catname}</p>
      <h3>Description: {updatedItem.description}</h3>
      <p>Price: {updatedItem.price}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedItem.description}
          onChange={handleChanges}
          placeholder={updatedItem.description}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    description: state.description,
  };
}

export default connect(mapStateToProps, { editItemDescription })(EditDescription);
