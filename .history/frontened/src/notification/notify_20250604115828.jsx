function Notify(){
	return(
		<>
		<div className="w-[300px] h-[150px] fixed bottom-4 right-2 z-50 p-4">
			<div className="w-full h-full flex flex-col bg-indigo-200">
				<button className="ml-auto">close</button>
				<div className="w-full h-full p-2">
					<p>Notification</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default Notify;