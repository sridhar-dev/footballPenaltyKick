let count = 1;
let scoreLeft = 0;
let scoreRight = 0;
let stopLimit = 0;
let turns = 11

let shooting = () => {

    let rand = Math.floor(Math.random() * 2);
    stopLimit += count 

    

  
    if(count === 1){
        if(rand === 0){
            document.body.style.backgroundColor = "red";
            document.getElementById('head').innerHTML = "GOAL Missed!";
            document.title = "You Missed!";
            document.getElementById('subHead').innerHTML = "Number of turns left: " + (turns-=1);
            count = 0;
            
            
        }
        else if(rand === 1){
            document.body.style.backgroundColor = "green";
            document.getElementById('head').innerHTML = "Hurray! It's a GOAL!";
            document.title = "Its a GOAL!";
            document.getElementById('subHead').innerHTML = "Number of turns left: " + (turns-=1);
            document.getElementById('scoreLeft').innerHTML = scoreLeft+=1;
            count = 0;
            
            
        }
        
    }

    else {
        if(rand === 0){
            document.body.style.backgroundColor = "red";
            document.getElementById('head').innerHTML = "GOAL Missed!";
            document.title = "You Missed!";
            document.getElementById('subHead').innerHTML = "Number of turns left: " + (turns-=1);
            count = 1;
            
        }
        
        else if(rand === 1){
            document.body.style.backgroundColor = "green"; 
            document.getElementById('head').innerHTML = "Hurray! It's a GOAL!";
            document.title = "Its a GOAL!";
            document.getElementById('subHead').innerHTML = "Number of turns left: " + (turns-=1);
            document.getElementById('scoreRight').innerHTML = scoreRight+=1;
            count = 1;
            
        }
         
    }   
    


    if (stopLimit > 5){
        document.getElementById('shoot').disabled = true;
        document.getElementById('head').innerHTML = "Game Over.  Start a new game.";
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Play Again!");
        x.appendChild(t);
        x.setAttribute('href', "#");
        x.setAttribute('onclick', "window.location.reload();");
        
        document.body.appendChild(x);

        if (scoreLeft > scoreRight){
            document.getElementById('result').innerHTML = "Manchester United F.C. won the match"
            
          }
          else if (scoreLeft === scoreRight){
            document.getElementById('result').innerHTML = "Tie"
            
          }
          else
          document.getElementById('result').innerHTML = "Liverpool F.C. won the match"
        
    }

    

}



