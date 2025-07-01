import { useEffect, useRef, useState } from 'react';
import verified_img from '../image/approved.png';
import edit_img from '../image/edit.png';
import Profile from './profile';

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Setting({ details, setCurrent_user, setNotification }) {
	const [update, setUpdate] = useState(false);
	const [new_data, setNew_data] = useState(details);
	const printRef = useRef(null);

	useEffect(() => {
		setNew_data(details);
	}, [details]);

	const handle_update = async () => {
		try {
			if (
				!new_data.username ||
				!new_data.email ||
				!new_data.gender ||
				!new_data.height ||
				!new_data.weight ||
				!new_data.age
			) {
				setNotification("Incomplete data!");
				return;
			}
			const res = await fetch(`${apiUrl}/details/update`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(new_data),
			});
			const result = await res.json();
			setNotification(result.message);

			if (res.ok) {
				setUpdate(false);
				setCurrent_user(new_data);
			}
		} catch (err) {
			console.error('Error:', err);
		}
	};

	const handlePrint = () => {
		if (printRef.current) {
			window.print();
		}
	};

	const fieldLabels = {
		username: 'Username',
		email: 'Email Address',
		gender: 'Gender',
		height: 'Height (cm)',
		weight: 'Weight (kg)',
		age: 'Age',
		verified: 'Verified Status'
	};

	return (
		<div className="w-full flex flex-col gap-6">
			<div className="flex justify-end print:hidden">
				<button
					onClick={handlePrint}
					className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
				>
					Print or Download PDF
				</button>
			</div>

			<div ref={printRef} className="print:bg-white print:text-black print:p-0 print:shadow-none">
				<Profile data={details} />

				<div className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-6 border print:border-black">
					<div className="flex items-center justify-between px-4 py-3 border-b bg-gray-100 print:bg-white print:border-black">
						<h2 className="text-lg font-semibold text-gray-700 print:text-black">User Report</h2>
						{!update && (
							<img
								src={edit_img}
								alt="edit"
								className="h-7 w-7 cursor-pointer hover:scale-105 transition print:hidden"
								onClick={() => setUpdate(true)}
							/>
						)}
					</div>

					<table className="w-full text-sm">
						<thead className="bg-gray-200 text-gray-600 text-left print:bg-white print:text-black">
							<tr>
								<th className="px-4 py-2 border print:border-black">Field</th>
								<th className="px-4 py-2 border print:border-black">Value</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(details).map(([key, value], index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? 'bg-gray-50 print:bg-white' : 'bg-white'}
								>
									<td className="px-4 py-2 border font-medium text-gray-700 print:text-black print:border-black">
										{fieldLabels[key]}
									</td>
									<td className="px-4 py-2 border print:border-black">
										{!update || key === 'verified' || key === 'email' ? (
											<div className="flex items-center gap-2">
												<p>{value.toString()}</p>
												{value === true && (
													<img
														src={verified_img}
														alt="Verified"
														className="h-5 w-5"
													/>
												)}
											</div>
										) : (
											<input
												type="text"
												className="w-full px-2 py-1 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
												value={new_data[key]}
												onChange={(e) =>
													setNew_data({ ...new_data, [key]: e.target.value })
												}
											/>
										)}
									</td>
								</tr>
							))}

							{update && (
								<tr className="bg-gray-100 print:hidden">
									<td className="px-4 py-2 border font-semibold">Actions</td>
									<td className="px-4 py-2 border flex gap-3 justify-between">
										<button
											className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
											onClick={() => {
												setUpdate(false);
												setNew_data(details);
											}}
										>
											Cancel
										</button>
										<button
											className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
											onClick={handle_update}
										>
											Update
										</button>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Setting;
