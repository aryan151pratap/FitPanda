import apple from '../image/apple.png';
import run from '../image/running.png';
import training from '../image/training.png';
import Logo from './logo.jsx';

const color = ['red', 'orange', 'yellow', 'purple', 'blue', 'sky', 'violet', 'indigo', 'green', 'pink'];
const colorShades = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
let currrent_color = color[0];
var j = 0;


function Page_1({ details }){
	return(
		<>
		<div className="w-full h-screen flex bg-black p-1 text-sm ">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-md">
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
					<div className="h-full w-[70%] bg-black rounded-md flex flex-wrap gap-[1px] p-2">
						
						{[...Array(100)].map((_, i) => {
							
							if(i%10 === 0){
								currrent_color = color[j%color.length];
								j++;
								console.log(j, i%10 === 0, i);
							}
							const shade = colorShades[i % colorShades.length];
							return(
							<div className={`p-[1px] h-10 bg-${currrent_color}-${shade} mt-auto`}>
							</div>
							)
						})}
					</div>
					<div className="relative h-full w-[30%] bg-black opacity-100 rounded-md p-2 items-center flex justify-center">
						<img src={training} alt="" className='h-full object-cover'/>
						<div className='w-full h-full absolute flex p-2 justify-center items-center'>
							<div className='w-full h-full backdrop-blur-[8px]'>
								<p className='text-white opacity-100'>
									Step count
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-[60%] bg-white flex flex-row gap-4 py-2 mt-auto'>
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