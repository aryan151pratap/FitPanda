function Goals(){
	return(
		<>
		<div className="bg-white rounded-sm">

			<Add_goal/>

		</div>
		</>
	)
}

function Add_goal(){
	return (
		<div className="bg-gray-900 text-white p-4 rounded-sm shadow-lg space-y-6">
			<h2 className="text-2xl font-semibold text-center mb-4">Set Your Goals</h2>

			<div className="space-y-4">
				<div className="flex flex-col md:flex-row md:items-center gap-3">
					<label htmlFor="goalTitle" className="w-full md:w-1/3">Goal Title</label>
					<input
						id="goalTitle"
						type="text"
						placeholder="e.g. Learn React.js"
						className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
					/>
				</div>

				<div className="flex flex-col md:flex-row md:items-center gap-3">
					<label htmlFor="goalDescription" className="w-full md:w-1/3">Description</label>
					<input
						id="goalDescription"
						type="text"
						placeholder="Brief description of your goal"
						className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
					/>
				</div>

				<div className="flex flex-col md:flex-row md:items-center gap-3">
					<label htmlFor="goalDeadline" className="w-full md:w-1/3">Deadline</label>
					<input
						id="goalDeadline"
						type="date"
						className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition text-white font-medium">
					Save Goal
				</button>
			</div>
		</div>
	);
}


export default Goals;