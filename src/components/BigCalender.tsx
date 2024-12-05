"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  // Updated color palette with light green background
  const calendarStyles = {
    style: { 
      height: "98%",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f0fdf4", // Light mint green background
    },
    eventWrapperStyle: {
      backgroundColor: "#22c55e", // Vibrant green for events
      borderRadius: "8px",
      color: "white",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    dayPropStyles: {
      weekend: {
        backgroundColor: "#f4fdf6", // Very light green for weekends
      },
      today: {
        backgroundColor: "#dcfce7", // Soft green highlight for current day
        fontWeight: "bold",
      }
    }
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded-lg">
      <Calendar
        localizer={localizer}
        events={data}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={calendarStyles.style}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
        eventPropGetter={(event) => ({
          style: {
            ...calendarStyles.eventWrapperStyle,
          }
        })}
        dayPropGetter={(date) => {
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          const isToday = moment(date).isSame(moment(), 'day');
          
          return {
            style: isToday 
              ? calendarStyles.dayPropStyles.today 
              : (isWeekend ? calendarStyles.dayPropStyles.weekend : {})
          };
        }}
      />
    </div>
  );
};

export default BigCalendar;