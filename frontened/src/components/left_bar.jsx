const apiUrl = import.meta.env.VITE_BACKEND_ADD;
import logout_img from '../image/logout.png';

function Left_bar({ tab, activeTab, setActiveTab, setOpen, show_left }){
	const handle_logout = async function () {
		try {
			const res = await fetch(`${apiUrl}/valid/logout`, {
				method: 'POST',
				credentials: 'include',
			});

			if (res.ok) {
			window.location.href = '/login';
			} else {
				console.log('Logout failed');
			}
		} catch (err) {
			console.error('Error during logout:', err);
		}
	};


	return(
		<>
		<div className="h-full w-full flex sm:flex-col flex-row">
			<div className="flex sm:flex-col flex-row sm:py-6">
				{tab.map((i, index) => (
					<button
						key={index}
						className={`px-2 flex flex-row capitalize py-2 sm:py-4 items-center transition-colors font-bold cursor-pointer ${activeTab === i.name ? 'bg-zinc-700 sm:bg-zinc-200 text-black border border-white sm:border-0 rounded sm:rounded-none' : 'text-white hover:bg-zinc-800'}`}
						onClick={() => {
							setActiveTab(i.name);
							// setOpen(false);
						}}
						>
						<div className={`${show_left ? 'h-5 w-5 mr-2' : 'h-7 w-7' }`}>
							<img src={i.img} alt="😁" className={`object-cover ${activeTab === i.name ? "animate-bounce" : ""}`}/>
						</div>
						{show_left &&
							i.name
						}
					</button>
				))}
			</div>
			<div className="ml-auto sm:ml-0 flex justify-center sm:mt-auto">
				<button className="relative w-full flex justify-center gap-2 sm:py-2 capitalize hover:font-semibold text-red-500 font-bold cursor-pointer flex px-2 items-center"
				onClick={handle_logout}
				>
					<img src={logout_img} alt="" className='h-6 w-6'/>
					{show_left &&
						<span>
							logout
						</span>
					}
					<div className="hidden sm:flex absolute p-1 rounded-full bg-red-500 top-1 right-1 animate-ping">
					</div>
					<div className="hidden sm:flex absolute p-1 rounded-full bg-red-500 top-1 right-1">
					</div>
				</button>
			</div>
		</div>
		</>
	)
}

export default Left_bar;