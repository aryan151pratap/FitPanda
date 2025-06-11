import { useState } from "react";
import gender_img from '../image/gender.png';

function Gender(){
	const [gender, setGender] = useState('');
	const gen = ['male', 'female', 'other'];

	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full sm:max-w-xl md:max-w-3xl">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
					<div className="text-center">
						<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-5">
						{gender === "male" ?
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-7 7a5 5 0 100-10 5 5 0 000 10zm6-10l-5 5" />
							</svg>
							: gender === 'female' ?
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0h3m-3 0H9m3-7a5 5 0 100-10 5 5 0 000 10z" />
							</svg>
							: gender === 'other' ?
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 0a5 5 0 110 10m0-10a5 5 0 100 10m0 0v4m-3 0h6" />
							</svg>
							:
							<div>
								<img src={gender_img} alt="" className="h-10 w-10"/>
							</div>
						}
						</div>
						<h2 className="text-3xl font-bold text-gray-800">Select Gender</h2>
						<p className="text-gray-500 mt-2">
							select your gender
							<span className="block font-medium text-indigo-600"></span>
						</p>
					</div>

					<div className="flex grid grid-cols-2 gap-5 justify-between py-5 items-center">
						<div className="w-fill flex flex-col gap-6 mt-5">
						{gen.map((i, index) => (
							<div key={index}>
								<button className="w-full p-2 text-white text-2xl rounded-xl bg-gradient-to-br from-zinc-100 to-gray-400 cursor-pointer transition hover:px-4">
									{i}
								</button>
							</div>
						))}
						</div>
						<div className="w-full flex items-center justify-center">
						<svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Body (sitting pose) -->
  <ellipse cx="250" cy="280" rx="100" ry="70" fill="white" stroke="#333" stroke-width="2"/>
  
  <!-- Head -->
  <circle cx="250" cy="180" r="80" fill="white" stroke="#333" stroke-width="2"/>
  
  <!-- Ears -->
  <circle cx="200" cy="120" r="35" fill="black"/>
  <circle cx="300" cy="120" r="35" fill="black"/>
  
  <!-- Eye Patches -->
  <ellipse cx="220" cy="170" rx="30" ry="25" fill="black"/>
  <ellipse cx="280" cy="170" rx="30" ry="25" fill="black"/>
  
  <!-- Eyes -->
  <circle cx="220" cy="170" r="10" fill="white"/>
  <circle cx="280" cy="170" r="10" fill="white"/>
  <circle cx="222" cy="168" r="4" fill="black"/>
  <circle cx="282" cy="168" r="4" fill="black"/>
  
  <!-- Eyelashes -->
  <path d="M200 160 Q205 150 210 155" stroke="black" stroke-width="2" fill="none"/>
  <path d="M210 155 Q215 145 220 160" stroke="black" stroke-width="2" fill="none"/>
  <path d="M260 160 Q265 150 270 155" stroke="black" stroke-width="2" fill="none"/>
  <path d="M270 155 Q275 145 280 160" stroke="black" stroke-width="2" fill="none"/>
  
  <!-- Nose -->
  <ellipse cx="250" cy="200" rx="15" ry="10" fill="black"/>
  
  <!-- Mouth -->
  <path d="M240 220 Q250 230 260 220" stroke="black" stroke-width="2" fill="none" stroke-linecap="round"/>
  
  <!-- Arms (holding bamboo) -->
  <path d="M180 220 Q150 250 140 300" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
  <path d="M320 220 Q340 250 330 300" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
  
  <!-- Bamboo Stalks -->
  <rect x="130" y="150" width="15" height="200" fill="#7CB342" rx="5"/>
  <rect x="130" y="200" width="15" height="8" fill="#558B2F"/>
  <rect x="130" y="250" width="15" height="8" fill="#558B2F"/>
  
  <!-- Bamboo Leaves -->
  <path d="M145 140 Q170 120 160 160" fill="#4CAF50" stroke="#388E3C" stroke-width="0.5"/>
  <path d="M145 140 Q120 130 140 160" fill="#4CAF50" stroke="#388E3C" stroke-width="0.5"/>
  <path d="M145 180 Q180 170 160 210" fill="#4CAF50" stroke="#388E3C" stroke-width="0.5"/>
  <path d="M145 230 Q170 220 155 260" fill="#4CAF50" stroke="#388E3C" stroke-width="0.5"/>
  
  <ellipse cx="200" cy="330" rx="40" ry="30" fill="black"/>
  <ellipse cx="300" cy="330" rx="40" ry="30" fill="black"/>
  
  <circle cx="230" cy="210" r="8" fill="#FFB6C1" opacity="0.6"/>
  <circle cx="270" cy="210" r="8" fill="#FFB6C1" opacity="0.6"/>
  <circle cx="320" cy="140" r="12" fill="#FF69B4"/>
  <circle cx="315" cy="135" r="4" fill="#FFD700"/>
  
  <path d="M210 250 Q215 245 220 250" stroke="white" stroke-width="2" fill="none"/>
  <path d="M280 250 Q285 245 290 250" stroke="white" stroke-width="2" fill="none"/>
  <path d="M230 300 Q235 295 240 300" stroke="white" stroke-width="2" fill="none"/>
  
  <ellipse cx="250" cy="370" rx="120" ry="20" fill="#333" opacity="0.2"/>
</svg>
						</div>
					</div>

					<div className="mt-10 flex justify-between">
						<button className="text-zinc-500 flex items-center gap-2 hover:text-zinc-700 cursor-pointer">
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
			</div>
		</div>
		
		</>
	)
}

export default Gender;