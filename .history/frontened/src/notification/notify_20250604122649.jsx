import Cross from '../image/cross.png';

function Notify({ notification, setNotification }) {
	const handle_notification = function(){
		if(notification){
			setNotification({});
		}
	}
	return (
		<div className="fixed top-4 right-4 z-50 w-[320px]">
			<div className="bg-white border-2 border-zinc-200 rounded-xl shadow-2xl overflow-hidden">
				<div className="flex justify-between items-center px-4 py-2 bg-gradient-to-br from-indigo-600 to-purple-700">
				<p className="text-white font-semibold italic tracking-wide">Notification</p>
				<button className="p-1 rounded hover:bg-white/10 transition"
				onClick={handle_notification}
				>
					<img src={Cross} alt="Close" className="w-5 h-5" />
				</button>
				</div>
				{notification != {} ?
					<div className="px-4 py-3 text-sm text-red-800">
						<p className='px-2'>{notification.Error}</p>
					</div>
					:
					<div className="px-4 py-3 text-sm text-green-800">
						<p className='px-2'>{notification}</p>
					</div>
				}
			</div>
		</div>
	);
}

export default Notify;
