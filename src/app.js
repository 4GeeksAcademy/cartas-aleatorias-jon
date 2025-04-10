import "bootstrap";
import "./style.css";

function deal() {
  
  let cardNum = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let palos = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let cardRandomNum = Math.floor(Math.random() * cardNum.length);
  let cardRandomPalos = Math.floor(Math.random() * palos.length);
  let paloFinal = palos[cardRandomPalos];

  document.getElementById('content').innerHTML = cardNum[cardRandomNum];
    document.getElementById('card-content').className = "";
    document.getElementById('card-content').classList.add("the-card");
    document.getElementById('card-content').classList.add(getSuiteClass(paloFinal));

}

window.getDeal = deal;

window.onload = deal;

function getSuiteClass(palos) {
  switch (palos) {
    case "Diamonds": return "palo-diamonds";
    case "Spades": return "palo-spades";
    case "Hearts": return "palo-hearts";
    case "Clubs": return "palo-clubs";
  }
}


 
 
