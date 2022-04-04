import React from 'react';
import { LineChart,Line, YAxis, XAxis, Tooltip, AreaChart, Area, PieChart, Pie, BarChart, CartesianGrid, Legend, Bar } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div>
            <h1 className='m-8 flex justify-center text-4xl font-serif font-semibold text-violet-900'>Month Wise Sell</h1>
            <LineChart width={400} height={250} data = {data}>
               <Line dataKey={'sell'}></Line>
               <XAxis dataKey={'month'}></XAxis>
               <YAxis></YAxis>
               <Tooltip></Tooltip>
            </LineChart>
            </div>
            {/* area Chart */}
            <div>
            <h1 className='m-8 text-4xl flex justify-center font-serif font-semibold text-violet-900'>Investment Vs Revenue</h1>
                <AreaChart width={400} height={250} data={data}>
                    <defs>
                     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                     </linearGradient>
                     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                     </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <XAxis dataKey={'month'}/>
                    <YAxis/>
                    <Tooltip/>
                </AreaChart>
            </div>
            <div>
               <h1 className='m-8 text-4xl font-serif flex justify-center font-semibold text-violet-900'>Investment Vs Revenue</h1>
               <BarChart width={400} height={250} data={data}>
                 <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" fill="#8884d8" />
                   <Bar dataKey="revenue" fill="#82ca9d" />
               </BarChart>
            </div>
            {/* Pie chart */}
            <div>
                <h1 className='m-8 text-4xl flex justify-center font-serif font-semibold text-violet-900'>Investment Vs Revenue</h1>
                <PieChart width={400} height={250}>
                    <Pie data={data} dataKey="revenue"  cx="50%" cy="50%" outerRadius={50} fill="#8884d8"/>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;