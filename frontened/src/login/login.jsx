import { useEffect, useState } from "react";
import Logo from "../components/logo";

function Login({ setLogin_data }){
	const [data, setData] = useState({email: '', password: ''});
	
	useEffect(()=>{
		setLogin_data(data);
	},[data]);

	return(
		<>
		<div className=" mb-10 items-center flex justify-center gap-4">
			<div className='h-20 w-20'>
				<Logo/>
			</div>
			<div className="text-start">
				<h2 className="text-3xl font-bold text-gray-800">Sign in</h2>
				<p className="text-gray-500 mt-2">Join our fitness community today</p>
			</div>
		</div>
            
		<form className="space-y-6">
			<div className="space-y-4">
			<div>
				<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
				Email Address
				</label>
				<div className="relative">
				<input
					id="name"
					type="text"
					value={data.email}
					onChange={(e) => {
					setData({...data, email: e.target.value})
					}}
					placeholder="e.g. panda@gmail.com"
					className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
				/>
				<div className="absolute right-3 top-3 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
					</svg>
				</div>
				</div>
			</div>
			
			
			<div>
				<label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
				Password
				</label>
				<div className="relative">
				<input
					id="password"
					type="password"
					value={data.password}
					onChange={(e) => {
						setData({...data, password: e.target.value})
					}}
					placeholder="••••••••"
					className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
				/>
				<div className="absolute right-3 top-3 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
					</svg>
				</div>
				</div>
			</div>
			
			
			</div>
			
		</form>
		</>
	)
}

export default Login;