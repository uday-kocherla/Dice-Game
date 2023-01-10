var randomnumber1 = Math.floor(Math.random()*6)+1; //Genrate 1-6

var randomDiceImage= "dice" + randomnumber1 +".png"; // Genrate String from dice1.png - dice6.png

var randomDiceSource = "images/" + randomDiceImage; //Genrate Source of dice1.png - dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource)

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomnumber2 +".png";

var randomDiceSource2 = "images/" +randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource2);

//if randomnumber1 is greater
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩Player-1 Wins";
}

else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player-2 Wins🚩";
}

else
{
    document.querySelector("h1").innerHTML="Draw";
}