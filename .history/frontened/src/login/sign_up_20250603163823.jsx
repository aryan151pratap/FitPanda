function Sign_up(){
	return(
		<>
		<div className="w-full h-screen px-20 py-20">
			<div className="w-full h-full">
				<div className="w-full h-full bg-white grid grid-cols-2 rounded-xl overflow-hidden p-4">
					<div className="bg-indigo-100 p-4 text-indigo-300 rounded-b-2xl rounded-tr-2xl flex ">
						<div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit sunt vero tempore.</p>
						</div>
						{/* <div className="h-full px-1 bg-black">
						</div> */}
					</div>

					<div>
						<div className="w-full rounded-full p-4 ">
							<p className="text-2xl">Create Account</p>
						</div>
						<form action="" className="h-full p-4 flex flex-col gap-4 items-center bg-zinc-400 justify-center">
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="px-2 text-[20px]">Username</label>
								<input type="text" placeholder="Enter Your USername" className="px-4 py-2 w-full outline-4 rounded-full outline-zinc-300"/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="" className="px-2 text-[20px]">Email</label>
								<input type="text" placeholder="Enter Your email" className="px-4 py-2 w-full outline-4 rounded-full outline-zinc-300"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Sign_up;