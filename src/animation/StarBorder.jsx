// src/components/StarBorder.jsx
import React from "react";

const StarBorder = ({
    as: Tag = "div", // default wrapper div
    className = "",
    color = "cyan",
    speed = "3s",
    children,
    ...props
}) => {
    return (
        <Tag
            className={`relative inline-block p-[2px] rounded-xl overflow-hidden ${className}`}
            {...props}
        >

            <span
                className="absolute inset-0 rounded-xl animate-spin-slow"
                style={{
                    background: `conic-gradient(${color}, transparent 60%)`,
                    animationDuration: speed,
                }}
            />

            <span className="relative block text-white rounded-xl">
                {children}
            </span>
        </Tag>
    );
};

export default StarBorder;
