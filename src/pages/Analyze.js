const analyze = async () => {

  if (!text.trim()) return;

  setResult("⏳ Checking...");

  try {

    // 🔥 retry logic (3 attempts)
    for (let i = 0; i < 3; i++) {

      const response = await fetch("https://my-backend-h18l.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          language: lang
        }),
      });

      if (!response.ok) {
        await new Promise(r => setTimeout(r, 2000)); // wait 2 sec
        continue;
      }

      const data = await response.json();

      console.log("API:", data);

      const value = data.prediction;

      if (value === "toxic") {
        setResult("❌ Toxic Comment");
      } else if (value === "non_toxic") {
        setResult("✅ Non-Toxic Comment");
      } else {
        setResult("⚠ Unknown Result");
      }

      return; // ✅ success → stop loop
    }

    // ❌ all retries failed
    setResult("⚠ Server busy, try again");

  } catch (error) {
    console.error(error);
    setResult("⚠ Backend not responding");
  }
};