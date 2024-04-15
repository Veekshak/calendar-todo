import { useState } from "react";
import MainView from "./components/MainView";
import Navbar from "./components/Navbar";
import { v4 } from "uuid";

// Add Dummy Tasks for the calendar
const addTaskToDay = (daysArray, dayIndex, task) => {
  if (dayIndex >= 0 && dayIndex < daysArray.length) {
    daysArray[dayIndex].tasks.push(task);
  } else {
    console.error("Day index out of bounds");
  }
};

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const monthAndYear = currentDate?.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const generateWholeMonth = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numberOfDays = new Date(year, month + 1, 0).getDate();
    const wholeMonth = [];

    const getDaySuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    for (let i = 1; i <= numberOfDays; i++) {
      const dayOfWeek = new Date(year, month, i).toLocaleDateString("en-US", {
        weekday: "long",
      });
      const daySuffix = getDaySuffix(i);
      wholeMonth.push({
        id: `Day-${v4()}`,
        dayOfWeek: dayOfWeek,
        date: `${i}${daySuffix}`,
        tasks: [],
      });
    }

    return wholeMonth;
  };

  const data = [
    {
      id: "Column1",
      title: "Column1",
      tasks: [
        {
          id: "Card1",
          title: "Card1",
        },
        {
          id: "Card2",
          title: "Card2",
        },
      ],
    },
    {
      id: "Column2",
      title: "Column2",
      tasks: [
        {
          id: "Card3",
          title: "Card3",
        },
        {
          id: "Card4",
          title: "Card4",
        },
      ],
    },
    {
      id: "Column3",
      title: "Column3",
      tasks: [
        {
          id: "Card5",
          title: "Card5",
        },
        {
          id: "Card6",
          title: "Card6",
        },
      ],
    },
    {
      id: "Column4",
      title: "Column4",
      tasks: [
        {
          id: "Card7",
          title: "Card7",
        },
        {
          id: "Card8",
          title: "Card8",
        },
      ],
    },
    {
      id: "Column5",
      title: "Column5",
      tasks: [],
    },
  ];

  // Query to backend or generate dummy data now
  const dummyData = generateWholeMonth(currentDate);
  addTaskToDay(dummyData, 2, {
    id: `Task-${v4()}`,
    title: "Git Push to Repo",
  });
  addTaskToDay(dummyData, 3, {
    id: `Task-${v4()}`,
    title: "Contribute to Open Source",
  });
  addTaskToDay(dummyData, 3, {
    id: `Task-${v4()}`,
    title: "Go on Running",
  });
  addTaskToDay(dummyData, 1, {
    id: `Task-${v4()}`,
    title: "Attend meeting with Junior Devs",
  });

  return (
    <>
      <Navbar
        monthAndYear={monthAndYear}
        onNextMonth={handleNextMonth}
        onPrevMonth={handlePrevMonth}
      />
      <MainView data={dummyData} />;
    </>
  );
}
