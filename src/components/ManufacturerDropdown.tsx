import { ChangeEvent, useState } from 'react';
import { Dropdown } from '../components/Dropdown';

export function DropdownPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const updateOption = (currentSelected: any, option: ChangeEvent<HTMLInputElement>) => {
    if (currentSelected !== option) return option;
    return currentSelected;
  };

  const handleColorOptionClick = (option: ChangeEvent<HTMLInputElement>) => {
    console.log(option);
    setSelectedColor((currentSelected) =>
      updateOption(currentSelected, option)
    );
  };

  const handlePositionOptionClick = (option: ChangeEvent<HTMLInputElement>) => {
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleColorOptionClick(e)}
      />
      <Dropdown
        options={positionOptions}
        value={selectedPosition}
        onChange={handlePositionOptionClick}
      />
    </div>
  );
}
