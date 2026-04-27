import { useEffect, useState } from "react";
import "./Dashboard.css";
import {
PieChart,
Pie,
Cell,
Tooltip,
Legend,
ResponsiveContainer
} from "recharts";

export default function Dashboard(){

const [stats,setStats] = useState({
total_requests:0,
toxic:0,
non_toxic:0
})

useEffect(()=>{

fetch("https://my-backend-h18l.onrender.com/stats")
.then(res=>res.json())
.then(data=>{
setStats(data)
})

},[])

const pieData = [
{ name:"Toxic", value:stats.toxic },
{ name:"Non Toxic", value:stats.non_toxic }
]

const COLORS = ["#ef4444","#22c55e"]

return(

<div className="dashboard">

<h1 className="title">
Moderation Analytics
</h1>

{/* CARDS */}

<div className="cards">

<div className="card total">
<h3>Total Requests</h3>
<p>{stats.total_requests}</p>
</div>

<div className="card toxic">
<h3>Toxic Comments</h3>
<p>{stats.toxic}</p>
</div>

<div className="card safe">
<h3>Non Toxic</h3>
<p>{stats.non_toxic}</p>
</div>

</div>


{/* CHART */}

<div className="chart-box">

<h2>Toxic vs Non Toxic Distribution</h2>

<ResponsiveContainer width="100%" height={320}>

<PieChart>

<Pie
data={pieData}
dataKey="value"
innerRadius={70}
outerRadius={120}
label
>

{pieData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]}/>
))}

</Pie>

<Tooltip/>
<Legend/>

</PieChart>

</ResponsiveContainer>

</div>


{/* INFO ANALYTICS */}

<div className="info">

<div className="info-box">

<h3>System Insight</h3>

<p>
This dashboard provides an overview of comment analysis results.
It visualizes the distribution of toxic and non-toxic comments
identified by the system and helps understand overall
communication patterns within the platform.
</p>

</div>

<div className="info-box">

<h3>Moderation Status</h3>

<p>
This dashboard provides an overview of comment analysis results.
It visualizes the distribution of toxic and non-toxic comments
identified by the system and helps understand overall
communication patterns within the platform.
</p>

</div>

</div>

</div>

)

}
