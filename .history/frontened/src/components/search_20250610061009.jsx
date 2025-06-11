import Search_img from '../image/search.png';

function Search(){
	return(
		<>
		<div className='w-[10%] rounded-full '>
			<img src={Search_img} alt="" className='h-4 w-4'/>
		</div>
		</>
	)
}

export default Search;