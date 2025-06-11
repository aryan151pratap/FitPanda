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
						<div className="flex items-center bg-zinc-500 justify-center">
							<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
						<ellipse cx="150" cy="180" rx="80" ry="100" fill="white" stroke="black" stroke-width="3"/>
						
						<circle cx="150" cy="100" r="70" fill="white" stroke="black" stroke-width="3"/>
						
						<circle cx="100" cy="50" r="30" fill="black"/>
						<circle cx="200" cy="50" r="30" fill="black"/>
						
						<circle cx="120" cy="90" r="25" fill="black"/>
						<circle cx="180" cy="90" r="25" fill="black"/>
						
						<circle cx="120" cy="90" r="8" fill="white"/>
						<circle cx="180" cy="90" r="8" fill="white"/>
						
						<ellipse cx="150" cy="120" rx="15" ry="10" fill="black"/>
						
						<path d="M140 140 Q150 160 160 140" stroke="black" stroke-width="2" fill="none"/>
						
						<ellipse cx="80" cy="170" rx="30" ry="20" fill="black" transform="rotate(-30 80 170)"/>
						<ellipse cx="220" cy="170" rx="30" ry="20" fill="black" transform="rotate(30 220 170)"/>
						
						<ellipse cx="120" cy="270" rx="25" ry="40" fill="black"/>
						<ellipse cx="180" cy="270" rx="25" ry="40" fill="black"/>
						
						<rect x="230" y="100" width="15" height="180" fill="#7CB342"/>
						<rect x="230" y="140" width="15" height="5" fill="#558B2F"/>
						<rect x="230" y="180" width="15" height="5" fill="#558B2F"/>
						<path d="M245 110 Q260 100 255 130" fill="#4CAF50"/>
						</svg>

						<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="150" cy="190" rx="65" ry="85" fill="white" stroke="black" stroke-width="2.5"/>
  
  <circle cx="150" cy="100" r="60" fill="white" stroke="black" stroke-width="2.5"/>
  
  <circle cx="105" cy="60" r="25" fill="black"/>
  <circle cx="195" cy="60" r="25" fill="black"/>
  
  <ellipse cx="125" cy="90" rx="20" ry="22" fill="black"/>
  <ellipse cx="175" cy="90" rx="20" ry="22" fill="black"/>
  
  <circle cx="125" cy="90" r="7" fill="white"/>
  <circle cx="175" cy="90" r="7" fill="white"/>
  
  <path d="M110 80 Q115 75 120 78" stroke="black" stroke-width="1.5" fill="none"/>
  <path d="M120 78 Q125 73 130 80" stroke="black" stroke-width="1.5" fill="none"/>
  <path d="M165 80 Q170 75 175 78" stroke="black" stroke-width="1.5" fill="none"/>
  <path d="M175 78 Q180 73 185 80" stroke="black" stroke-width="1.5" fill="none"/>
  
  <ellipse cx="150" cy="120" rx="10" ry="8" fill="black"/>
  
  <path d="M140 140 Q150 150 160 140" stroke="black" stroke-width="2" fill="none" stroke-linecap="round"/>
  
  <circle cx="110" cy="115" r="8" fill="#FFC0CB" opacity="0.6"/>
  <circle cx="190" cy="115" r="8" fill="#FFC0CB" opacity="0.6"/>
  
  <ellipse cx="85" cy="180" rx="25" ry="15" fill="black" transform="rotate(-25 85 180)"/>
  <ellipse cx="215" cy="180" rx="25" ry="15" fill="black" transform="rotate(25 215 180)"/>
  
  <ellipse cx="120" cy="260" rx="20" ry="35" fill="black"/>
  <ellipse cx="180" cy="260" rx="20" ry="35" fill="black"/>
  
  <circle cx="200" cy="45" r="12" fill="#FF69B4"/>
  <circle cx="195" cy="40" r="4" fill="#FFD700"/>
  <path d="M200 57 Q210 55 205 65" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
  <path d="M200 57 Q190 55 195 65" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
  <circle cx="190" cy="50" r="6" fill="#FF69B4" transform="rotate(-30 190 50)"/>
  <circle cx="210" cy="50" r="6" fill="#FF69B4" transform="rotate(30 210 50)"/>
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