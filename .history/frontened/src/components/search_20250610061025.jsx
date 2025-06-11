import Search_img from '../image/search.png';

function Search(){
	return(
		<>
		<div className='w-[40%] rounded-full '>
			<img src={Search_img} alt="" className='shrink-0 h-4 w-4'/>
		</div>
		</>
	)
}

export default Search;