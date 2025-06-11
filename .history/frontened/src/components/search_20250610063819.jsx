import Search_img from '../image/search.png';

function Search(){
	return(
		<>
		<div className='md:w-[200px] sm:w-[200px] w-[150px] p-1 rounded-full bg-zinc-600/50 flex flex-row gap-1 items-center'>
			<img src={Search_img} alt="" className='shrink-0 h-4 w-4'/>
			<input type="text" placeholder='Search' className='px-2 w-full outline-none'/>
		</div>
		</>
	)
}

export default Search;