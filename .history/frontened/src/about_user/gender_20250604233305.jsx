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
						<svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 30)">
    <path d="M200 150 Q250 250 200 350 Q150 250 200 150" fill="white" stroke="black" stroke-width="3"/>
    
    <rect x="170" y="130" width="60" height="30" rx="10" fill="white" stroke="black" stroke-width="2"/>
    <rect x="190" y="100" width="20" height="30" fill="white" stroke="black" stroke-width="2"/>
    
    <circle cx="200" cy="80" r="50" fill="white" stroke="black" stroke-width="3"/>
    
    <circle cx="160" cy="50" r="25" fill="black"/>
    <circle cx="240" cy="50" r="25" fill="black"/>
    
    <ellipse cx="175" cy="75" rx="20" ry="18" fill="black"/>
    <ellipse cx="225" cy="75" rx="20" ry="18" fill="black"/>
    
    <circle cx="175" cy="75" r="7" fill="white"/>
    <circle cx="225" cy="75" r="7" fill="white"/>
    
    <ellipse cx="200" cy="95" rx="12" ry="8" fill="black"/>
    
    <path d="M190 110 Q200 120 210 110" stroke="black" stroke-width="2" fill="none"/>
    
    <g fill="#555" opacity="0.6">
      <circle cx="190" cy="110" r="1.5"/>
      <circle cx="195" cy="115" r="1.5"/>
      <circle cx="200" cy="113" r="1.5"/>
      <circle cx="205" cy="115" r="1.5"/>
      <circle cx="210" cy="110" r="1.5"/>
    </g>
    
    <path d="M130 180 Q100 220 120 280" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
    <path d="M270 180 Q300 220 280 280" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
    
    <circle cx="120" cy="290" r="20" fill="black"/>
    <circle cx="280" cy="290" r="20" fill="black"/>
    
    <path d="M180 350 Q180 420 160 450" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
    <path d="M220 350 Q220 420 240 450" stroke="black" stroke-width="25" fill="none" stroke-linecap="round"/>
    
    <ellipse cx="160" cy="465" rx="25" ry="15" fill="black"/>
    <ellipse cx="240" cy="465" rx="25" ry="15" fill="black"/>
    
    <rect x="170" y="150" width="60" height="200" fill="#333" stroke="black" stroke-width="2"/>
    <path d="M200 150 L200 350" stroke="#555" stroke-width="3"/>
    
    <rect x="185" y="150" width="30" height="60" fill="white"/>
    <path d="M200 170 L190 210 L200 220 L210 210 Z" fill="#B22222"/>
    <polygon points="200,220 185,230 215,230" fill="#B22222"/>
    
    <circle cx="280" cy="290" r="12" fill="silver" stroke="black" stroke-width="1"/>
    <rect x="278" y="278" width="4" height="24" fill="silver"/>
    
    <rect x="260" y="400" width="80" height="40" rx="5" fill="#8B4513" stroke="black" stroke-width="2"/>
    <rect x="260" y="390" width="80" height="10" fill="#A0522D"/>
    <rect x="280" y="395" width="40" height="5" fill="gold"/>
  </g>
</svg>

						<svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
						<g transform="translate(0, 50)">
							<ellipse cx="200" cy="250" rx="60" ry="90" fill="white" stroke="black" stroke-width="3"/>
							
							<circle cx="200" cy="120" r="70" fill="white" stroke="black" stroke-width="3"/>
							
							<circle cx="140" cy="70" r="30" fill="black"/>
							<circle cx="260" cy="70" r="30" fill="black"/>
							<circle cx="260" cy="55" r="15" fill="#FF69B4"/>
							<circle cx="245" cy="60" r="10" fill="#FF69B4"/>
							<circle cx="275" cy="60" r="10" fill="#FF69B4"/>
							<rect x="250" y="50" width="20" height="10" fill="#FF69B4" rx="5"/>
							
							<ellipse cx="170" cy="110" rx="25" ry="22" fill="black"/>
							<ellipse cx="230" cy="110" rx="25" ry="22" fill="black"/>
							<circle cx="170" cy="110" r="8" fill="white"/>
							<circle cx="230" cy="110" r="8" fill="white"/>
							
							<path d="M155 95 Q160 85 165 92" stroke="black" stroke-width="2" fill="none"/>
							<path d="M165 92 Q170 82 175 95" stroke="black" stroke-width="2" fill="none"/>
							<path d="M215 95 Q220 85 225 92" stroke="black" stroke-width="2" fill="none"/>
							<path d="M225 92 Q230 82 235 95" stroke="black" stroke-width="2" fill="none"/>
							
							<circle cx="150" cy="140" r="12" fill="#FFB6C1" opacity="0.7"/>
							<circle cx="250" cy="140" r="12" fill="#FFB6C1" opacity="0.7"/>
							
							<ellipse cx="200" cy="150" rx="12" ry="8" fill="black"/>
							<path d="M180 170 Q200 190 220 170" stroke="black" stroke-width="2" fill="none" stroke-linecap="round"/>
							
							<path d="M140 250 Q90 280 100 320" stroke="black" stroke-width="12" fill="none" stroke-linecap="round"/>
							<path d="M260 250 Q310 280 300 320" stroke="black" stroke-width="12" fill="none" stroke-linecap="round"/>
							
							<circle cx="100" cy="320" r="15" fill="black"/>
							<circle cx="300" cy="320" r="15" fill="black"/>
							
							<path d="M180 340 Q180 400 160 420" stroke="black" stroke-width="15" fill="none" stroke-linecap="round"/>
							<path d="M220 340 Q220 400 240 420" stroke="black" stroke-width="15" fill="none" stroke-linecap="round"/>
							
							<ellipse cx="160" cy="430" rx="20" ry="10" fill="black"/>
							<ellipse cx="240" cy="430" rx="20" ry="10" fill="black"/>
							
							<path d="M140 250 Q200 300 260 250 L260 300 Q200 350 140 300 Z" fill="#FF69B4"/>
							<path d="M140 250 L260 250 M140 300 L260 300" stroke="black" stroke-width="2"/>
							
							<rect x="280" cy="300" width="40" height="60" rx="5" fill="#9370DB" transform="translate(0 -30)"/>
							<rect x="280" cy="280" width="40" height="10" rx="3" fill="#6A5ACD"/>
							<circle cx="300" cy="270" r="5" fill="gold"/>
							
							<circle cx="200" cy="90" r="10" fill="gold" stroke="black" stroke-width="1"/>
							<circle cx="200" cy="90" r="5" fill="white"/>
						</g>
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