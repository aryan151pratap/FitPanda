import { useState } from "react";
import gender_img from '../image/gender.png';
import male_panda from '../image/male_panda.png';
import female_panda from '../image/female_panda.png';
import Gender from "./gender";

function Save_data({ setNotification } ){
	const [gender, setGender] = useState('');
	const [image, setImage] = useState();

	const gen = [
		{name: 'male', image: male_panda},
		{name: 'female', image: female_panda},
		{name: 'other', image: male_panda}
	];

	const handle_select_gender = function(i){
		setGender(i.name);
		setImage(i.image);
	}

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

