import { useState } from "react";
import gender_img from '../image/gender.png';
import male_panda from '../image/male_panda.png';
import female_panda from '../image/female_panda.png';
import Gender from "./gender";

function Save_data(){
	const [next, setNext] = useState(['gender', ''])
	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full sm:max-w-xl md:max-w-3xl">
				<Gender/>
			</div>
		</div>
		
		</>
	)
}

export default Save_data;

