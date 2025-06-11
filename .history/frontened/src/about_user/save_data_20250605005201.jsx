import { useState } from "react";
import Gender from "./gender";
import Details from "./details";

function Save_data(){
	
	const [next, setNext] = useState([Gender, Details]);

	const handle_next_page = function(){

	}

	const handle_previous_page  = function(){
		
	}

	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full sm:max-w-xl md:max-w-3xl">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
					<Gender/>
					<div className="mt-10 flex justify-between">
						<button className="text-zinc-500 flex items-center gap-2 hover:text-zinc-700 cursor-pointer"
						onClick={handle_previous_page}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							<span className="">Back</span>
						</button>
						<button className="text-white px-2 py-1 rounded-sm bg-gradient-to-br from-indigo-500 to-purple-500 flex gap-2 items-center"
						onClick={handle_next_page}
						>
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

export default Save_data;
