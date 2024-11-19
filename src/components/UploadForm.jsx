import React, { useState } from "react";
import axios from "axios";

const UploadForm = ({ onUploadSuccess }) => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");

    const handleImageUpload = async (e) => {
        e.preventDefault();

        if (!image || !caption) {
            alert("Please select an image and add a caption!");
            return;
        }

        const formData = new FormData();
        formData.append("file", image);
        formData.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        );

        try {
            // Upload image to Cloudinary
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );

            // Get the uploaded image URL
            const newImageUrl = response.data.secure_url;

            // Notify parent about the new image
            onUploadSuccess({ src: newImageUrl, alt: caption, text: caption });

            // Reset input fields
            setImage(null);
            setCaption("");
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed. Please try again.");
        }
    };

    return (
        <div className="Form">
        <form onSubmit={handleImageUpload} style={{ marginBottom: "20px" }}>
            <input
            className="UploadImage"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
            />
            <input
            className="UploadCaption"
                type="text"
                placeholder="Enter a caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
                style={{ marginLeft: "10px" }}
            />
            <button type="submit" style={{ marginLeft: "10px" }}>Upload</button>
        </form>
        </div>
    );
};

export default UploadForm;
