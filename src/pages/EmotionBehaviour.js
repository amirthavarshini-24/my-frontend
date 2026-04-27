import { useState } from "react"
import "./Emotion.css"

export default function Emotion(){

const [text,setText] = useState("")
const [language,setLanguage] = useState("English")
const [emotion,setEmotion] = useState("")

const analyzeEmotion = async () => {

if(!text.trim()) return

const response = await fetch("https://my-backend-h18l.onrender.com/emotion",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text,
language:language
})
})

const data = await response.json()

setEmotion(data.emotion)

}

return(

<div className="emotion-page">

<div className="emotion-card">

<h1>Emotion Analysis</h1>

<p>Detect emotional tone in comments</p>

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

<button onClick={analyzeEmotion}>
Analyze Emotion
</button>

{emotion && (

<div className="emotion-result">

<h3>Detected Emotion</h3>

<p>{emotion}</p>

</div>

)}

</div>

</div>

)

}