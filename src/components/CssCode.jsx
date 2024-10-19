import React from "react";
import toast from "react-hot-toast";
import { IoMdCopy } from "react-icons/io";

const CssCode = ({
  background,
  color,
  paddingx,
  paddingy,
  textSize,
  borderRadius,
  borderSize,
  borderVal,
  isToggled,
}) => {



  const handleCopy = () => {
    const codeText = document.querySelector(
      ".bg-black.p-5 pre code"
    ).textContent;
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        console.log("Code copied to clipboard");

        toast.success("Copied successfully");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="bg-black p-5 mt-10 w-[80%] relative mx-auto h-[600px] rounded-lg">
        <div
          onClick={handleCopy}
          className="flex gap-2 cursor-pointer items-center absolute top-3 right-5"
        >
          <IoMdCopy color="white" size={22} />
          <h1 className="text-white text-sm">Copy Code</h1>
        </div>
        <div className="w-full h-full">
          <h1>
            <pre>
              <code className="text-[#91C8E4]">
                {` /* Make sure to give your button class : customBtn */
    
    
    .customBtn {
    ${
      isToggled
        ? `background-color: transparent;`
        : `background-color: ${background};`
    }
    color: ${color};
    padding-left: ${paddingx}px;
    padding-right: ${paddingx}px;
    padding-top: ${paddingy}px;
    padding-bottom: ${paddingy}px;
    ${borderSize > 0 ? `border: ${borderSize}px solid ${borderVal};` : 'border: none;'}
    font-size: ${textSize}px;
    border-radius: ${borderRadius}px;
  }`}
              </code>
            </pre>
          </h1>
        </div>
      </div>
    </>
  );
};

export default CssCode;
