import React, { useState, useEffect } from "react";
import { message } from "antd";
import { filesize } from "filesize";

function index() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    let file = e.target.files[0];

    if (file && file.size > 2000) {
      alert("Your file is greater than 20KB, please upload a smaller file.");
      return;
    }
    setFile(file);
    message.success("File selected successfully!");
};

  console.log("image", file);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Upload File</h1>
      <div className="flex items-center">
        <label
          htmlFor="fileUpload"
          className="bg-gray-300 px-4 py-2 rounded-l-lg cursor-pointer hover:bg-gray-400 transition"
        >
          Choose File
        </label>
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          onChange={handleFile}
          className="py-2 pl-2 border-r border-t border-b border-gray-300 rounded-r-lg"
        />
      </div>
      {file && (
        <p className="py-2 text-lg">
          name:{file.name} | filesize: {filesize(file.size)}
        </p>
      )}
    </div>
  );
}

export default index;
