import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editName } from "../store/actions/actions";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  location_id: 1,
  category_id: 1,
  name: "",
  description: "",
  price: 0.0,
};

const UpdateName = ({ editName }) => {
  const [updatedItem, setUpdatedItem] = useState(initialItem);
  const params = useParams();
  const history = useHistory();

  console.log("FUNCTION RUNNING", editName);

  console.log("ITEM ID", params);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/items/${params.id}`)
      .then((response) => {
        setUpdatedItem(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const handleChanges = (event) => {
    event.persist();
    let value = event.target.value;
    setUpdatedItem({
      name: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editName(updatedItem, params.id);
    // history.push("/inventory");
  };

  console.log("ITEM", updatedItem);

  return (
    <div>
      <h1>Edit Name</h1>
      <h3>Name: {updatedItem.name}</h3>
      <p>Category: {updatedItem.catname}</p>
      <h3>Description: {updatedItem.description}</h3>
      <p>Price: {updatedItem.price}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updatedItem.name}
          onChange={handleChanges}
          placeholder={updatedItem.name}
        />
        <button onClick={() => history.push("/inventory")}>Update</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps, { editName })(UpdateName);
