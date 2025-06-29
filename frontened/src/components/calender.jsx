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

	const dates = [];
	for (let i = 0; i < firstDay; i++) dates.push(null);
	for (let i = 1; i <= daysInMonth; i++) dates.push(i);

	return (
		<div className="sm:w-[400px] p-4 shadow-md rounded-xl bg-white">
			<div className="flex justify-between items-center mb-4">
				<button onClick={handlePrevMonth} className="text-xl font-bold">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						fill="currentColor"
						className="w-10 h-10 text-white bg-zinc-500 rounded hover:bg-zinc-800 cursor-pointer"
						>
						<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
					</svg>
				</button>
				<h2 className="text-lg font-semibold border-4 border-dashed rounded p-1">
					{monthNames[currentMonth]} {currentYear}
				</h2>
				<button onClick={handleNextMonth} className="text-xl font-bold">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						fill="currentColor"
						className="w-10 h-10 text-white bg-zinc-500 rounded hover:bg-zinc-800 cursor-pointer"
						>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
					</svg>
				</button>
			</div>

			<div className="grid grid-cols-7 gap-2 text-center font-medium border-b-2 border-t-2 border-dashed">
				{daysOfWeek.map((day, idx) => (
					<div key={idx} className="py-2 rounded text-center">{day}</div>
				))}
			</div>

			<div className="grid grid-cols-7 text-center gap-2 mt-2">
				{dates.map((date, idx) => (
					<div key={idx} className="">
						{date && (
							<div className={`p-2 flex items-center justify-center rounded border-b-4 border-r-2 text-white
								${date === today.getDate() &&
								currentMonth === today.getMonth() &&
								currentYear === today.getFullYear()
									? "bg-blue-500 text-white border-blue-900"
									: "bg-zinc-400 hover:bg-gray-200 hover:text-black cursor-pointer border-zinc-900"
								}`}>
								{date}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Calendar;
