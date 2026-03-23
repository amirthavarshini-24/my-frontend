import { useState } from "react";
import "./Behaviour.css";

export default function Behaviour(){

  const [text,setText] = useState("");
  const [language,setLanguage] = useState("English");
  const [behaviour,setBehaviour] = useState("");

  const analyzeBehaviour = async () => {

    if(!text.trim()) return;

    try {

      const response = await fetch("https://my-backend-h18l.onrender.com/behaviour", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          text:text,
          language:language
        })
      });

      if(!response.ok){
        throw new Error("Server error");
      }

      const data = await response.json();

      console.log("Behaviour API:", data);

      setBehaviour(data.behaviour || "No result");

    } catch(err){
      console.error(err);
      setBehaviour("⚠ Server Error (Try again)");
    }
  };

  return(

    <div className="behaviour-page">

      <div className="behaviour-card">

        <h1>Behaviour Analysis</h1>

        <p>Detect behavioural patterns</p>

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

        <button onClick={analyzeBehaviour}>
          Analyze Behaviour
        </button>

        {behaviour && (

          <div className="result-container">

            <h3>Behaviour</h3>

            <span className="result-badge">
              {behaviour}
            </span>

          </div>

        )}

      </div>

    </div>

  );
}