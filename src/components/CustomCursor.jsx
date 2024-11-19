import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}
        ></div>
    );
};

export default CustomCursor;
