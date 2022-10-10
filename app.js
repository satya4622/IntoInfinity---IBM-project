var name = document.getElementById("name")
var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")

var answer = Math.floor(Math.random()*100) + 1;
console.log(answer);
var no_of_guesses = 0;
var guesses_num = [];

function enter()
{
	var user_name = document.getElementById("name").value;
	
	if(user_name=='')
	{
		text="Name Required";
	}
	else
	{
		
if(document.getElementById('welcome').style.display=='none')
{
	document.getElementById('welcome').style.display='block';
document.getElementById('game').style.display='none';
}
else{
	document.getElementById('welcome').style.display='none';
document.getElementById('game').style.display='block';
document.getElementById('user_name').innerHTML="Hello "+user_name+"<br> Guess a number between 1 to 100";
	}
	}
	document.getElementById('validation').innerHTML=text;
}
function play(){
	var name = user_name;
    var user_guess = document.getElementById("guess").value;
  
    if(user_guess < 1 || user_guess > 100 ){
       text="Entered number not in the given range";
	   document.getElementById('valid').innerHTML=text;
    }
    else{
        guesses_num.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
  msg1.textContent = "Your Guess is Too low"
  msg2.textContent = "No. Of Guesses : " +
  no_of_guesses;
  msg3.textContent = "Guessed Number Are: " +
  guesses_num;
        }
        else if(user_guess  > answer){
            msg1.textContent = "Your Guess is Too High"
            msg2.textContent = "No. Of Guesses : " +
            no_of_guesses;
            msg3.textContent = "Guessed Number Are: " +
            guesses_num;
        }
        else if(user_guess == answer)
		{
            msg1.textContent = "Yahhhh You won It!!"
            msg2.textContent = "the Number was " + answer
            msg3.textContent = " You guessd it in  " +   no_of_guesses   +"Guesses"; 
	    document.getElementById('my_btn').innerText="Game over";
		document.getElementById('my_btn').disabled='true';
		
		
        }
		
    }
	
}


