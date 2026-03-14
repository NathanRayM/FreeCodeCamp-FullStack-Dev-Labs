const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{ backgroundColor: color }} id="color-picker-container">
      <p className="stylep">Choose a color using the color input below:</p>
      <input
        value={color}
        onChange={changeColor}
        id="color-input"
        type="color"
      />
    </div>
  );
};
