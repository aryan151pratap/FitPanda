import { useState } from "react";

function Gender(){
	const [gender, setGender] = useState('');
	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
					<div className="text-center mb-8">
						<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
						{gender === "male" ?
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-7 7a5 5 0 100-10 5 5 0 000 10zm6-10l-5 5" />
							</svg>
							: gender === 'female' ?
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0h3m-3 0H9m3-7a5 5 0 100-10 5 5 0 000 10z" />
							</svg>
							:
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 0a5 5 0 110 10m0-10a5 5 0 100 10m0 0v4m-3 0h6" />
							</svg>
						}
						</div>
						<h2 className="text-3xl font-bold text-gray-800">Select Gender</h2>
						<p className="text-gray-500 mt-2">
							select your gender
							<span className="block font-medium text-indigo-600"></span>
						</p>
					</div>

					<div className="flex justify-between">
						<label htmlFor="" className="text-zinc-500">Gender</label>
						<select name="" id="">
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">other</option>
						</select>
					</div>

					<div>
						<button>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
		
		</>
	)
}

export default Gender;