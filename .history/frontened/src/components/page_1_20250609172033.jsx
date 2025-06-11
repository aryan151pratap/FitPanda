import apple from '../image/apple.png';
import run from '../image/running.png';
import training from '../image/training.png';
import Logo from './logo.jsx';



function Page_1({ details }){
	return(
		<>
		<div className="w-full max-h-screen flex bg-black p-1 text-sm">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-xl overflow-y-auto">
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

				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-[60%] bg-white gap-4 py-4 px-4 mt-auto">
  
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
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae omnis quas deleniti nulla fugit? Hic animi non repellat at voluptatum quibusdam ut veritatis reprehenderit adipisci neque qui ipsum, quo nesciunt totam autem molestias modi, quam repellendus mollitia! Magnam illo incidunt adipisci dolores eius. Hic fugit temporibus facilis quidem quasi natus! Vero doloremque similique tempore. Voluptatum itaque, nemo fugit, nostrum voluptatem quia quos est laborum optio facilis magnam. Nulla, quae architecto ipsum quaerat quam distinctio assumenda ratione eos error provident esse nostrum sapiente voluptatem amet molestias rerum repellat eius eligendi, numquam sit voluptas iste eaque ea. Quo unde beatae consequuntur, odit magni, excepturi cupiditate quia tempore provident suscipit sapiente, explicabo ipsum in facere eum autem libero veniam obcaecati deleniti similique quisquam necessitatibus? Voluptatem ipsa iure quisquam laborum illum debitis quidem perspiciatis similique aspernatur expedita enim saepe molestiae esse eligendi dolore nobis, nihil obcaecati maxime! Aliquid magnam pariatur exercitationem incidunt, ex necessitatibus tenetur explicabo excepturi optio iure quo asperiores doloremque accusantium quisquam nulla quis molestias magni dolorem consectetur amet doloribus architecto repudiandae impedit! Repudiandae eveniet a quo facilis tempora incidunt natus labore atque velit odio consequuntur nisi voluptates aperiam culpa soluta veritatis hic porro, omnis ipsa quibusdam placeat libero harum! Ullam ab facere architecto accusantium eaque laboriosam quaerat est molestias earum sit saepe doloremque libero quod nam, sequi magni. Magni suscipit nostrum in dicta ipsum, quidem dignissimos sint placeat, magnam, aut amet obcaecati distinctio molestias tempore possimus officiis maiores. Veniam, amet veritatis, minima officiis ut expedita iste nemo ipsam asperiores nam soluta quia? Ea aliquam, magni at consequuntur qui laudantium officia pariatur aspernatur ipsam culpa, nihil earum corrupti voluptatem a ad fugit. Voluptates reprehenderit doloremque in totam perspiciatis, adipisci illum laudantium rerum. Libero distinctio aperiam dolorum repudiandae ipsa, deleniti iusto quidem, commodi eum aspernatur, aut modi error iste excepturi perspiciatis odio odit.</p>
				</div>

				</div>

			</div>
		</div>
		</>
	)
}

export default Page_1;