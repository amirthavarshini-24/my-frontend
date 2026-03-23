import {
Info,
Shield,
Sparkles,
Globe,
CheckCircle,
Users,
Code,
BookOpen
} from "lucide-react"

export default function About(){

const techStack = [

{category:"Frontend",items:["React","TypeScript","Tailwind CSS"]},

{category:"Text Analysis",items:["Natural Language Processing","Multilingual Processing","Context Analysis"]},

{category:"Data Visualization",items:["Recharts","Analytics Dashboard"]},

{category:"Languages Supported",items:["English","Hindi","Malayalam","Mixed"]}

]

const features=[

{
title:"Real-time Analysis",
description:"Instantly detect toxic comments",
icon:Shield
},

{
title:"Emotion Detection",
description:"Analyze emotional behavior",
icon:Sparkles
},

{
title:"Multilingual Support",
description:"Works across English, Hindi, Malayalam, and mixed text",
icon:Globe
},

{
title:"Safe Rewriting",
description:"Convert toxic text into respectful language",
icon:CheckCircle
},

{
title:"Behaviour Analysis",
description:"Understand user intent in comments",
icon:Users
},

{
title:"Analytics Dashboard",
description:"View toxicity statistics and insights",
icon:Code
}

]

return(

<div style={{minHeight:"100vh",padding:"40px"}}>

<div style={{maxWidth:"1100px",margin:"auto"}}>

{/* Header */}

<div style={{textAlign:"center",marginBottom:"40px"}}>

<div style={{
display:"inline-flex",
alignItems:"center",
gap:"8px",
background:"#e0f2fe",
padding:"6px 12px",
borderRadius:"20px"
}}>

<Info size={16}/>
<span style={{fontSize:"14px"}}>About the Project</span>

</div>

<h1 style={{fontSize:"42px",marginTop:"15px"}}>

About ToxiGuard

</h1>

<p style={{maxWidth:"700px",margin:"auto",opacity:0.8}}>

A multilingual platform designed to promote safe and respectful online
communication by identifying harmful comments and suggesting
constructive alternatives.

</p>

</div>

{/* Project Description */}

<div style={{
background:"white",
padding:"40px",
borderRadius:"16px",
boxShadow:"0 5px 20px rgba(0,0,0,0.1)",
marginBottom:"40px"
}}>

<h2 style={{fontSize:"28px",marginBottom:"20px"}}>

Project Overview

</h2>

<p style={{marginBottom:"15px"}}>

ToxiGuard is a multilingual toxic comment classification platform that
helps create safer online communities. The system analyzes user comments,
identifies harmful language patterns, and provides suggestions for
constructive communication.

</p>

<p>

The platform supports English, Hindi, Malayalam, and mixed language
conversations. It helps moderators, students, and communities maintain
respectful online discussions.

</p>

</div>

{/* Features */}

<div style={{marginBottom:"50px"}}>

<h2 style={{fontSize:"28px",textAlign:"center",marginBottom:"30px"}}>

Key Features

</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"20px"
}}>

{features.map((feature,index)=>{

const Icon=feature.icon

return(

<div key={index} style={{
background:"white",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}}>

<div style={{
width:"40px",
height:"40px",
background:"linear-gradient(135deg,#3b82f6,#22c55e)",
borderRadius:"10px",
display:"flex",
alignItems:"center",
justifyContent:"center",
marginBottom:"12px"
}}>

<Icon color="white" size={18}/>

</div>

<h3 style={{marginBottom:"6px"}}>

{feature.title}

</h3>

<p style={{fontSize:"14px",opacity:0.8}}>

{feature.description}

</p>

</div>

)

})}

</div>

</div>

{/* Tech Stack */}

<div style={{
background:"#f0f9ff",
padding:"40px",
borderRadius:"16px",
marginBottom:"40px"
}}>

<h2 style={{fontSize:"28px",marginBottom:"25px"}}>

Technology Stack

</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px"
}}>

{techStack.map((tech,index)=>(

<div key={index} style={{
background:"white",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}}>

<h3 style={{marginBottom:"10px"}}>

{tech.category}

</h3>

<ul>

{tech.items.map((item,i)=>(

<li key={i} style={{fontSize:"14px"}}>

✔ {item}

</li>

))}

</ul>

</div>

))}

</div>

</div>

{/* CTA */}

<div style={{
textAlign:"center",
background:"#ecfeff",
padding:"40px",
borderRadius:"16px"
}}>

<h2 style={{fontSize:"26px",marginBottom:"10px"}}>

Start Moderating Comments

</h2>

<p style={{marginBottom:"20px"}}>

Use the platform to analyze comments and monitor community discussions.

</p>

<a href="/analyze">

<button style={{
padding:"12px 30px",
background:"linear-gradient(90deg,#3b82f6,#22c55e)",
color:"white",
border:"none",
borderRadius:"10px",
cursor:"pointer"
}}>

Analyze Comments

</button>

</a>

</div>

</div>

</div>

)

}