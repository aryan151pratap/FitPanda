import { useState } from "react";

function Calendar() {
	const today = new Date();
	const [currentMonth, setCurrentMonth] = useState(today.getMonth());
	const [currentYear, setCurrentYear] = useState(today.getFullYear());

	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const getDaysInMonth = (month, year) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (month, year) => {
		return new Date(year, month, 1).getDay();
	};

	const handlePrevMonth = () => {
		if (currentMonth === 0) {
			setCurrentMonth(11);
			setCurrentYear(currentYear - 1);
		} else {
			setCurrentMonth(currentMonth - 1);
		}
	};

	const handleNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentMonth(0);
			setCurrentYear(currentYear + 1);
		} else {
			setCurrentMonth(currentMonth + 1);
		}
	};

	const daysInMonth = getDaysInMonth(currentMonth, currentYear);
	const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

	const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
	const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
	const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

	// Create full 6x7 grid (42 cells)
	const dates = [];

	// Fill in previous month's days
	for (let i = firstDay - 1; i >= 0; i--) {
		dates.push({
			day: daysInPrevMonth - i,
			current: false,
			month: prevMonth,
			year: prevYear,
		});
	}

	// Fill in current month's days
	for (let i = 1; i <= daysInMonth; i++) {
		dates.push({
			day: i,
			current: true,
			month: currentMonth,
			year: currentYear,
		});
	}

	// Fill in next month's days
	const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
	const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
	while (dates.length < 42) {
		dates.push({
			day: dates.length - (firstDay + daysInMonth) + 1,
			current: false,
			month: nextMonth,
			year: nextYear,
		});
	}

	console.log(dates);

	return (
		<div className="sm:w-[400px] shadow-md rounded-lg bg-zinc-700 text-white overflow-hidden inset-shadow-sm inset-shadow-zinc-600">
			<div className="flex items-center p-4">
				<h2 className="text-lg font-semibold flex gap-2">
					<span className="">{monthNames[currentMonth]}</span>
					<span>{currentYear}</span>
				</h2>
				<div className="items-center flex ml-auto gap-2">
					<button onClick={handlePrevMonth} className="text-xl font-bold">
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 24 24" 
							fill="currentColor"
							className="w-10 h-10 text-white bg-zinc-600 rounded hover:bg-zinc-800 cursor-pointer shadow-xl"
							>
							<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
						</svg>
					</button>
					<button onClick={handleNextMonth} className="text-xl font-bold">
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 24 24" 
							fill="currentColor"
							className="w-10 h-10 text-white bg-zinc-600 rounded hover:bg-zinc-800 cursor-pointer shadow-xl"
							>
							<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
						</svg>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-7 text-center bg-zinc-600/50 inset-shadow-sm inset-shadow-zinc-600 font-medium rounded shadow-xl">
				{daysOfWeek.map((day, idx) => (
					<div key={idx} className="py-1 text-cenetr border-l-1 border-r-1 text-center border-zinc-700">{day}</div>
				))}
			</div>

			<div className="grid grid-cols-7 text-center">
				{dates.map((date, idx) => (
					<div key={idx} className="">
						{date && (
							<div className={`flex p-3 font-bold text-xl border-l-1 border-r-1 border-b-1 border-zinc-300 items-center justify-center text-black
								${ date.current === true ?
										date.day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() ?
											"bg-zinc-500 text-white inset-shadow-sm inset-shadow-zinc-900 border-zinc-900"
										: 
											"bg-zinc-100 hover:bg-gray-200 cursor-pointer"
									:
										"text-zinc-400 bg-zinc-100 "
								}
								${idx%7 === 0 && 
									"text-red-700/70"
								}
								${date.day === 3 &&
									"shrink-0 border-zinc-300"
								}`}
								>
								{date.day}
							</div>
						)}
					</div>
				))}
			</div>
			<div className="p-4 rounded-b-lg bg-zinc-700 inset-shadow-sm inset-shadow-zinc-900 border-b-4 border-zinc-900">
			</div>
		</div>
	);
}

export default Calendar;
