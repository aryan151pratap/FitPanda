import { useState } from "react";

function Details({ data , setData}){
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

			<div className="flex flex-col gap-6 py-6 px-4 max-w-md mx-auto">
			{[
				{ name: 'height', label: 'Height (cm)', placeholder: 'Enter your height' },
				{ name: 'weight', label: 'Weight (kg)', placeholder: 'Enter your weight' },
				{ name: 'age', label: 'Age (years)', placeholder: 'Enter your age' },
			].map((field, index) => (
				<div key={index} className="flex flex-col w-full">
				<label className="mb-1 text-sm font-medium text-gray-700">{field.label}</label>
				<input
					type="number"
					value={data[field.name]}
					onChange={(e) => {
						setData({ ...data, [field.name]: e.target.value})
					}}
					placeholder={field.placeholder}
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
				/>
				</div>
			))}
			</div>

		</div>
		</>
	)
}

export default Details;