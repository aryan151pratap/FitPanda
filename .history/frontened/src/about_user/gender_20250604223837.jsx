function Gender(){
	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
			<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
			<div className="text-center mb-8">
				<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-7 7a5 5 0 100-10 5 5 0 000 10zm6-10l-5 5" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0h3m-3 0H9m3-7a5 5 0 100-10 5 5 0 000 10z" />
				</svg>

				</div>
				<h2 className="text-3xl font-bold text-gray-800">Male</h2>
				<p className="text-gray-500 mt-2">
				<span className="block font-medium text-indigo-600"></span>
				</p>
			</div>
			</div>
			</div>
		</div>
		</>
	)
}

export default Gender;