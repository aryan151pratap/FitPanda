import { useState } from "react";
import Assistant from "./assistant";
import MyLineChart from "./visual";

function Page(){
	const today = new Date();
	const [currentMonth, setCurrentMonth] = useState(today.getMonth());
	const [currentYear, setCurrentYear] = useState(today.getFullYear());
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const days = [1, 2, 3, 4, 5, 6, 7];

	const bmi = [15, 18.5, 25, 30, 40, 50, 60];

	const report = [
		{
			name: 'blood status',
			value: '112/75',
			color: 'cyan',
			report: 'Normal blood pressure (ideal: 90/60–120/80)',
			statusColor: 'green'
		},
		{
			name: 'heart rate',
			value: '110',
			unit: 'BMI',
			color: 'indigo',
			report: 'Elevated heart rate (normal: 60–100 bpm)',
			statusColor: 'yellow'
		},
		{
			name: 'blood count',
			value: '80-85',
			color: 'red',
			report: 'Normal hemoglobin range for males; borderline low for females',
			statusColor: 'green'
		},
		{
			name: 'glucose',
			value: '150',
			unit: 'ml',
			color: 'orange',
			report: 'High glucose (normal fasting: 70–99 mg/dL)',
			statusColor: 'red'
		}
	];

	const [currentReport, setCurrentReport] = useState('');
	const [currentData, setCurrentData] = useState({name: 'blood status', color: 'cyan'});

	const details = [
		{name: 'weight', value: 72, unit: 'kg', color: 'cyan'},
		{name: 'height', value: 170, unit: 'cm', color: 'red'}
	]

	const handle_open_div = function(name){
		if(currentReport === name){
			return setCurrentReport('');
		}
		setCurrentReport(name);
	}


	return(
		<>
		<div className="h-full p-2 grid sm:grid-cols-1 md:grid-cols-2 gap-4">


			<div className="flex flex-col gap-4 order-1 md:order-2">
				<div className="w-full rounded-md bg-black/10 backdrop-blur-md p-2 text-black grid sm:grid-cols-2 gap-2">
					<div className="h-full flex flex-col justify-between">
						<h1 className="font-bold">Body Mass Index (BMI)</h1>
						<div className="p-2 ">
							<p className="text-2xl font-bold">25.0</p>
						</div>
						<div className="">
							<div className="w-full p-1.5 rounded-full bg-red-300 bg-gradient-to-r from-purple-300 via-blue-700 via-yellow-200 to-red-200"></div>
						</div>
						<div className={`flex justify-between p-1`}>
							{bmi.map((i, index) => (
								<span className="text-sm text-center">{i}</span>
							))}
						</div>
					</div>
					<div className="border-t-2 sm:border-t-0 sm:border-l-2 border-black/20 p-2 flex flex-col sm:justify-between gap-2 text-white">
							{details.map((i, index) => (
								<div className={`bg-${i.color}-400 rounded-xl`}>
									<div className="flex justify-between gap-1 px-2 py-1">
										{Array.from({ length: 21 }, (_, i) => (
											<div key={i} className={`${i%10 === 0 ? "h-4 bg-black/60" : "h-2 bg-white"} p-[1px]`}></div>
										))}
									</div>

									<div className="grid grid-cols-2 p-2">
										<span className="capitalize">{i.name}</span>
										<span className="flex gap-1 font-bold">{i.value}<span>{i.unit}</span></span>
									</div>
								</div>
							))}
					</div>

				</div>

				<div className="w-full flex flex-col sm:flex-row gap-4">

					<div className="w-full flex flex-col gap-4 text-black mb-4">
						<div className="flex flex-row gap-2 items-center">
							<div className="relative z-20 w-fit h-fit p-0.5 rounded bg-orange-500"></div>
							<div className="absolute w-fit h-fit p-1 rounded bg-orange-200 blur-sm"></div>
							<h1 className="capitalize sm:font-semibold sm:text-xl">overview</h1>
						</div>
						<div className="flex flex-col gap-4 grid grid-cols-2 sm:grid-cols-1">
							{report.map((i, index) => (
								<div className={`rounded-xl bg-${i.color}-400 px-2 py-4 sm:p-4 flex flex-col gap-2 text-white`}>
									<div className="flex flex-row gap-2 items-center">
										<div className={`h-fit p-3 rounded-full bg-${i.color}-200`}>
											{getHealthIcon(i.name)}
										</div>
										<div>
											<p className="capitalize">{i.name}</p>
											<span className="font-bold flex gap-2">{i.value}<span>{i.unit}</span></span>
										</div>
										<div className="hidden sm:flex ml-auto text-white bg-white/30 backdrop-blur-md rounded-full p-2 hover:bg-white/50 cursor-pointer"
											onClick={() => handle_open_div(i.name)}
										>
											{currentReport === i.name ?
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
											</svg>	
											:
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
											</svg>
											}
										</div>
									</div>
									{currentReport === i.name &&
										<div className="bg-white/30 p-2 rounded-lg">
											<p className="text-sm">{i.report}</p>
										</div>
									}
								</div>
							))}
						</div>
					</div>

					<div className="w-full flex flex-col gap-4 text-black">
						<div className="flex flex-row gap-2 items-center">
							<div className="relative z-20 w-fit h-fit p-0.5 rounded bg-orange-500"></div>
							<div className="absolute w-fit h-fit p-1 rounded bg-orange-200 blur-sm"></div>
							<h1 className="capitalize sm:font-semibold sm:text-xl">Previous</h1>
						</div>
						<div className="">
							<div className="rounded-lg bg-black/20 p-4">
								<div className="w-full flex justify-between">
									<p className="font-bold text-black/80">{monthNames[currentMonth]}</p>
									<p className="px-2 py-2 text-sm rounded-full bg-white text-black flex flex-row gap-4 items-center">
										{currentYear}
										<div className="ursor-pointer">
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
											</svg>
										</div>
									</p>
								</div>
								<div className="grid grid-cols-7 py-2 gap-4">
									{daysOfWeek.map((i, index) => (
										<div key={index} className="text-sm text-center">
											<span>{i}</span>
										</div>
									))}
									
								</div>
								<div className="grid grid-cols-7 py-2 gap-4">
									{days.map((i, index) => (
										<div key={index} className="sm:text-sm">
											<span className={`w-fit h-fit px-2 py-1 rounded-full
												${i === 4 ? 
													"bg-orange-500 text-white border-white border-2"
													:
													""
												}
											`}>{i}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* current report */}
						<div className={`h-full rounded-lg flex flex-col gap-2`}>
							<div className="flex flex-row text-xs justify-between gap-[1px] bg-black/10 p-1 rounded-full">
								{report.map((i, index) => (
									<div className={`px-2 py-1 bg-${i.color}-500 rounded-full text-white cursor-pointer`}
									onClick={() => setCurrentData({name: i.name, color: i.color})}
									>
										<span className="capitalize font-semibold">{i.name}</span>
									</div>
								))}
							</div>

							<div className={`flex flex-col h-[170px] sm:h-[80%] bg-${currentData.color}-100/30 rounded-lg`}>
								<div className="h-[80%]">
									<MyLineChart color={currentData.color}/>
								</div>
								<div className="flex flex-row grid grid-cols-7 p-2 mt-auto">
									{daysOfWeek.map((i, index) => (
										<div key={index} className={`text-sm text-center text-${currentData.color}-800`}>
											<span>{i}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						
					</div>


				</div>
			</div>	


			
			<div className="flex order-2 mb-8 sm:mb-4">
				<Assistant/>
			</div>

		</div>
		</>
	)
	
	
}


const getHealthIcon = (name) => {
	if (name === 'blood status') {
		return (
		<svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3.25C12 3.25 7 8.2 7 12a5 5 0 0010 0c0-3.8-5-8.75-5-8.75z" />
		</svg>
		);
	} else if (name === 'heart rate') {
		return (
		<svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
			<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" />
		</svg>
		);
	} else if (name === 'blood count') {
		return (
		<svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25S6 8.5 6 13a6 6 0 0012 0c0-4.5-6-10.75-6-10.75z" />
		</svg>
		);
	} else {
		return (
		<svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2h6v2H9V2zM7 6h10v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6z" />
		</svg>
		);
	}
};



export default Page;