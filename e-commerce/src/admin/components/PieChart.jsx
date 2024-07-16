import React from 'react';
import "../styles/Dashboard.css";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

export default function PieChartComponent() {
    const data1 = [
        { name: 'Pending', value: 4567, color: '#25b6c0' },
        { name: 'Shipped', value: 2450, color: '#258fe5' },
        { name: 'Delivered', value: 1398, color: '#05566fdf' }
    ];

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data1}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                label={false}
                nameKey="name"
                legendType="circle"
            >
                {data1.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip contentStyle={{ fontSize: '14px', fontFamily: `"Josefin sans", serif` }}/>
            <Legend wrapperStyle={{ fontSize: '16px', fontFamily: `"Josefin sans", serif`, bottom:'15px', left:'8px' }} />
        </PieChart>
    );
}
