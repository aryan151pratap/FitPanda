function Piechart({ percent , value, unit }) {
  const colors = [
    { main: "#3b82f6", light: "#81b6fb" },
    { main: "#10b981", light: "#5ee7b2" },
    { main: "#f59e0b", light: "#fbc966" },
    { main: "#ef4444", light: "#f98b8b" },
    { main: "#8b5cf6", light: "#bb9dfb" },
    { main: "#ec4899", light: "#f58dc0" },
    { main: "#06b6d4", light: "#5ee3f0" },
    { main: "#22d3ee", light: "#7deafa" },
	{ main: "#eab308", light: "#fde047" },
  ];

  const getColorByLevel = (level) => {
    if (level >= 90) return colors[0];
    if (level >= 80) return colors[1];
    if (level >= 70) return colors[8];
    if (level >= 60) return colors[2];
    return colors[3];
  };
  const degree = (percent / 100) * 360;
  const color = getColorByLevel(percent);

  return (
          <div className="group relative w-fit flex flex-col items-center justify-center gap-2">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-md"
              style={{
                background: `conic-gradient(${color.main} 0deg ${degree}deg, ${color.light} ${degree}deg 360deg)`,
              }}
            >
              <div className="absolute top-0 right-0 border border-zinc-300 p-2 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-200">
                <p className="text-sm font-semibold">{percent}%</p>
                <p className="text-xs text-zinc-600">{value} <span>{unit}</span></p>
              </div>
			  
              {/* <div></div> */}
              <div className="w-15 h-15 bg-white rounded-full">
              <p className="text-zinc-600 w-full h-full flex items-center justify-center">{percent}%</p>
              </div>

            </div>
            <div className="bg-white text-center">
              <p className="text-sm font-medium text-zinc-700">{value} <span>{unit}</span></p>
            </div>
          </div>
       
  );
}

export default Piechart;
