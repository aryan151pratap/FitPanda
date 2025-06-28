import { useState } from 'react';
import imageCompression from 'browser-image-compression';
const apiUrl = import.meta.env.VITE_BACKEND_ADD;

function Nutrition_form({ setShow_form, setNotification }) {
	const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];

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
			<div className='flex flex-between items-center bg-green-200 rounded p-2 w-fit'>
				<input type="file" accept="image/*" onChange={handleImage} className=''/>
				{formData.image && 
				<div className='shrink-0 p-2 border-2 w-fit rounded border-dashed bg-gray-300'>
					<img src={formData.image} alt="preview" width="100" className='h-10 w-10'/>
				</div>
				}
			</div>

			<div className='flex justify-between'>
				<button
					className='border-2 p-2 rounded border-dashed font-bold hover:bg-red-400'
					onClick={() => setShow_form(false)}
				>
					Cancel
				</button>
				<button
					className='border-2 p-2 rounded border-dashed font-bold hover:bg-green-400'
					onClick={handleSubmit}
				>
					Save
				</button>
			</div>
		</div>
	);
}



export default Nutrition_form;


