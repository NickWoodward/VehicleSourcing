import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { Panel } from './Panel';

export function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      // Close the dropdown if the current event target isn't contained within it (ie if not clicked on)
      if (!divEl.current.contains(event.target)) {
        // Basic is fine, doesn't depend on previous state
        setIsOpen(false);
      }
    };

    // Uses the capture phase to listen for clicks.
    // React doesn't re-render immediately on state change (to allow batch state updates),
    // but the bubble phase of the event takes longer regardless, meaning that the UI can have changed before the handler has run
    // Using the capture phase means the handler will run before (for debugging with performance.now() see @10:00: https://www.udemy.com/course/react-redux/learn/lecture/34695346#questions)
    document.addEventListener('click', handler, true);

    // Cleanup
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const toggleOpen = () => !isOpen;

  const handleClick = () => {
    // Relies on previous state, so pass function to update
    setIsOpen(toggleOpen);
  };

  window.timeTwo = performance.now();
  const handleOptionClick = (option) => {
    window.timeOne = performance.now();

    // Doesn't rely on previous state, simple update
    setIsOpen(false);

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1 break-normal'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='relative w-64 p-6'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}
