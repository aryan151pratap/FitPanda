function Notify(){
	return(
		<>
		<div className="w-[300px] h-[150px] fixed bottom-4 right-2 z-50">
			<div className="w-full h-full flex flex-col bg-indigo-200 p-2 shadow-xl border-2 border-indigo-300">
				<div className="w-full h-full">
					<button className="ml-auto px-2 py-1 text-white bg-red-500 rounded-sm">close</button>
					<p>Notification</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default Notify;