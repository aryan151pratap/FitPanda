import { useState } from 'react';
import imageCompression from 'browser-image-compression';
const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Nutrition_form({ setShow_form, setNotification }) {
	const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		food: '',
		calories: '',
		carbs: '',
		protein: '',
		fat: '',
		mealType: 'breakfast',
		image: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleImage = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const options = { maxSizeMB: 0.1, maxWidthOrHeight: 800 };
		try {
		const compressedFile = await imageCompression(file, options);
		const base64 = await imageCompression.getDataUrlFromFile(compressedFile);
		setFormData((prev) => ({ ...prev, image: base64 }));
		} catch (error) {
			console.error('Compression error:', error);
		}
	};

	const handleSubmit = async () => {
		if (!formData.food || !formData.calories) {
			alert('Please fill at least food name and calories.');
			return;
		}
		setLoading(false);
		try{
			const res = await fetch(`${apiUrl}/meal/save`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(formData),
			});
			const result = await res.json();
			setNotification(result.message);

			if (res.ok) {
				setShow_form(false);
			}
		} catch (err) {
			console.error('Error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col gap-2'>
			<h1 className='text-lg font-bold text-gray-600'>Fill the Meal Details</h1>
			<div className='grid grid-cols-2 md:grid-cols-4 flex-wrap gap-2 md:gap-4'>
				{[
					{ label: 'Food', name: 'food', type: 'text', placeholder: 'Food' },
					{ label: 'Calories', name: 'calories', type: 'number', placeholder: 'Calories' },
					{ label: 'Carbs', name: 'carbs', type: 'number', placeholder: 'Carbs (g)' },
					{ label: 'Protein', name: 'protein', type: 'number', placeholder: 'Protein (g)' },
					{ label: 'Fat', name: 'fat', type: 'number', placeholder: 'Fat (g)' },
				].map((field, index) => (
					<div key={index} className='border-1 rounded flex flex-col p-2 gap-2'>
						<label>{field.label}</label>
						<input
							type={field.type}
							name={field.name}
							placeholder={field.placeholder}
							value={formData[field.name]}
							onChange={handleChange}
							className='rounded border-2 border-dashed p-2'
						/>
					</div>
				))}

				<div className='border-1 rounded flex flex-col p-2 gap-2'>
					<label>Meal type</label>
					<select
						name="mealType"
						value={formData.mealType}
						onChange={handleChange}
						className='border-2 rounded p-2 cursor-pointer'
					>
						{mealTypes.map((meal, index) => (
							<option key={index} value={meal}>
								{meal}
							</option>
						))}
					</select>
				</div>
			</div>

			<label htmlFor="" className='font-bold'>Add Food Image!</label>
			<div className="flex flex-col items-center gap-3 bg-white rounded-xl p-4 w-full md:w-lg border border-blue-500 shadow-sm">
				{formData.image ? 
					<div className="relative p-2 border-2 border-dashed border-gray-400 rounded bg-gray-100">
						<div className='absolute inset-0 w-fit h-fit top-0 left-auto bg-zinc-500/40 hover:bg-zinc-500/80 rounded-full cursor-pointer'
						onClick={() => {
							setFormData((prev) => ({ ...prev, image: '' }));
						}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</div>
						<img
							src={formData.image}
							alt="Preview"
							className="h-24 w-24 object-cover rounded"
						/>
					</div>
				:
					<label className="h-28.5 w-28.5 cursor-pointer p-2 border-dashed border-2 text-blue-500 flex items-center text-center border-blue-500 rounded hover:bg-blue-600 transition">
						Upload Image
						<input
							type="file"
							accept="image/*"
							onChange={handleImage}
							className="hidden"
						/>
					</label>
				}
			</div>


			<div className='flex justify-between'>
				<button
					className='border-2 p-2 rounded border-dashed font-bold bg-red-300 hover:bg-red-400'
					onClick={() => setShow_form(false)}
				>
					Cancel
				</button>
				{loading ?
					<div className='w-fit h-full p-2'>
						<div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
					</div>
				:
					<button
					className='border-2 p-2 rounded border-dashed font-bold bg-green-300 hover:bg-green-400'
					onClick={handleSubmit}
					>
						Save
					</button>
				}
			</div>
		</div>
	);
}



export default Nutrition_form;


