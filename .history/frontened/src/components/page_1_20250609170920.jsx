import apple from '../image/apple.png';
import run from '../image/running.png';
import training from '../image/training.png';
import Logo from './logo.jsx';



function Page_1({ details }){
	return(
		<>
		<div className="w-full h-screen flex bg-black p-1 text-sm overflow-y-auto">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-xl">
				<div className="w-full h-12 text-white bg-black px-4 flex items-center rounded-md">
					<Logo/>
					<p className="">FitPanda</p>
					<div className='ml-auto flex flex justify-center items-center gap-2'>
						<img src={apple} alt="" className='p-1 rounded-sm h-10 w-10 object cover'/>
						<div className='p-1'>
							<p>{details.username} <span className='text-xs opacity-70'>({details.gender})</span></p>
							<p className='text-xs opacity-70'>{details.age} years old</p>
						</div>
					</div>
				</div>
				
				<div className="h-[250px] w-full rounded-md flex flex-row gap-4">
					<div className="h-full w-[70%] bg-black rounded-md flex flex-wrap gap-[1px] p-2 text-white">
						<p className='capitalize'>weight <span>{details.weight}</span></p>
						
					</div>
					<div className="relative h-full w-[30%] text-white bg-black opacity-100 rounded-md p-2 items-center flex justify-center">
						<img src={training} alt="" className='h-full object-cover'/>
						<div className='w-full h-full absolute flex p-2 justify-center items-center'>
							<div className='w-full h-full flex backdrop-blur-[8px]'>
								<p className='opacity-100'>
									Step count
								</p>
								<div className='mr-auto mt-auto'>
									<p>8,046</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:h-[60%] h-full bg-white flex flex-row gap-4 py-2 mt-auto'>
					<div className='text-black shadow-md rounded-md p-4'>
						<p className='text-xl font-semibold'>Health tracking</p>
					</div>
					<div className='grid md:grid-rows-2 flex'>
						<div className='h-full text-black shadow-md rounded-md p-4'>

						</div>
						<div className='h-full text-black shadow-md rounded-md p-4'>

						</div>
					</div>
					<div className='text-black shadow-md rounded-md p-4'>
						<p className='text-xl font-semibold'></p>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Page_1;