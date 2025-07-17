import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const initialState = {};

function login() {
  const [state, setState] = useState(initialState);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("User is signed in:", user);
        setUser(user)
        
        // ...
      } else {
          // User is signed out
        console.log("No user is signed in");
          // ...
        }
    });
  }, []);
  
  const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    
    if (!password || password.length < 6) {
        alert("password length should be 6");
        return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

const handleLogout = () => {
    signOut(auth)
    .then(() => {
        console.log("User signed out successfully");
        setUser({});
    })
    .catch((error) => {
        console.error('Error in signing out', error);
    })
}

  return (
    <div>
        {user.email 
        ?
        <div className="flex items-center justify-center flex-col" >
            <h2 className="text-2xl text-center font-bold py-2">User Email: {user.email}</h2>
            <h2 className="text-2xl text-center font-bold py-2">User uid: {user.uid}</h2>
            <h2 className="text-2xl text-center font-bold py-2">User Display Name: {user.displayName}</h2>
            <button className="w-1/2 py-2 mx-auto rounded-lg bg-green-700 hover:bg-green-900 cursor-pointer text-white" onClick={handleLogout}>
            Logout
            </button>
        </div>
        :
        <form
        onSubmit={handleSubmit}
        action=""
        className="w-[600px] p-4 rounded-lg grid grid-cols-1 gap-y-2 border border-slate-400"
      >
        <h1 className="text-3xl text-center font-bold">Login Form</h1>
        <input
          className="p-2 rounded-lg border border-slate-400"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg border border-slate-400"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button className="w-1/2 py-2 mx-auto rounded-lg bg-green-700 hover:bg-green-900 text-white cursor-pointer">
          Login
        </button>
      </form>
    }    
    </div>
  );
}

export default login;
