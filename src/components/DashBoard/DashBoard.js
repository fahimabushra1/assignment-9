import React from "react";
import { Line, LineChart, XAxis, YAxis, Legend, Bar, BarChart } from "recharts";

const DashBoard = () => {
    const data =

        [
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
        <div className="md:flex justify-between my-12 sm:w-screen">
            <LineChart width={500} height={300} data={data}>
                <Line type={"monotone"} dataKey={'sell'} activeDot={{ r: 8 }} stroke="#8884d8"></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment"></YAxis>
                <Legend />
            </LineChart>
            <div>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="sell" barSize={30} fill="#8884d8" />
                </BarChart>
            </div>
        </div>

    )
}
export default DashBoard;