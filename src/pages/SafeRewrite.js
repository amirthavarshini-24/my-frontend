import { useState } from "react"
import "./SafeRewrite.css"

export default function SafeRewrite(){

const [text,setText] = useState("")
const [language,setLanguage] = useState("English")
const [rewrite,setRewrite] = useState("")

const rewriteComment = async () => {

if(!text.trim()) return

try{

const response = await fetch("https://my-backend-h18l.onrender.com/docs",{
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

setRewrite(data.safe_rewrite || "")

}

catch(error){

console.error("Error:",error)
alert("Backend connection failed")

}

}

return(

<div className="rewrite-page">

<div className="rewrite-card">

<h1>Safe Rewrite</h1>

<p>Convert toxic comment into safe message</p>

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

<button onClick={rewriteComment}>
Rewrite Comment
</button>

{rewrite && (

<div className="rewrite-result">

<h3>Rewritten Comment</h3>

<p>{rewrite}</p>

</div>

)}

</div>

</div>

)

}
