import { useState } from 'react';
import { Dropdown } from '../components/Dropdown';

export function DropdownPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const updateOption = (currentSelected, option) => {
    if (currentSelected !== option) return option;
    return currentSelected;
  };

  const handleColorOptionClick = (option) => {
    setSelectedColor((currentSelected) =>
      updateOption(currentSelected, option)
    );
  };

  const handlePositionOptionClick = (option) => {
    setSelectedPosition((currentSelected) =>
      updateOption(currentSelected, option)
    );
  };

  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Purple', value: 'purple' },
    { label: 'Orange', value: 'orange' },
  ];
  const positionOptions = [
    { label: 'Part Time', value: 'part time' },
    { label: 'Full Time', value: 'full time' },
  ];
  return (
    <div className='flex'>
      <Dropdown
        options={colorOptions}
        value={selectedColor}
        onChange={handleColorOptionClick}
      />
      <Dropdown
        options={positionOptions}
        value={selectedPosition}
        onChange={handlePositionOptionClick}
      />
    </div>
  );
}
