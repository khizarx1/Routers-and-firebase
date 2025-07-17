import React, { useState } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore/lite"; 
import { firestore } from "../../config/firebase";

const initialState = {};

function Adduser() {
  const [state, setState] = useState(initialState);
  
  const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
  };

  const { fullName, age, country } = state;

  
  
  const handleSubmit = async (e) => {
      e.preventDefault();   
      console.log("User data submitted:", state);
      
      let randomId = Math.random().toString(36).slice(2);
    
    try {
        await setDoc(doc(firestore, "users", randomId), { fullName, age, country, id: randomId });
        console.log("Document written with ID: ", randomId);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();   
//     console.log("User data submitted:", state);
    
//     try {
//   const docRef = await addDoc(collection(firestore, "users"), { fullName, age, country });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
//   };

  return (
        <form
        onSubmit={handleSubmit}
        action=""
        className="w-[600px] p-4 rounded-lg grid grid-cols-1 gap-y-2 border border-slate-400"
      >
        <h1 className="text-3xl text-center font-bold">Add User Form</h1>
        <input
          className="p-2 rounded-lg border border-slate-400"
          type="text"
          placeholder="Enter your Full Name"
          name="fullName"
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg border border-slate-400"
          type="number"
          placeholder="Enter your Age"
          name="age"
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg border border-slate-400"
          type="text"
          placeholder="Enter your Country"
          name="country"
          onChange={handleChange}
        />
        <button className="w-1/2 py-2 mx-auto rounded-lg bg-green-700 hover:bg-green-900 text-white cursor-pointer">
          Add user
        </button>
      </form>
  );
}

export default Adduser;
