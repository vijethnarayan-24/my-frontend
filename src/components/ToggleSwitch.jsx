import { useState } from "react";

export default function ToggleSwitch({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) onChange(newState); // send value to parent if needed
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex items-center h-5 w-10 rounded-full transition-colors duration-300 focus:outline-none ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      aria-pressed={isOn}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-4 w-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
}
