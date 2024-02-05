import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const SimplePieChart = ({data, colors}) => {
  const COLORS = ['#0088FE', '#FF8042','#FFBB28', '#00C49F', '#F0360F'];

    return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={200}
          cy={200}
          outerRadius={150}
          fill="#FFC300"
        >
        {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
};
export default SimplePieChart;