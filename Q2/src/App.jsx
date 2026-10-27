import React, { createContext, useContext, useMemo, useState } from 'react';

const ColorContext = createContext();

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const useColorPalette = () => {
  const [colors, setColors] = useState(['#ff5733', '#33ff57', '#5733ff']);
  const [selectedColor, setSelectedColor] = useState(0);

  const addColor = () => {
    setColors((previous) => [...previous, getRandomColor()]);
  };

  const removeColor = (index) => {
    setColors((previous) => {
      if (previous.length <= 1) {
        return previous;
      }

      const nextColors = previous.filter((_, idx) => idx !== index);
      setSelectedColor((currentSelected) => {
        if (currentSelected === null) return null;
        if (currentSelected >= nextColors.length) {
          return nextColors.length - 1;
        }
        return currentSelected;
      });
      return nextColors;
    });
  };

  const selectColor = (index) => {
    setSelectedColor(index);
  };

  const contextValue = useMemo(
    () => ({
      colors,
      selectedColor,
      addColor,
      removeColor,
      selectColor,
    }),
    [colors, selectedColor]
  );

  return contextValue;
};

const ColorPalette = () => {
  const { colors, selectedColor, selectColor, removeColor } = useContext(ColorContext);

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={`${color}-${index}`}
          className={`color-box ${selectedColor === index ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => selectColor(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              selectColor(index);
            }
          }}
        >
          <button
            type="button"
            className="remove-button"
            onClick={(event) => {
              event.stopPropagation();
              removeColor(index);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

const ColorControls = () => {
  const { addColor } = useContext(ColorContext);

  return (
    <div className="color-controls">
      <button type="button" onClick={addColor}>
        Add Color
      </button>
    </div>
  );
};

const App = () => {
  const value = useColorPalette();

  return (
    <ColorContext.Provider value={value}>
      <div className="app">
        <h1>Color Palette Manager</h1>
        <ColorPalette />
        <ColorControls />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
