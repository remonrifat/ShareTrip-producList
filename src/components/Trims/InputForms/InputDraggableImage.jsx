import React, { useState } from 'react';

const InputDraggableImage = () => {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const newImages = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        newImages.push(file);
        newPreviews.push(URL.createObjectURL(file));
      }
    });

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        newImages.push(file);
        newPreviews.push(URL.createObjectURL(file));
      }
    });

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Image Upload</h1>
      <div
        className="w-64 h-64 border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {previews.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {previews.map((preview, index) => (
              <img key={index} src={preview} alt={`Preview ${index}`} className="w-full h-full object-cover rounded-lg" />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Drag and drop images here</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="mb-4"
      />
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <div key={index}>
              <p>File name: {image.name}</p>
              <p>File size: {(image.size / 1024).toFixed(2)} KB</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDraggableImage;