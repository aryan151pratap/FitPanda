function Details(){
	return(
		<>
		<div>
			<div className="text-center">
				<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-5">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-7 7a5 5 0 100-10 5 5 0 000 10zm6-10l-5 5" />
					</svg>
				</div>
				<h2 className="text-3xl font-bold text-gray-800">Select Gender</h2>
				<p className="text-gray-500 mt-2">
					select your gender
					<span className="block font-medium text-indigo-600"></span>
				</p>
			</div>

			<div className="flex grid grid-cols-2 gap-5 justify-between py-5 items-center">
				<div className="w-fill flex flex-col gap-6 mt-5">
					<label htmlFor="">Height</label>
					<input type="number" />
				</div>
				<div className="w-fill flex flex-col gap-6 mt-5">
					<label htmlFor="">weight</label>
					<input type="number" />
				</div>
				<div className="w-fill flex flex-col gap-6 mt-5">
					<label htmlFor="">Age</label>
					<input type="number" />
				</div>
				<div className="w-full flex items-center justify-center">
					
				</div>
			</div>

			<div className="mt-10 flex justify-between">
				<button className="text-zinc-500 flex items-center gap-2 hover:text-zinc-700 cursor-pointer"
				// onClick={handle_save_gender}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					<span className="">Back</span>
				</button>
				<button className="text-white px-2 py-1 rounded-sm bg-gradient-to-br from-indigo-500 to-purple-500 flex gap-2 items-center">
					<span>Next</span>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</div>
		</div>
		</>
	)
}

export default Details;