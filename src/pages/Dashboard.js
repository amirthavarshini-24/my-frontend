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
  });

  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    fetch("https://my-backend-h18l.onrender.com/stats")
      .then(res => {
        if(!res.ok){
          throw new Error("Server error");
        }
        return res.json();
      })
      .then(data => {
        console.log("Stats API:", data);
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  },[]);

  const pieData = [
    { name:"Toxic", value:stats.toxic },
    { name:"Non Toxic", value:stats.non_toxic }
  ];

  const COLORS = ["#ef4444","#22c55e"];

  return(

    <div className="dashboard">

      <h1 className="title">
        Moderation Analytics
      </h1>

      {loading ? (
        <p style={{textAlign:"center"}}>⏳ Loading data...</p>
      ) : (

      <>
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

      {/* INFO */}

      <div className="info">

        <div className="info-box">

          <h3>System Insight</h3>

          <p>
          This dashboard shows analysis of toxic and non-toxic comments.
          It helps monitor communication quality and user behaviour.
          </p>

        </div>

        <div className="info-box">

          <h3>Moderation Status</h3>

          <p>
          The system identifies harmful content and promotes safer communication
          by providing insights and analytics.
          </p>

        </div>

      </div>

      </>
      )}

    </div>

  );
}   