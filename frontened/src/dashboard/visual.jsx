export default function MiniBarChart({ data = [10, 41, 62, 69, 35, 51, 49], color = "blue" }) {
  const max = Math.max(...data);

  return (
    <div className="h-full p-2">
      <div className="h-full flex items-end justify-between gap-1 px-4">
        {data.map((value, index) => (
          <div 
            className={`relative h-full w-3 bg-${color}-200 flex items-end rounded-full`}
          >
            <div
              key={index}
              className={`absolute w-3 rounded-full bg-${color}-500 transition-all duration-300`}
              style={{
                height: `${(value / max) * 100}%`,
              }}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
