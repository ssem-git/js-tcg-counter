const p1hp = document.getElementById("player1hp")
const p1sts = document.getElementById("player1status")
const p1wrp = document.getElementById("player1wrap")
const p2hp = document.getElementById("player2hp")
const p2sts = document.getElementById("player2status")
const p2wrp = document.getElementById("player2wrap")

function decrease(number, who) {
  if (who == "p1") {
    p1hp.innerText -= number
  }
  else if (who == "p2") {
    p2hp.innerText -= number
  }
  check()
}

function increase(number, who) {
  if (who == "p1") {
    p1hp.innerText = parseInt(p1hp.innerText) + number
  }
  else if (who == "p2") {
    p2hp.innerText = parseInt(p2hp.innerText) + number
  }
  check()
}

function check() {
  if (parseInt(p1hp.innerText) > parseInt(p2hp.innerText) && parseInt(p1hp.innerText) > 0 ) {
    console.log("p1winning")
    // Update header image
    p1sts.className="winning"
    if (parseInt(p1hp.innerText) > 0) {
      p1wrp.querySelector("main").className = "";
    } 
    if (parseInt(p2hp.innerText) <= 0) {
      // Graveyard
      p2sts.className="negative"
      p2wrp.querySelector("main").className = "death";
    } 
    else {
      // Ruins
      p2wrp.querySelector("main").className = ""
      p2sts.className="losing"
    }
    // Set crown (leader) 
    p1wrp.className="counter-wrapper crown"
    p2wrp.className="counter-wrapper"
  } 

  else if (parseInt(p1hp.innerText) < parseInt(p2hp.innerText) && parseInt(p2hp.innerText) > 0) {
    console.log("p2winning")
    if (parseInt(p2hp.innerText) > 0) {
      p2wrp.querySelector("main").className = "";
    } 
    // Update header image
    if (parseInt(p1hp.innerText) <= 0) {
      // Graveyard
      p1sts.className="negative"
      p1wrp.querySelector("main").className = "death";
    } 
    else {
      // Ruins
      p1wrp.querySelector("main").className = ""
      p1sts.className="losing"
    }
    p2sts.className="winning"
    // Set crown (leader) 
    p1wrp.className="counter-wrapper"
    p2wrp.className="counter-wrapper crown"
  } 

  else {
    // Update header image
    p1sts.className=""
    p2sts.className=""
    if (parseInt(p1hp.innerText) > 0) {
      p1wrp.querySelector("main").className = "";
    } 
    else {
      // draw
      p1wrp.querySelector("main").className = "death";
      console.log("DRAW")
      p1sts.className = "draw"
    }
    if (parseInt(p2hp.innerText) > 0) {
      p2wrp.querySelector("main").className = "";
    } 
    else {
      // draw
      p2wrp.querySelector("main").className = "death";
      p2sts.className = "draw"
      console.log("DRAW")
    }
    // Remove crown (leader) 
    p1wrp.className="counter-wrapper"
    p2wrp.className="counter-wrapper"
    console.log("p1p2equal")
  }
}

function reset() {
  p1hp.innerText = 20
  p2hp.innerText = 20
  p1wrp.querySelector("main").className = "";
  p2wrp.querySelector("main").className = "";
  check()
}
