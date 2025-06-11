function Notify(){
	return(
		<>
		<div className="w-[300px] h-[150px] fixed flex bottom-4 right-2 z-50 p-4">
			<button className="">close</button>
			<div className="w-full h-full bg-indigo-500 p-2">
				<p>Notification</p>
			</div>
		</div>
		</>
	)
}

export default Notify;