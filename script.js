// document.querySelector(".weapons").style.display = "none";
let gameRound = 1;
let humanScore = 0;
let computerScore = 0;
roundArray = [
    "./Mk sounds/rounds/Round 1.mp3",
    "./Mk sounds/rounds/Round 2.mp3",
    "./Mk sounds/rounds/Round 3.mp3",
    "./Mk sounds/rounds/Round 4.mp3",
    "./Mk sounds/rounds/Round 5.mp3",
    "./Mk sounds/rounds/Round 6.mp3",
    "./Mk sounds/rounds/Round 7.mp3",
    "./Mk sounds/rounds/Round 8.mp3",
    "./Mk sounds/rounds/Round 9.mp3",
]

if (document.querySelector(".yesButton").addEventListener("click", function(){
    let titleToRound = document.querySelector("h1").innerText = `Round ${gameRound}`;

    let gong = new Audio("./Mk sounds/Gong.mp3");
    gong.play();
    let round1 = new Audio("./Mk sounds/rounds/Round 1.mp3")
    round1.play();

    document.querySelector("h2").innerText = "Choose your weapon!";
    document.querySelector(".weapons").style.display = "block";
    document.querySelector(".yesButton").style.display = "none";

    let button = document.querySelector(".weapons");
    let currentIndex = 1
    function handleClick(event){
        buttonClicked = event.target.textContent;
        playerSelection = buttonClicked.toLowerCase();
        playGame();
    };

    button.addEventListener("click", handleClick)

    // computer choose weapon:
    function getComputerChoice(){
        const weapons = ["rock", "paper", "scissors", "chop sticks"];
        const randomWeapon = Math.floor(Math.random() * weapons.length);
        return weapons[randomWeapon]
    }

    function playRound(playerSelection, computerSelection){
        playerSelection.toLowerCase()
        gameRound += 1;
        let titleToRound = document.querySelector("h1").innerText = `Round ${gameRound}`;
        
        if (playerSelection == "rock" && computerSelection == "scissors"){
            humanScore += 1 
            document.querySelector("h2").innerText = `You win ! ${playerSelection} beats ${computerSelection}.`;
        }else if (playerSelection == "paper" && computerSelection == "rock"){
            humanScore += 1
            document.querySelector("h2").innerText = `You win ! ${playerSelection} beats ${computerSelection}.`;
        }else if (playerSelection == "scissors" && computerSelection == "paper"){
            humanScore += 1
            document.querySelector("h2").innerText = `You win ! ${playerSelection} beats ${computerSelection}.`;     
        }else if (playerSelection == computerSelection){
            document.querySelector("h2").innerText = `We have a tie! You both chose ${playerSelection}.`;   
        }else {
            computerScore += 1
            document.querySelector("h2").innerText = `You lose! Computer chose: ${computerSelection}. \n${computerSelection} beats ${playerSelection}. `;
        }

        document.querySelector(".playerScore").innerText = `Player Score: ${humanScore}`;
        document.querySelector(".computerScore").innerText = `Computer Score: ${computerScore}`;

        playSound(roundArray[currentIndex]);
        currentIndex = (currentIndex + 1) % roundArray.length;
        
        function playSound(src){
            const audio = new Audio(src);
            let flawless = new Audio("./Mk sounds/endings/Flawless victory.mp3");
            let laughAudio = new Audio("./Mk sounds/Laugh.mp3");
            let impressive = new Audio("./Mk sounds/endings/Impressive.mp3")

            if(gameRound > 9){

                if (computerScore == 5 && computerScore > humanScore){
                    laughAudio.play()
                    document.querySelector("h1").innerText = "Sorry, you lose!";
                    document.querySelector("h2").innerText = "The Game will refresh";
                    document.querySelector("button.rockBtn").style.visibility = "hidden";
                    document.querySelector("button.paperBtn").style.visibility = "hidden";
                    document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                    audio.pause()
                    setTimeout(function(){
                        window.location.reload()
                    }, 5000);

                }else if(humanScore == 5 && humanScore > computerScore){
                    impressive.play();
                    document.querySelector("h1").innerText = "Congratulations, you are the winner !";
                    document.querySelector("h2").innerText = "The Game will refresh";
                    document.querySelector("button.rockBtn").style.visibility = "hidden";
                    document.querySelector("button.paperBtn").style.visibility = "hidden";
                    document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                    audio.pause()
                    setTimeout(function(){
                        window.location.reload()
                    }, 5000);
                }

            }else if (humanScore == 5 && computerScore == 0){
                
                flawless.play();
                document.querySelector("h1").innerText = "Congratulations, you are the winner !";
                document.querySelector("h2").innerText = "The Game will refresh";
                document.querySelector("button.rockBtn").style.visibility = "hidden";
                document.querySelector("button.paperBtn").style.visibility = "hidden";
                document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                audio.pause()
                setTimeout(function(){
                    window.location.reload()
                }, 5000);
            
            }else if (humanScore == 5 && humanScore > computerScore){    
                impressive.play();
                document.querySelector("h1").innerText = "Congratulations, you are the winner !";
                document.querySelector("h2").innerText = "The Game will refresh";
                document.querySelector("button.rockBtn").style.visibility = "hidden";
                document.querySelector("button.paperBtn").style.visibility = "hidden";
                document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                audio.pause()
                setTimeout(function(){
                    window.location.reload()
                }, 5000);

            }else if (computerScore == 5 && humanScore == 0){
                flawless.play();
                document.querySelector("h1").innerText = "Sorry, you lose!";
                document.querySelector("h2").innerText = "The Game will refresh";
                document.querySelector("button.rockBtn").style.visibility = "hidden";
                document.querySelector("button.paperBtn").style.visibility = "hidden";
                document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                audio.pause()
                setTimeout(function(){
                    window.location.reload()
                }, 5000);

            }else if (computerScore == 5 && computerScore > humanScore){
                laughAudio.play()
                document.querySelector("h1").innerText = "Sorry, you lose!";
                document.querySelector("h2").innerText = "The Game will refresh";
                document.querySelector("button.rockBtn").style.visibility = "hidden";
                document.querySelector("button.paperBtn").style.visibility = "hidden";
                document.querySelector("button.scissorsBtn").style.visibility = "hidden";
                audio.pause()
                setTimeout(function(){
                    window.location.reload()
                }, 5000);

            }else{
                audio.play();
                return;
            }
        } 
    }

    function playGame(){
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }
    
})){
   
};









