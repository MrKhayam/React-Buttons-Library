import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
     Routes,Route,
  } from "react-router-dom";
import CssCode from "./CssCode";
import TailwindCode from "./TailwindCode";

const Custom = () => {
  const [background, setBackground] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  const [borderRadiusVal, setBorderRadiusVal] = useState(0);
  const [borderVal, setBorderVal] = useState("black");
  const [paddingX, setPaddingX] = useState(0);
  const [paddingY, setPaddingY] = useState(0);
  const [textSize, setTextSize] = useState(15);
  const [borderSize, setBorderSize] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleCross = () => {
    setIsClicked(false);
  };

  const toggleTheme = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div
          className={`${
            isClicked ? "flex" : "hidden"
          } fixed z-20 top-0 left-0 w-full items-center justify-center h-screen bg-[#0000007a] backdrop-blur-sm`}
        >
          <div
            className={`min-w-[900px] relative rounded-lg h-auto p-8 bg-white`}
          >
            <IoClose
              className="absolute top-3 text-xl right-3 cursor-pointer"
              onClick={handleCross}
              size={27}
            />
            <div className="bar mx-auto bg-black gap-5 w-[300px] items-center justify-center h-[60px] rounded-full flex">
              <NavLink to='css' className={({isActive}) => `css ${isActive ? 'bg-white text-black' : 'text-white'} flex items-center justify-center cursor-pointer w-[30%] text-center h-[40px] rounded-full`}>
                Css
              </NavLink>
              <NavLink to='tailwind' className={({isActive}) => `css ${isActive ? 'bg-white text-black' : 'text-white'} flex items-center justify-center cursor-pointer w-[30%] text-center h-[40px] rounded-full`}>
                Tailwind
              </NavLink>
            </div>
            <Routes>
                <Route path="css" element={<CssCode />} />
                <Route path="tailwind" element={<TailwindCode />} /> 
            </Routes>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-[30%]">
          <button
            onClick={handleClick}
            style={{
              backgroundColor: isToggled ? "transparent" : background,
              color: color,
              borderRadius: `${borderRadiusVal}px`,
              border: `${borderSize}px solid ${borderVal}`,
              paddingLeft: `${paddingX}px`,
              paddingRight: `${paddingX}px`,
              paddingTop: `${paddingY}px`,
              paddingBottom: `${paddingY}px`,
              fontSize: `${textSize}px`,
            }}
          >
            Click Me
          </button>
        </div>
        <div className="w-full h-[70%]">
          <div className="w-[80%] outerCont h-full mx-auto">
            <div className="flex flex-col bg-white items-center justify-center w-full h-[80%] rounded-xl">
              <h1 className="mb-10 text-3xl font-semibold text-[#000]">
                Toolbar
              </h1>
              <div className="toolBar1 flex items-center justify-center gap-20 w-full h-auto p-4">
                <div className="backgroundPicker flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="bgc">
                    Background
                  </label>
                  <input
                    className="cursor-pointer"
                    value={background}
                    onChange={(e) => {
                      setBackground(e.target.value);
                    }}
                    type="color"
                    id="bgc"
                  />
                </div>
                <div className="colorPicker flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="color">
                    Text Color
                  </label>
                  <input
                    className="cursor-pointer"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    type="color"
                    id="color"
                  />
                </div>

                <div className="borderRadius flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="borderRadius">
                    Rounded
                  </label>
                  <input
                    min={0}
                    max={50}
                    className="cursor-pointer"
                    value={borderRadiusVal}
                    onInput={(e) => {
                      setBorderRadiusVal(e.target.value);
                    }}
                    type="range"
                    id="borderRadius"
                  />
                </div>
              </div>

              <div className="toolBar2 flex items-center justify-center gap-20 w-full h-auto p-4">
                <div className="paddingX flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="paddingX">
                    PaddingX
                  </label>
                  <input
                    className="cursor-pointer"
                    value={paddingX}
                    onInput={(e) => {
                      setPaddingX(e.target.value);
                    }}
                    type="range"
                    id="paddingX"
                  />
                </div>

                <div className="paddingY flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="paddingY">
                    PaddingY
                  </label>
                  <input
                    className="cursor-pointer"
                    value={paddingY}
                    onInput={(e) => {
                      setPaddingY(e.target.value);
                    }}
                    type="range"
                    id="paddingY"
                  />
                </div>

                <div className="textSize flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="textS">
                    Font Size
                  </label>
                  <input
                    className="cursor-pointer"
                    value={textSize}
                    onInput={(e) => {
                      setTextSize(e.target.value);
                    }}
                    type="range"
                    id="textS"
                  />
                </div>
              </div>
              <div className="toolBar3 flex items-center justify-center gap-20 w-full h-auto p-4">
                <div className="borderSize flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="borderSize">
                    Border
                  </label>
                  <input
                    className="cursor-pointer"
                    value={borderSize}
                    onInput={(e) => {
                      setBorderSize(e.target.value);
                    }}
                    type="range"
                    id="textS"
                  />
                </div>

                <div className="borderPicker flex items-center gap-3">
                  <label className="cursor-pointer" htmlFor="border">
                    Border
                  </label>
                  <input
                    className="cursor-pointer"
                    value={borderVal}
                    onInput={(e) => {
                      setBorderVal(e.target.value);
                    }}
                    type="color"
                    id="border"
                  />
                </div>

                <div className="borderPicker flex items-center gap-3">
                  <label htmlFor="toggle">Transparent</label>
                  <button
                    id="toggle"
                    onClick={toggleTheme}
                    className={`w-14 h-6 flex items-center rounded-full p-1 duration-300 ${
                      isToggled ? "bg-black" : "bg-white border border-gray-400"
                    }`}
                  >
                    {/* The circle inside the button */}
                    <div
                      className={`w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        isToggled
                          ? "translate-x-8 bg-white"
                          : "translate-x-0 bg-black"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom;
