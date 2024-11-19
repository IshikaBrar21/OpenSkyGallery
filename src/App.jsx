import React, { useState } from "react";
import Gallery from "/Users/ishika/Downloads/sky-gallery/src/components/Gallery.jsx";
import UploadForm from "/Users/ishika/Downloads/sky-gallery/src/components/UploadForm.jsx";
import preloadedGalleryItems from "/Users/ishika/Downloads/sky-gallery/src/data.js";
import CustomCursor from "/Users/ishika/Downloads/sky-gallery/src/components/CustomCursor.jsx";

const App = () => {
    const [galleryItems, setGalleryItems] = useState(preloadedGalleryItems);

    const handleUploadSuccess = (newItem) => {
        setGalleryItems((prevItems) => [newItem, ...prevItems]);
    };

    return (
        <div>
            <CustomCursor />
            <h1 className="Title">☁︎⋅Sky: The Children of Light⋅☁︎</h1>
            <UploadForm onUploadSuccess={handleUploadSuccess} />
            <Gallery items={galleryItems} />
        </div>
    );
};

export default App;
