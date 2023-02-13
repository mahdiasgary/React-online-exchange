import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    amt: 8400,
  },
  {
    name: 'Page B',
    amt: 2210,
  },
  {
    name: 'Page C',
    amt: 2290,
  },
  {
    name: 'Page D',
    amt: 2000,
  },
  {
    name: 'Page E',
    amt: 2181,
  },
  {
    name: 'Page F',
    amt: 2500,
  },
  
];


 const Example = () => {
    return (
        <div className='w-36 h-36 '>


            <ResponsiveContainer width={"100%"} height={"100%"}  >

          <LineChart width={300} height={100} data={data}>
            <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={2} />
          </LineChart>

            </ResponsiveContainer>

        </div>
      );
 }
  
 export default Example ;