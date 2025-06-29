import { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Nutrition_form({ setShow_form, setNotification, search_data }) {
	const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];
	const [loading, setLoading] = useState(false);
	const [imageMode, setImageMode] = useState('upload'); // 'upload' or 'url'

	const [formData, setFormData] = useState({
		food: '',
		calories: '',
		carbs: '',
		protein: '',
		fat: '',
		mealType: 'breakfast',
		image: '',
	});

	useEffect(() => {
		if(search_data){
			setImageMode("url");
			setFormData({
				food: search_data.name,
				mealType: search_data.meal,
				...search_data
			})
		}
	}, [search_data])

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
		setLoading(true);
		try {
			const res = await fetch(`${apiUrl}/meal/save`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(formData),
			});
			const result = await res.json();
			setNotification(result.message);
			if (res.ok) setShow_form(false);
		} catch (err) {
			console.error('Error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl'>
			<h1 className='text-xl font-bold text-gray-700'>🥗 Add Nutrition Details</h1>

			<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
				{[
					{ label: 'Food', name: 'food', type: 'text', placeholder: 'e.g. Aloo Parantha' },
					{ label: 'Calories', name: 'calories', type: 'number', placeholder: 'e.g. 250' },
					{ label: 'Carbs (g)', name: 'carbs', type: 'number', placeholder: 'e.g. 40' },
					{ label: 'Protein (g)', name: 'protein', type: 'number', placeholder: 'e.g. 10' },
					{ label: 'Fat (g)', name: 'fat', type: 'number', placeholder: 'e.g. 12' },
				].map((field, i) => (
					<div key={i} className='flex flex-col gap-1'>
						<label className='font-medium'>{field.label}</label>
						<input
							type={field.type}
							name={field.name}
							value={formData[field.name]}
							placeholder={field.placeholder}
							onChange={handleChange}
							className='border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>
				))}

				<div className='flex flex-col gap-1'>
					<label className='font-medium'>Meal Type</label>
					<select
						name="mealType"
						value={formData.mealType}
						onChange={handleChange}
						className='border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
					>
						{mealTypes.map((meal, i) => (
							<option key={i} value={meal}>{meal}</option>
						))}
					</select>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				<button
					className={`px-4 py-1 rounded font-medium border ${
						imageMode === 'upload' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
					}`}
					onClick={() => setImageMode('upload')}
				>
					Upload Image
				</button>
				<button
					className={`px-4 py-1 rounded font-medium border ${
						imageMode === 'url' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
					}`}
					onClick={() => setImageMode('url')}
				>
					Use Image URL
				</button>
			</div>

			{imageMode === 'upload' ? (
				<div className="flex items-center gap-3">
					<input
						type="file"
						accept="image/*"
						onChange={handleImage}
						className="file:bg-blue-500 file:text-white file:px-4 file:py-1 file:rounded file:cursor-pointer"
					/>
				</div>
			) : (
				<div className='flex flex-col gap-1'>
					<label className='font-medium'>Image URL</label>
					<input
						type="text"
						value={formData.image}
						onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
						placeholder="https://example.com/image.jpg"
						className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
			)}

			{formData.image && (
				<div className="relative w-fit p-2 border-2 rounded border-dashed">
					<img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded" />
					<button
						className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-fit h-fit px-1.5"
						onClick={() => setFormData((prev) => ({ ...prev, image: '' }))}
					>
						✕
					</button>
				</div>
			)}

			<div className='flex justify-between items-center mt-4'>
				<button
					className='bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 font-semibold'
					onClick={() => setShow_form(false)}
				>
					Cancel
				</button>

				{loading ? (
					<div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				) : (
					<button
						onClick={handleSubmit}
						className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-semibold'
					>
						Save
					</button>
				)}
			</div>
		</div>
	);
}

export default Nutrition_form;
