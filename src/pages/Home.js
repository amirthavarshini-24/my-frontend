import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

return (

<div className="home-page">

{/* NAVBAR */}

<nav className="navbar">

<h1 className="logo">
ToxiGuard
</h1>

<div className="nav-links">

<Link className="nav-link" to="/">Home</Link>
<Link className="nav-link" to="/analyze">Analyze</Link>
<Link className="nav-link" to="/emotion">Emotion</Link>
<Link className="nav-link" to="/behaviour">Behaviour</Link>
<Link className="nav-link" to="/rewrite">Safe Rewrite</Link>
<Link className="nav-link" to="/coach">Safe Command Coach</Link>
<Link className="nav-link" to="/dashboard">Dashboard</Link>

</div>

</nav>


{/* HERO SECTION */}

<div className="hero">

<h1>

Multilingual Context-Aware  
Toxic Comment Classification with SafeRewriting Intelligence

</h1>

<p>

Detect toxic comments, analyze emotions, understand behaviour
and promote healthy communication.

</p>

<div className="hero-buttons">

<Link to="/analyze">

<button className="start-btn">
Start Analysis
</button>

</Link>

<Link to="/dashboard">

<button className="dashboard-btn">
View Dashboard
</button>

</Link>

</div>

</div>

</div>

)

}