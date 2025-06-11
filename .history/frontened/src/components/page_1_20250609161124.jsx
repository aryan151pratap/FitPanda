import apple from '../image/apple.png';

const color = ['red', 'orange', 'yellow', 'purple', 'blue', 'sky', 'violet', 'indigo', 'green', 'pink'];
let currrent_color = color[0];
var j = 0;
var no = 0;


function Page_1(){
	return(
		<>
		<div className="w-full h-screen flex bg-black p-1 text-sm ">
			<div className="w-full flex flex-col gap-2 bg-white p-6 rounded-md">
				<div className="w-full h-12 text-white bg-black px-4 flex items-center rounded-md">
					<p className="">hello</p>
					<div className='ml-auto flex flex justify-center items-center gap-2'>
						<img src={apple} alt="" className='p-1 rounded-sm h-10 w-10 object cover'/>
						<div className='p-1'>
							<p>Aryan Pratap</p>
							<p className='text-xs opacity-70'>20 years old</p>
						</div>
					</div>
				</div>
				
				<div className="h-[250px] w-full rounded-md flex flex-row gap-4">
					<div className="h-full w-[70%] bg-black rounded-md flex flex-wrap gap-[1px] p-2">
						{[...Array(100)].map((_, i) => {
							no+=100;
							if(i%10 === 0){
								no = 0;
								currrent_color = color[j%color.length];
								j++;
								console.log(j, i%10 === 0, i);
							}
							return(
							<div className={`p-[1px] h-10 bg-${currrent_color}-${no} mt-auto`}>
							</div>
							)
						})}

						<div className='w-full text-white'>
							<p className='bg-indigo-900'>hello</p>
							<p className='bg-indigo-900/80'>hello</p>
							<p className='bg-indigo-500'>hello</p>
						</div>
					</div>
					<div className="relative h-full w-[30%] bg-black opacity-100 rounded-md p-2 items-center flex justify-center">
						<img src={apple} alt="" className='h-full object-cover'/>
						<div className='w-full h-full absolute flex p-2 justify-center items-center'>
							<div className='w-full h-full backdrop-blur-[8px]'>
								<p className='text-white opacity-100'>
									Step count
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Page_1;