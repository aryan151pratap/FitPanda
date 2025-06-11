import { useEffect, useState } from 'react';
import apple from '../image/apple.png';
import run from '../image/running.png';
import training from '../image/training.png';
import Logo from './logo.jsx';
import Search from './search.jsx';



function Page_1({ details }){

	const [ fat, setFat ] = useState();

	useEffect(() => {
		const body_fat = async function(){
			const res = await fetch('http://127.0.0.1:5000/predict', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify({ features: [1, 23, 69.97, 1.72, 36.2, 93.1, 85.2, 94.5, 59.0, 37.3, 21.9, 32.0, 27.4, 17.1] })
			})

			const result = res.json();
			console.log(result)
			if(result.data){
				setFat(data.prediction);
			}

    	}
		body_fat();
	}, [])

	return(
		<>
		<div className="w-full h-screen flex bg-black p-1 text-sm">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-xl overflow-y-auto mb-4">
				<div className="w-full h-12 text-white bg-black px-4 flex items-center rounded-xl">
					<Logo/>
					<p className="">FitPanda</p>
					<div className='ml-auto flex flex justify-center items-center gap-2'>
						<div>
							<Search/>
						</div>
						<img src={apple} alt="" className='p-1 rounded-sm h-10 w-10 object cover'/>
						<div className='p-1'>
							<p>{details.username} <span className='text-xs opacity-70'>({details.gender})</span></p>
							<p className='text-xs opacity-70'>{details.age} years old</p>
						</div>
					</div>
				</div>
				
				<div className="h-[250px] w-full flex flex-row gap-4">

					<div className="h-full w-[70%] bg-black rounded-xl flex flex-wrap gap-4 p-2 text-white capitalize">
						<p className=''>weight <span>{details.weight}</span></p>
						<p>height <span>{details.height}</span></p>
						<div>
							<h1>{fat}</h1>
						</div>
					</div>

					<div className="relative h-full w-[30%] text-white bg-black opacity-100 rounded-xl p-2 items-center flex justify-center">
						<img src={training} alt="" className='h-full object-cover'/>
						<div className='w-full h-full absolute flex p-2 justify-center items-center'>
							<div className='w-full h-full flex flex-col backdrop-blur-[8px]'>
								<p className='md:text-xl sm:text-md opacity-100'>
									Step count
								</p>
								<div className='text-2xl md:text-5xl sm:text-3xl w-full mt-auto'>
									<p>8,046 <span className='text-xs opacity-70'>m/s</span></p>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 h-[60%] bg-white gap-4 py-4 mt-auto">
  
					<div className="text-black shadow-md rounded-md p-4">
						<p className="text-xl font-semibold">Health Tracking</p>
					</div>

					<div className="grid grid-rows-2 gap-4">
						<div className="text-black shadow-md rounded-md p-4">
						<p className="text-xl font-semibold">Heart Rate</p>
						</div>
						<div className="text-black shadow-md rounded-md p-4">
						<p className="text-xl font-semibold">Steps Count</p>
						</div>
					</div>

					<div className="text-black shadow-md rounded-md p-4">
						<p className="text-xl font-semibold">Sleep Analysis</p>
					</div>

				</div>

			</div>
		</div>
		</>
	)
}

export default Page_1;