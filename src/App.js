import React, { useState} from "react";
import "./App.css";

const ColorPicker = ({ colors, onColorSelect, selectedColor }) => {
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    onColorSelect(color);
    setShowColors(false);
  };

  return (
    <div style={{ textAlign: "center"}}>
      <div style={{ marginLeft: "300px", marginRight:"300px", marginTop:"300px", marginBottom:"300px" }}>
        <button
          style={{ margin: "auto", display: "block", backgroundColor:"SpringGreen" }}
          onClick={() => setShowColors(!showColors)}
        >
          Pick a color
        </button>
        {showColors && (
          <div style={{ marginTop: "10px" }}>
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-tag"
                data-color={color}
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                  display: "inline-block",
                  margin: "5px",
                  cursor: "pointer",
                  border: color === selectedColor ? "2px solid black" : "none",
                  boxShadow:
                    color === selectedColor ? "2px 2px 5px black" : "none",
                }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "DeepPink",
    "cyan",
    "orange",
    "purple",
    "pink",
    "ForestGreen",
    "tomato",
    "skyblue",
    "brown",
    "LightSalmon",
    "SteelBlue",
    "Gold",
  ];
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div
      className="outer"
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <div
        className="box"
        style={{ padding: "20px", backgroundColor: selectedColor }}
      >
        <ColorPicker
          colors={colors}
          onColorSelect={handleColorSelect}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
