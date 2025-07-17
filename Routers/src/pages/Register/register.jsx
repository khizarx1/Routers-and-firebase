import React, { useState } from "react";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { firestore } from "../../config/firebase";
import { doc, setDoc } from 'firebase/firestore/lite'
import { auth } from "../../config/firebase"; // Adjust the import path as necessary 


const initialState = {};

function register() {

    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const { email, password } = state;


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;

            console.log("User registered successfully:", user);
            console.log(userCredential)
            console.log(user)
            // ...
            await setDoc(doc(firestore, 'users', user.uid), { fullName: '', uid: user.uid });
        }
        catch (error) {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error(error)
            // ..
        };

    };

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="w-[600px] p-4 rounded-lg grid grid-cols-1 gap-y-2 border border-slate-400"
        >
            <h1 className="py-4 text-3xl text-center font-bold">
                Register Form Form
            </h1>

            {/* <div className="grid grid-cols-2 gap-2">
          <input
            className="p-2 rounded-lg border border-slate-400 outline-sky-600"
            name="firstname"
            type="text"
            placeholder="Enter your firstname"
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg border border-slate-400 outline-sky-600"
            name="lastname"
            type="text"
            placeholder="Enter your lastname"
            onChange={handleChange}
          />
        </div> */}
            <input
                className="p-2 rounded-lg border border-slate-400 outline-sky-600"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
            />
            <input
                className="p-2 rounded-lg border border-slate-400 outline-sky-600"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
            />
            <button className="w-1/2 py-2 mx-auto rounded-lg bg-sky-600 hover:bg-sky-900 text-white cursor-pointer">
                Register
            </button>
        </form>

    );
}

export default register;
