import { useState } from "react"
import "./SafeCoach.css"

export default function SafeCoach(){

const [text,setText] = useState("")
const [language,setLanguage] = useState("English")
const [behaviour,setBehaviour] = useState("")
const [suggestion,setSuggestion] = useState("")

const analyzeCoach = async () => {

if(!text.trim()) return

try{

const response = await fetch("https://my-backend-h18l.onrender.com/safe-coach",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text
})
})

if(!response.ok){
throw new Error("Server error")
}

const data = await response.json()

setBehaviour(data.behaviour || "")
setSuggestion(data.suggestion || "")

}

catch(error){
console.error("Error:",error)
alert("Backend connection failed")
}

}

return(

<div className="coach-page">

<div className="coach-card">

<h1>Safe Command Coach</h1>

<p>Identify behaviour and suggest better communication</p>

<div className="lang-tabs">

{["English","Hindi","Malayalam","Mixed"].map((l)=>(
<button
key={l}
onClick={()=>setLanguage(l)}
className={language===l?"active":""}
>
{l}
</button>
))}

</div>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Type your comment..."
/>

<button onClick={analyzeCoach}>
Analyze Behaviour
</button>

{behaviour && (

<div className="coach-result">

<p><b>Behaviour:</b> {behaviour}</p>

<p><b>Suggestion:</b> {suggestion}</p>

</div>

)}

</div>

</div>

)

}