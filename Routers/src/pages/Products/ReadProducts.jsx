import React, { useState, useEffect } from "react";
import { firestore } from "../../config/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";

import { Spin } from "antd";

function ReadProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let array = [];

    const querySnapshot = await getDocs(collection(firestore, "Products"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id; // Add the document ID to the data object
      console.log(data);
      array.push(data);
      //   console.log(`${doc.id} => ${doc.data()}`);
    });

    setProducts(array);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = async (product) => {
    // Logic to handle product update
    console.log("Update product:", product);
    let newData = { ...product, title: "new title" };

    await setDoc(doc(firestore, "Products", product.id), newData, {
      merge: true,
    });

    let newProducts = products.map((product) => {
      if (product.id === newData.id) {
        return newData;
      } else {
        return product;
      }
    });

    setProducts(newProducts);

    console.log("Product updated:", product);
  };

  const handleDelete = async (product) => {
    // Logic to handle product deletion

    await deleteDoc(doc(firestore, "Products", product.id));

    let newProducts = products.filter((newProduct) => {
      return product.id !== newProduct.id;
    });

    setProducts(newProducts);

    console.log("product deleted:", product);
  };

  return (
    <div className="w-full text-center p-4">
      <h1 className="text-3xl font-bold">Products</h1>
      {products.length > 0 ? (
        <table className="w-full border-collapse border border-slate-400 text-sm">
          <thead className="bg-slate-200">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr
                key={idx}
                className="even:bg-slate-100 hover:bg-slate-50 transition"
              >
                <td className="border px-4 py-2">{idx + 1}</td>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleUpdate(product)}
                    className="p-1 px-2 rounded-sm bg-blue-600 hover:bg-blue-900 !text-white cursor-pointer text-xs"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product)}
                    className="p-1 px-2 rounded-sm bg-red-500 hover:bg-red-900 !text-white cursor-pointer text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
}

export default ReadProducts;
