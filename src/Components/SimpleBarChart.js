import { BarChart, Bar, Label, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const SimpleBarChart = ({data}) => {
    return (
        
        <BarChart
          width={800}
          isAnimationActive={true}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        <XAxis  axisLine={{ stroke: 'white' }}  dataKey="name" tick={{ fill: 'white' }} 
        tickLine={{ stroke: 'white' }}/>
        <YAxis  axisLine={{ stroke: 'white' }}  tick={{ fill: 'white' }} 
        tickLine={{ stroke: 'white' }}/>
        <Tooltip />
        <Legend />
        <Bar barSize={25} dataKey="reviews" fill="#FFC300" activeBar={<Rectangle fill="gray" stroke="blue" />} />
        </BarChart>
      
    );
}


export default SimpleBarChart;