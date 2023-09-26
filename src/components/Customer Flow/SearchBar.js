import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const suggestionNames = [
    "hair style",
    "spa",
    "massage",
    "hair style",
    "spa",
    "massage",
    "Suggestion",
    "Suggestion 4"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState(suggestionNames[0]);
  const [inputText, setInputText] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionCount = suggestionNames.length;
  const durationInSeconds = 60; // 1 minute

  let intervalId; // Store the interval ID

  const autoScrollSuggestions = () => {
    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestionCount);
      setPlaceholder(suggestionNames[currentIndex]);
    }, (durationInSeconds * 400) / suggestionCount);
  };

  useEffect(() => {
    autoScrollSuggestions();

    // Clear the previous interval when the component re-renders
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, suggestionNames, suggestionCount, durationInSeconds]);

  const handleSearchBarClick = () => {
    // Hide all suggestions
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    // Start filtering suggestions based on input
    const searchText = e.target.value.toLowerCase();
    setInputText(searchText);

    // If input is empty, show no suggestions
    if (searchText === '') {
      setShowSuggestions(false);
    } else {
      // Filter and show matching suggestions
      setFilteredSuggestions(
        suggestionNames.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchText)
        )
      );
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Handle click on a suggestion
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  return (
    <>
        <div className='Searchbat-input'>
      <input
        type="text"
        id="search-bar"
        placeholder={inputText || placeholder} 
        onClick={handleSearchBarClick}
        value={inputText}
        onChange={handleInputChange}
      />
      {/* {showSuggestions && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )} */}
      </div>
    </>
  );
};

export default SearchBar;