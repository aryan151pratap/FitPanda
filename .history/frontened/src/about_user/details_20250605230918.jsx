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
				<h2 className="text-3xl font-bold text-gray-800">Fill the details</h2>
				<p className="text-gray-500 mt-2">
					Fill the details
					<span className="block font-medium text-indigo-600"></span>
				</p>
			</div>

			<div className="flex flex-col gap-5 py-3">
				<div className="w-fill flex flex-col gap-2">
					<label htmlFor="">Height</label>
					<div className="w-full flex">
					<input type="number" className="p-2 outline-none border-b-2 border-zinc-300"/>
					<span></span>
					</div>				
				</div>
				<div className="w-fill flex flex-col gap-2">
					<label htmlFor="">weight</label>
					<div className="w-full">
					<input type="number" className="p-2 outline-none border-b-2 border-zinc-300"/>
					<span></span>
					</div>
				</div>
				<div className="w-fill flex flex-col gap-2">
					<label htmlFor="">Age</label>
					<div className="w-full flex flex-row">
					<input type="number" className="p-2 outline-none border-b-2 border-zinc-300"/>
					<span></span>
					</div>				</div>
				<div className="w-full flex items-center justify-center">
					
				</div>
			</div>
		</div>
		</>
	)
}

export default Details;