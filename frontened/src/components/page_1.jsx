import { useEffect, useState } from 'react';
import Page from '../dashboard/page';
import Search from './search';
import Setting from './setting';
import Goals from '../goals/goals';
import Logo from './logo';
import Left_bar from './left_bar';
import nutrition_img from '../image/diet.png';
import dashboard_img from '../image/statisctics.png';
import goal_img from '../image/target.png';
import setting from '../image/technology.png';
import panda_img from '../image/panda_img.png';
import Nutrition from '../nut_data/nutrition';
import SleepTracker from '../sleep_section/sleep';


function Page_1({ details, setNotification, setCurrent_user }) {
  const [activeTab, setActiveTab] = useState('dashboard');
	const tab = [
    { name: 'dashboard', img: dashboard_img },
    { name: 'nutrition', img: nutrition_img },
    { name: 'sleep', img: panda_img },
    { name: 'goals', img: goal_img },
    { name: 'setting', img: setting }
  ];	
  const [open, setOpen] = useState(false);
  const [show_left, setShow_left] = useState(false);

  return(
		<div className={`min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 flex flex-row`}>
      
        
      <div className={`sticky top-0 h-screen w-fit hidden sm:flex flex-col gap-[2px] py-2 ${show_left ? "bg-black " : "bg-white"} border-r-1 border-zinc-400`}>
        <div className={`flex flex-col gap-[2px] px-2 ${show_left ? "ml-auto" : "items-center" } cursor-pointer`}
        onClick={() => setShow_left(!show_left)}
        >
          <div className={`w-5 py-[1px] ${!show_left ? "bg-black " : "bg-white"}`}></div>
          <div className={`w-5 py-[1px] ${!show_left ? "bg-black " : "bg-white"}`}></div>
          <div className={`w-5 py-[1px] ${!show_left ? "bg-black " : "bg-white"}`}></div>
        </div>
        <div className='h-full'>
            <Left_bar tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} setOpen={setOpen} show_left={show_left}/>
        </div>
      </div>
      

      <div className={`${show_left ? "w-full" : "w-full"} h-full mx-auto sm:p-2 flex flex-col flex flex-col gap-2`}>
        
      <div className="h-full w-full rounded-sm md:rounded bg-black text-white p-4 flex flex-col gap-4">

        <div className="flex flex-col sm:flex-row md:flex-row gap-2">

          <div className="flex items-center md:mb-0 sm:mb-4">
            <div className="shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
              <Logo/>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">FitPanda Dashboard</h1>
          </div>

          <div className="w-full sm:w-fit flex flex-row gap-2 items-center flex justify-between mb-2 ml-auto">
            
            <button className="w-fit p-2 sm:hidden md:hidden flex cursor-pointer"
            onClick={() => setOpen(!open)}
            >
              <div className='flex flex-col gap-[6px]'>
                <span className='py-[1px] w-7 bg-white'></span>
                <span className='py-[1px] w-7 bg-white'></span>
                <span className='py-[1px] w-7 bg-white'></span>
              </div>
            </button>

            <div className="flex flex-row gap-2 ml-auto">
              <div className="shrink-0 bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
              <div>
                <p className="font-medium">{details.username} <span className="text-gray-300 text-xs">({details.gender})</span></p>
                <p className="text-gray-300 text-xs">{details.age} years old</p>
              </div>
            </div>

          </div>

        </div>

        <div className={`h-full ${open ? 'flex' : 'hidden'} rounded border-zinc-400 sm:flex md:flex sm:flex-row md:flex-row flex-col gap-2`}>
          <div className='hidden sm:flex '>
            {tab.map((i, index) => (
              <button
                key={index}
                className={`flex justify-start px-2 py-2 rounded-lg transition-colors ${activeTab === i.name ? 'bg-gray-800 text-white border-1' : 'text-gray-300 hover:text-white'}`}
                onClick={() => {
                  setActiveTab(i.name);
                  setOpen(false);
                }}
              >
                {i.name.charAt(0).toUpperCase() + i.name.slice(1)}
              </button>
            ))}
          </div>
          <div className={`flex sm:hidden `}>
            <Left_bar tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} setOpen={setOpen} show_left={show_left}/>
          </div>

        </div>

      </div>

      <div className='h-full p-2 bg-white/90'>
        {activeTab === 'dashboard' ?
        <Page setNotification={setNotification} user_data={details}/>
        :
        activeTab === 'setting' ?
        <Setting details={details} setNotification={setNotification} setCurrent_user={setCurrent_user}/>
        :
        activeTab === 'goals' ?
        <Goals/>
        :
        activeTab === 'nutrition' ?
        <Nutrition setNotification={setNotification}/>
        :
        activeTab === 'sleep' ?
        <SleepTracker/>
        :
        <div className='flex items-center justify-center'>
          No page found!
        </div>
        }
      </div>
    </div>

    </div>
  );
}

export default Page_1;