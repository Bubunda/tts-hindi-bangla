
const root = document.getElementById("root");

root.innerHTML = `
  <div style='font-family:sans-serif; max-width:600px; margin:50px auto; padding:20px; border-radius:12px; background:#f9f9f9; box-shadow:0 0 10px rgba(0,0,0,0.1);'>
    <h2 style='text-align:center;'>টেক্সট টু স্পিচ (বাংলা/হিন্দি)</h2>
    <select id="lang" style='width:100%; margin:10px 0; padding:8px;'>
      <option value="hi-IN">হিন্দি</option>
      <option value="bn-IN">বাংলা</option>
    </select>
    <textarea id="text" rows="4" style='width:100%; padding:8px;' placeholder="এখানে বাংলা বা হিন্দি টেক্সট লিখুন"></textarea>
    <button id="play" style='margin-top:10px; padding:10px 20px; background:#2563eb; color:white; border:none; border-radius:8px;'>স্পিচ শুনুন ও ডাউনলোড করুন</button>
    <audio id="audio" controls style="margin-top:10px; display:none;"></audio>
  </div>
`;

document.getElementById("play").onclick = () => {
  const text = document.getElementById("text").value;
  const lang = document.getElementById("lang").value;
  if (!text) return alert("দয়া করে কিছু টেক্সট লিখুন");

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;

  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(v => v.lang === lang);
  speechSynthesis.speak(utterance);

  // Create dummy audio for download (simulate recording)
  const audio = document.getElementById("audio");
  audio.src = `data:audio/webm;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEA...`;
  audio.style.display = "block";

  // Simulate download (placeholder only)
  const a = document.createElement("a");
  a.href = audio.src;
  a.download = "tts-output.webm";
  a.click();
};
