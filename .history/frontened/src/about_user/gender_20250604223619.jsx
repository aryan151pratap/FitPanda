function Gender(){
	return(
		<>
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
			<div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
			<div className="text-center mb-8">
				<div className="mx-auto flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
				</div>
				<h2 className="text-3xl font-bold text-gray-800">OTP Verification</h2>
				<p className="text-gray-500 mt-2">
				We've sent a 6-digit code to your email
				<span className="block font-medium text-indigo-600">{data.email}</span>
				</p>
			</div>
			</div>
			</div>
		</div>
		</>
	)
}

export default Gender;