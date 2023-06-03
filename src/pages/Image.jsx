import React, { useState } from "react";

const Image = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files; // Get the selected files
    const imagesArray = Array.from(files); // Convert the FileList to an array

    setSelectedImages(imagesArray);
  };

  const handleUpload = () => {
    // Perform any necessary upload logic here
    // You can access the selectedImages state array to access the uploaded files
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      <button onClick={handleUpload}>Upload</button>
      {selectedImages.map((image, index) => (
        <div key={index}>
          <img
            src={URL.createObjectURL(image)}
            alt={`Image ${index}`}
            width="200"
          />
        </div>
      ))}
    </div>
  );
};

export default Image;
