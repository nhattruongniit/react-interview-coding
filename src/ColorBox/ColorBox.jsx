import React, { useState } from "react";

const boxColors = [
  { id: 1, text: "box 1", className: "red", originalColor: "red" },
  { id: 2, text: "box 2", className: "yellow", originalColor: "yellow" },
  { id: 3, text: "box 3", className: "aqua", originalColor: "aqua" },
  { id: 4, text: "box 4", className: "purple", originalColor: "purple" }
];

function ColorBox() {
  const [currentColor, setCurrentColor] = useState(null);

  function handleChangeColor(color) {
    if (currentColor === color) {
      setCurrentColor(null);
      return;
    }
    setCurrentColor(color); // null
  }

  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Requirements</h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build an playing color box. User can toggle switch color between boxes each other.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
            <li>
              We have 4 blocks: red, yellow, aqua, purple.
            </li>
            <li>
              When user click red block. The other blocks will change same background color red.
            </li>
            <li>
              After user click red block again. They will go back normal. 
            </li>
            <li>
              Perform the action same with Gold, Aqua, Purple.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />

      <div className="mb-2">
        Current color: {currentColor || 'Default'}
      </div>
      <div className="boxColor">
        
        {boxColors.map((box) => (
          <div
            style={{
              backgroundColor:
                currentColor === box.originalColor
                  ? box.originalColor
                  : currentColor
            }}
            className={box.className}
            onClick={() => handleChangeColor(box.originalColor)}
          >
            {box.originalColor}
          </div>
        ))}
      </div>
    </>
  );
}
export default ColorBox;
