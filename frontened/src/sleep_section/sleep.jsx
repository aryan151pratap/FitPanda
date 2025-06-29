import React, { useState } from 'react';
import Calendar from '../components/calender';

const SleepTracker = () => {
  return(
	<>
	<div className='w-full sm:p-2 bg-white rounded'>

	<Calendar/>
	</div>
	</>
  )
};

export default SleepTracker;