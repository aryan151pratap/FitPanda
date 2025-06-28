import { useState } from "react";
import Gender from "./gender";
import Details from "./details";

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Save_data({ setNotification, setInside }){

	const [data, setData] = useState({ gender: '', weight: '', height: '', age: ''})
	
	const page = [Gender, Details];
	const [current, setCurrent] = useState(0);

	const handle_next_page = function(){
		if(current < page.length - 1){
			setCurrent((e) => e+1);
		}
	}

	const handle_previous_page  = function(){
		if(current > 0){
			setCurrent((e) => e-1);
		}
	}

	const CurrentComponent = page[current];

	const handle_save_data = async function(){
		if(data.gender.length > 0 && data.weight.length > 0 && data.height.length > 0 && data.age.length > 0){
			console.log(data);
			const res = await fetch(`${apiUrl}/details/your`, {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify(data),
			});		
			const result = await res.json();
			console.log(result);
			setNotification(result.message);
			if(res.ok){
				setInside(true);
			}
		} else {
			setNotification('Invalid data!')
		}
	}

	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full sm:max-w-xl md:max-w-3xl">
				<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
					<CurrentComponent data={data} setData={setData}/>
					<div className="mt-10 flex justify-between">
						{current !== 0 &&
						<button className="text-zinc-500 flex items-center gap-2 hover:text-zinc-700 cursor-pointer"
						onClick={handle_previous_page}
						disabled={current === 0}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							<span className="">Back</span>
						</button>
						}
						{page.length - 1 === current ?
						<button className="text-white px-2 py-1 rounded-sm bg-gradient-to-br from-indigo-500 to-purple-500 flex gap-2 items-center"
						onClick={handle_save_data}
						
						>
							<span>Continue</span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</button>
						:
						<button className="text-white px-2 py-1 rounded-sm bg-gradient-to-br from-indigo-500 to-purple-500 flex gap-2 items-center ml-auto"
						onClick={handle_next_page}
						disabled={current === page.length - 1}
						>
							<span>Next</span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</button>
						}
					</div>
				</div>
			</div>
		</div>
		
		</>
	)
}

export default Save_data;
