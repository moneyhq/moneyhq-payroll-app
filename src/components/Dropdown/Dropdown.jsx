import { useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ options, defaultLabel, onOptionSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: defaultLabel,
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onOptionSelected) {
      onOptionSelected(option);
    }
  };

  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !event.composedPath().includes(dropdownRef.current)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.addEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className={`dropdown-wrapper ${isOpen ? "dropdown-wrapper__open" : ""}`}
      ref={dropdownRef}
    >
      <div
        className={`dropdown-select ${isOpen ? "dropdown-select__open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label}
        <FontAwesomeIcon icon={faCaretDown} className="dropdown-select__icon" />
      </div>

      {isOpen && (
        <div
          className={`dropdown-options ${
            isOpen ? "dropdown-options--open" : ""
          }`}
        >
          {options.map((option) => (
            <div
              className="dropdown-option"
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
