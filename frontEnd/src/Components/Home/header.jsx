import React from "react";
import MovingText from "react-moving-text";

function Header() {
    return (
        <header className="text-center">
            <h2 className="text-blue-600 text-[2rem]">Inc. This morning</h2>
            <h1 className="text-[3rem] text-blue-600 mb-4">
                <span className="text-black">"</span> Blog{" "}
                <span className="text-black">"</span>
            </h1>
            <p>
                Awesome place to make oneself
                <br /> Prodcutive and entertained
            </p>
            <MovingText
                type="animation_type"
                duration="1000ms"
                delay="1s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none"
                animation_type="Bounce"
            >
                Content...
            </MovingText>
        </header>
    );
}

export default Header;
