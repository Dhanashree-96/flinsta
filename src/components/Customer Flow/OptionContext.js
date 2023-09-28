// OptionContext.js
import React, { createContext, useContext, useState } from "react";

const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [popupMessage, setPopupMessage] = useState(""); // New state for pop-up message
  const [selectedStaff, setSelectedStaff] = useState(null); // Add selectedStaff state
  const [detailsData, setDetailsData] = useState(null); // Add detailsData state

//   artist staf
  const selectStaff = (staff) => {
    setSelectedStaff(staff);
  };

//   calendar details
const selectDetails = (details) => {
    setDetailsData(details);
  };
  
  const addOption = (option) => {
    if (selectedOptions.length >= 6) {
        setPopupMessage("You can only select up to 6 items.");
        // Automatically clear the message after 3 seconds (3000 milliseconds)
        setTimeout(() => {
          setPopupMessage("");
        }, 2000);
      } else if (!selectedOptions.includes(option)) {
        setSelectedOptions([...selectedOptions, option]);
      }
  };

  const removeOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
    
  };

  const clearOptions = () => {
    setSelectedOptions([]);
  };

  const getTotalRate = (data) => {
    let totalRate = 0;
    selectedOptions.forEach((option) => {
      const selectedData = data.find(
        (item) => item.colorHighlightsName === option
      );
      if (selectedData) {
        totalRate += parseFloat(selectedData.colorHighlightsRate) || 0;
      }
    });
    return totalRate;
  };

  return (
    <OptionContext.Provider
      value={{
        selectedOptions,
        addOption,
        removeOption,
        clearOptions,
        getTotalRate,
        popupMessage, // Include the popupMessage in the context
        selectedStaff,
        selectStaff, // Expose the selectStaff function
        detailsData, // Provide access to detailsData in the context
        selectDetails, // Add selectDetails function
      }}
    >
      {children}
      {popupMessage && (
        <div className="popup-message">{popupMessage}</div>
      )}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => {
  return useContext(OptionContext);
};
