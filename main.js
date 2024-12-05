// KF Panda Search

let nameEl = document.getElementById("char-in");
let quote = document.getElementById("char-quote");
let charName = document.getElementById("char-name");
let charImg = document.getElementById("char-img");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = nameEl.value.toLowerCase();
  //if statement
  if (name === "po") {
    charName.innerHTML = "Po";
    quote.innerHTML = "Buddy, I am the Dragon Warrior.";
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charName.innerHTML = "Tigress";
    quote.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charName.innerHTML = "Mantis";
    quote.innerHTML = "Fear the bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charName.innerHTML = "Monkey";
    quote.innerHTML = "We should hang out.";
    charImg.src = "img/monkey.png";
  } else if (name === "boss wolf") {
    charName.innerHTML = "Boss Wolf";
    quote.innerHTML = "Chew on that, tubby!";
    charImg.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charName.innerHTML = "Crane";
    quote.innerHTML = "Stop flapping your mouth an start flapping your wings.";
    charImg.src = "img/crane.png";
  } else if (name === "croc") {
    charName.innerHTML = "Croc";
    quote.innerHTML = "The only hero in this town is a dead one!";
    charImg.src = "img/croc.png";
  } else if (name === "kai") {
    charName.innerHTML = "Kai";
    quote.innerHTML = "You must be the dragon warrior.";
    charImg.src = "img/kai.png";
  } else if (name === "ping" || name === "mr ping") {
    charName.innerHTML = "Mr. Ping";
    quote.innerHTML = "... Noodles.";
    charImg.src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charName.innerHTML = "Master Oogway";
    quote.innerHTML = "Well done. I see you found a battle worth fighting for.";
    charImg.src = "img/oogway.png";
  } else if (name === "shen") {
    charName.innerHTML = "Shen";
    quote.innerHTML =
      "Search the farthest villages. Find more metal! China will be mine.";
    charImg.src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    charName.innerHTML = "Master Shifu";
    quote.innerHTML = "There is now a level zero.";
    charImg.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charName.innerHTML = "Soothsayer";
    quote.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    charImg.src = "img/soothsayer.png";
  } else if (name === "tai lung") {
    charName.innerHTML = "Tai Lung";
    quote.innerHTML =
      "So that is his name, Po... Finally, a worthy opponent! Our battle will be legendary!";
    charImg.src = "img/tai-lung.png";
  } else if (name === "viper") {
    charName.innerHTML = "Viper";
    quote.innerHTML = "I don't need a bite to fight!";
    charImg.src = "img/viper.png";
  } else if (name === "storming ox" || name === "master ox") {
    charName.innerHTML = "Storming Ox";
    quote.innerHTML = "Like I said, you are not getting me out of this cell!";
    charImg.src = "img/storming-ox.png";
  } else {
    charName.innerHTML = "?????";
    quote.innerHTML = "?????";
    charImg.src = "img/question-mark.png";
  }
}

let themeChangeBtn = document.getElementById("theme-btn");
let themeInpt = document.getElementById("theme-in");
let titleEl = document.getElementById("title");

themeChangeBtn.addEventListener("click", themeChangeClicked);

function themeChangeClicked() {
  let themeChoice = themeInpt.value;
  console.log(themeInpt);
  if (themeChoice === "dark" || themeChoice === "black") {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    titleEl.style.color = "white";
  } else if (themeChoice === "light" || themeChoice === "white") {
    document.body.style.backgroundColor = "rgba(255,255,255, 0.7)";
    titleEl.style.color = "black";
  }
}
