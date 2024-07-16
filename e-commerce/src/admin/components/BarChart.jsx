import React from 'react'
import { Bar, BarChart, Legend, XAxis, Tooltip } from 'recharts';

export default function BarChartComponent() {

    const data = [
        { name: 'Jan', Users: 4000, Orders: 2400, Revenue: 2400 },
        { name: 'Feb', Users: 3000, Orders: 1398, Revenue: 2210 },
        { name: 'Mar', Users: 2000, Orders: 4800, Revenue: 2290 },
        { name: 'Apr', Users: 2780, Orders: 3908, Revenue: 2000 },
        { name: 'May', Users: 1890, Orders: 4800, Revenue: 2181 },
    ];

    return (
        <>
            <BarChart
                width={630}
                height={300}
                data={data}
                barSize={7}
            >
                <XAxis dataKey="name" />
                <Tooltip
                    cursor={{ fill: '#f1f1f1' }}
                    contentStyle={{ color: '#000', fontSize: '14px', fontFamily: `"Josefin sans", serif` }}
                />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '16px', fontFamily: `"Josefin sans", serif`}} />
                <Bar dataKey="Users" fill="#0c9fb5" />
                <Bar dataKey="Orders" fill="#082692" />
                <Bar dataKey="Revenue" fill="#1fb9e8" />
            </BarChart>
        </>
    )
}
