import React from "react";
import { IoMdCopy } from "react-icons/io";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const TailwindCode = ({
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
      <div className="bg-black p-5 mt-10 w-[80%] mx-auto h-[600px] overflow-scroll hide-scrollbar relative rounded-lg">
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
                {`<button
  className="px-[${paddingx}] py-[${paddingy}]
   bg-[${
     isToggled ? "transparent" : background
   }] rounded-[${borderRadius}px] text-[${color}] text-[${textSize}px] ${
                  borderSize > 0
                    ? `border border-[${borderVal}]`
                    : "border-none"
                }"
>
  Click Me
</button>`}
              </code>
            </pre>
          </h1>
        </div>
      </div>
    </>
  );
};

export default TailwindCode;
