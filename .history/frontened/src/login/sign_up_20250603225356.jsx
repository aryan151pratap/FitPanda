import Login from './login';
import apple from '../image/apple.png';

function Sign_up(){
	return(
		<>
		<div className="w-full h-screen px-20 py-20 md:px-60 md:py-30">
			<div className="w-full h-full">
				<div className="w-full h-full bg-white grid grid-cols-2 rounded-xl overflow-hidden p-4 shadow-md border-1 border-zinc-200">
					<div className="bg-indigo-100 p-4 text-indigo-300 rounded-b-2xl rounded-tr-2xl flex flex-col">
						<div className='w-full flex justify-between font-bold text-black text-2xl gap-4'>
							<img src={apple} alt="" className='h-15 w-15 p-2 bg-white rounded-full'/>
							<div className="">
								<p>FitNest</p>
							</div>
						</div>
					</div>

					<div className="w-full h-full flex flex-col">
						<div className="w-full rounded-full p-4 ">
							<p className="text-2xl w-full flex justify-center font-bold">Create Account</p>
						</div>
						<form action="" className="h-full p-4 flex flex-col gap-4 justify-center">
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="px-2 text-[20px]">Username</label>
								<input type="text" placeholder="Enter Your USername" className="px-4 py-2 w-full outline-4 rounded-full outline-zinc-300"/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="px-2 text-[20px]">Email</label>
								<input type="text" placeholder="Enter Your email" className="px-4 py-2 w-full outline-4 rounded-full outline-zinc-300"/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="px-2 text-[20px]">Password</label>
								<input type="text" placeholder="Enter Your Password" className="px-4 py-2 w-full outline-4 rounded-full outline-zinc-300"/>
							</div>
						</form>
						<div className="w-full p-4 flex flex-wrap gap-4 justify-center">
							<button className="px-4 py-2 rounded-md text-white bg-indigo-700 hover:bg-indigo-900 cursor-pointer"><span>Create Account</span></button>
						
							<p className="w-full flex justify-center text-zinc-500">- or -</p>
							<div className="w-full flex justify-center">
								<p>Already have an account <button className="text-blue-600 hover:underline"
								>Login</button></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Sign_up;