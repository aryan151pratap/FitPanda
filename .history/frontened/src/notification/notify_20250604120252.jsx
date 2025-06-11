function Notify(){
	return(
		<>
		<div className="w-[300px] h-[150px] fixed top-4 right-2 z-50">
			<div className="w-full h-full flex flex-col p-2 shadow-xl rounded-sm bg-white border-2 border-zinc-200">
				<div className="w-full flex justify-between">
					<p className="px-2 italic text-green-500">Notification</p>
					<button className="ml-auto px-2 py-1 text-white bg-red-500 rounded-sm">x</button>
				</div>
			</div>
		</div>
		</>
	)
}

export default Notify;