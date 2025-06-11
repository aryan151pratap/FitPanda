import { useState } from "react";
import Gender from "./gender";
import Details from "./details";

function Save_data(){
	
	const [next, setNext] = useState([Gender, Details])
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
