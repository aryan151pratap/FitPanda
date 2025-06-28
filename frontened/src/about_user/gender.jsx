import { useEffect, useState } from "react";
import gender_img from '../image/gender.png';
import female_media from '../image/female_media.gif';
import male_media from '../image/male_media.gif';


function Gender({ data, setData }){
	const [media, setMedia] = useState();

	const gen = [
		{name: 'male', media: male_media},
		{name: 'female', media: female_media},
	];

	const handle_select_gender = function(i){
		setData({ ...data, gender: i.name });
		setMedia(i.media);
	}

	return(
			<div>
				<div className="text-center">
					<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-5">
					{data.gender === "male" ?
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4a1 1 0 011 1v4m-7 7a5 5 0 100-10 5 5 0 000 10zm6-10l-5 5" />
						</svg>
						: data.gender === 'female' ?
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0 0h3m-3 0H9m3-7a5 5 0 100-10 5 5 0 000 10z" />
						</svg>
						: data.gender === 'other' ?
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
						<div key={index} className="">
							<button className={`w-full p-2 text-white text-2xl rounded-xl bg-gradient-to-br ${data.gender === i.name ? 'from-indigo-500 to-purple-500' : 'from-zinc-100 to-gray-400'} cursor-pointer transition hover:px-4`} 
							onClick={() => handle_select_gender(i)}
							>
								{i.name}
							</button>
						</div>
					))}
					</div>
					<div className="w-full flex items-center justify-center">
						{media &&
							<img src={media} alt="Animated gif" />
						}
					</div>
				</div>

			</div>
		
	)
}

export default Gender;