import { useRef, useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
     
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  
  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header Calendarrow flex-middle">
        <div className="Calendarcol  Calendarcol-start">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="Calendarcol Calendarcol-end d-flex Calendarrow ">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <HiOutlineChevronLeft />
          </div>
          <div className="icon" onClick={() => changeWeekHandle("next")}>
            <HiOutlineChevronRight />
          </div>
        </div>
        {/* <div className="Calendarcol Calendarcol-end">
          <div className="icon" onClick={() => changeWeekHandle("next")}><HiOutlineChevronRight /></div>
        </div> */}
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="Calendarcol Calendarcol-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return (
      <>     
        <div className="days row"
        >{days}</div>
        
      </>
    );
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`Calendarcol cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div className="Calendarrow " key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="header Calendarrow  flex-middle">
        <div className="Calendarcol Calendarcol-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <HiOutlineChevronLeft />
          </div>
        </div>
        {/* <div>{currentWeek}</div> */}
        <div className="Calendarcol Calendarcol-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">
            <HiOutlineChevronRight />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="calendar week-container ">
      {renderHeader()}
      {/* {renderFooter()} */}

      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
