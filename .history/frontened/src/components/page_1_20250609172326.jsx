import apple from '../image/apple.png';
import run from '../image/running.png';
import training from '../image/training.png';
import Logo from './logo.jsx';



function Page_1({ details }){
	return(
		<>
		<div className="w-full h-screen flex bg-black p-1 text-sm">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-xl overflow-y-auto mb-4">
				<div className="w-full h-12 text-white bg-black px-4 flex items-center rounded-xl">
					<Logo/>
					<p className="">FitPanda</p>
					<div className='ml-auto flex flex justify-center items-center gap-2'>
						<img src={apple} alt="" className='p-1 rounded-xl h-10 w-10 object cover'/>
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

				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-[60%] bg-white gap-4 py-4 mt-auto">
  
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
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat excepturi repudiandae facere harum fuga error quibusdam sit quos? Sequi rem nobis expedita veritatis ab esse rerum nostrum culpa sunt mollitia porro, obcaecati ipsam, nemo est, quaerat ratione nulla nesciunt veniam consequatur. Molestias harum ullam eaque voluptas animi cupiditate rerum fugiat modi expedita veritatis, nisi corrupti at numquam ipsa consectetur similique rem minima cum tenetur omnis, fuga recusandae a. Necessitatibus quas sint recusandae possimus porro enim totam quaerat, consequuntur sapiente nisi illum? Voluptates molestias quidem ducimus, minima explicabo necessitatibus architecto numquam recusandae inventore alias. Sequi ex vitae ad deserunt perferendis tenetur odio accusamus, aspernatur temporibus dolor quas modi praesentium explicabo veniam consectetur nihil enim deleniti a quasi saepe numquam sunt quia eius. Nulla explicabo molestiae ab culpa unde. Enim modi quos quasi ratione neque aspernatur autem dolor, quaerat itaque. Nihil vitae aspernatur nam optio soluta debitis reiciendis sit sapiente eos, ut dicta maxime quibusdam, aperiam dolores temporibus fugiat aliquam magni odio odit eveniet itaque exercitationem dolor tenetur? Delectus ratione consequatur impedit. Tenetur aperiam magni aliquid unde impedit velit quos fuga non quis at nemo nostrum, laborum dicta itaque esse voluptatibus consequuntur recusandae tempora nulla? Quas voluptatum veritatis quibusdam iure vero!</p>
					</div>

				</div>

			</div>
		</div>
		</>
	)
}

export default Page_1;