import { useState } from "react";
import DataLabelsChart from '../chart/chart_card';
import Bar_Chart from '../chart/bar_chart';
import ProfitChartCard from '../chart/line';
import ColumnChartCard from '../chart/column_line';
import Piechart from "../chart/piechart";



function Page(){

	const [data, setData] = useState([{
		name: 'body fat',
		value: 45,
		unit: '%',
		percent: 45
	},{
		name: 'sleep',
		value: 7,
		unit: 'hour',
		percent: 80
	},{
		name: 'step count',
		value: 8547,
		unit: 'steps',
		percent: 75
	}])
	
	
	return(
		<>
		<div className="flex flex-col gap-2">
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 flex gap-2">
				{data.map((i, index) => (
					<div className="text-sm font-boldflex flex-col p-2 rounded-xl shadow-xl bg-white">
						<div>
							<p className="sm:text-[18px] text-zinc-600 capitalize">{i.name}</p>
							<div className="p-2 flex justify-center sm:justify-end">
								<Piechart percent={i.percent} value={i.value} unit={i.unit}/>
								
							</div>
						</div>
					</div>
				))}
			</div>


			
		</div>
		</>
)
}

export default Page;