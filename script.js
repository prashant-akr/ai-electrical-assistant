window.onload = function() {
  document.getElementById("chat").innerHTML += 
  "<div class='msg bot'><b>Assistant:</b> Hello! I am your Electrical Engineering Assistant ⚡ Ask me concepts, formulas, or viva questions.</div>";
}

function sendMessage() {
  let input = document.getElementById("input").value;
  let chat = document.getElementById("chat");

  if(input === "") return;

  chat.innerHTML += `<div class='msg user'><b>You:</b> ${input}</div>`;

  let response = getSmartResponse(input.toLowerCase());

  chat.innerHTML += `<div class='msg bot'><b>Assistant:</b> ${response}</div>`;

  document.getElementById("input").value = "";
  chat.scrollTop = chat.scrollHeight;
}

function getSmartResponse(input) {


  if(input.includes("ohm")) {
    return "Ohm's Law: V = I × R. It relates voltage, current and resistance.";
  }

  if(input.includes("power")) {
    return "Electrical Power: P = V × I. Unit is Watt.";
  }

  if(input.includes("energy")) {
    return "Energy = Power × Time. Unit is Joule or kWh.";
  }

  if(input.includes("transformer")) {
    return "A transformer transfers electrical energy between circuits using mutual induction. It works only on AC.";
  }

  if(input.includes("induction motor")) {
    return "An induction motor works on electromagnetic induction. Rotor current is induced by stator field.";
  }

  if(input.includes("dc motor")) {
    return "A DC motor converts electrical energy into mechanical energy using magnetic force.";
  }

  if(input.includes("kirchhoff")) {
    return "Kirchhoff's Laws: KCL (current law) and KVL (voltage law) are used for circuit analysis.";
  }

  if(input.includes("laplace")) {
    return "Laplace transform converts time domain signals into frequency domain for easier analysis.";
  }

  if(input.includes("viva")) {
    const vivaQuestions = [
      "What is Ohm's Law? Answer: V = I × R",
      "What is Transformer? Answer: Device that transfers electrical energy using induction",
      "What is KCL? Answer: Sum of currents at a node is zero",
      "What is Power? Answer: Rate of energy transfer"
    ];
    return vivaQuestions[Math.floor(Math.random() * vivaQuestions.length)];
  }


  if(input.startsWith("calculate")) {
    try {
      let exp = input.replace("calculate", "");
      let result = eval(exp);
      return `Result: ${result}`;
    } catch {
      return "Invalid calculation. Try like: calculate 5+3";
    }
  }

  return "I can help with electrical formulas, machines, and viva questions. Try asking about transformer, motor, or laws.";
}

document.getElementById("input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});