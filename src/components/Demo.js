// import React, { useState } from 'react';
// import '../assets/css/Style.css';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// // import timeGridPlugin from '@fullcalendar/timegrid';

// const artists = [
//   'Artist 1',
//   'Artist 2',
//   'Artist 3',
//   'Artist 4',
//   'Artist 5',
// ];

// const artistTimeSlots = [
//   {
//     artist: 'Artist 1',
//     timeSlots: {
//       '2023-09-10': ['10:00 AM', '11:00 AM', '2:00 PM'],
//       '2023-09-20': ['11:00 AM', '1:00 PM', '3:00 PM'],
//     },
//   },
//   {
//     artist: 'Artist 2',
//     timeSlots: {
//       '2023-09-10': ['9:00 AM', '12:00 PM', '2:00 PM'],
//       '2023-09-20': ['10:00 AM', '1:00 PM', '3:00 PM'],
//     },
//   },
//   // Add more artists and their time slots as needed
// ];

// function App() {
//   const [selectedArtist, setSelectedArtist] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleArtistClick = (index) => {
//     setSelectedArtist(index);
//     setSelectedDate(null);
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date.dateStr);
//   };

//   const getAvailableTimeSlots = () => {
//     if (selectedArtist !== null && selectedDate !== null) {
//       const artist = artistTimeSlots[selectedArtist];
//       const timeSlotsForDate = artist.timeSlots[selectedDate] || [];

//       return (
//         <div className="time-slots">
//           <h3>Available Time Slots:</h3>
//           {timeSlotsForDate.length > 0 ? (
//             timeSlotsForDate.map((slot, index) => (
//               <p key={index}>{slot}</p>
//             ))
//           ) : (
//             <p>No available time slots for this date.</p>
//           )}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="App">
//       <h1>Artists</h1>
//       <div className="artist-cards">
//         {artists.map((artist, index) => (
//           <div
//             key={index}
//             className={`artist-card ${selectedArtist === index ? 'selected' : ''}`}
//             onClick={() => handleArtistClick(index)}
//           >
//             <h2>{artist}</h2>
//           </div>
//         ))}
//       </div>
//       <div className="calendar-container">
//         {selectedArtist !== null && (
//         <FullCalendar
//             plugins={[timeGridPlugin]}
//             initialView="timeGridWeek" /* Show a week view */
//             events={[
//               // Define your booked dates here in the following format:
//               { title: 'Booked', start: '2023-09-10', color: 'red' },
//               { title: 'Booked', start: '2023-09-20', color: 'red' },
//               // Add more booked dates as needed
//             ]}
//             dateClick={handleDateClick}
//           />
//         )}
//       </div>
//       {getAvailableTimeSlots()}
//     </div>
//   );
// }

// export default App;