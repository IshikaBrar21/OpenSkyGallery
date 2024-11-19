import React from "react";

const Gallery = ({ items }) => {
    return (
        <div id="parent">
            {items.map((item, index) => (
                <div className="child" key={index}>
                    <img className="image" src={item.src} alt={item.alt} />
                    <div className="text">{item.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
