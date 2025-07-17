import React, { useState } from "react";
import { firestore } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore/lite";




const initialState = {};

function AddProducts() {

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    const { title, price, description } = state;
    if (!title || !price || !description) {
      alert("All fields are required");
      return;
    }

    console.log("Product data submitted:", state);

    try {
      const docRef = await addDoc(collection(firestore, "Products"), state );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="w-[600px] p-4 rounded-lg grid grid-cols-1 gap-y-2 border border-slate-400"
    >
      <h1 className="py-4 text-3xl text-center font-bold">Add Products Form</h1>

      <div className="grid grid-cols-2 gap-2">
        <input
          className="p-2 rounded-lg border border-slate-400 outline-sky-600"
          name="title"
          type="text"
          placeholder="Enter Title"
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg border border-slate-400 outline-sky-600"
          name="price"
          type="text"
          placeholder="Enter Price"
          onChange={handleChange}
        />
      </div>
      <input
        className="p-2 rounded-lg border border-slate-400 outline-sky-600"
        name="description"
        type="text"
        cols="30"
        placeholder="Description"
        onChange={handleChange}
      />
      <button className="w-1/2 py-2 mx-auto rounded-lg bg-sky-600 hover:bg-sky-900 text-white cursor-pointer">
        Add Product
      </button>
    </form>
  );
}

export default AddProducts;
