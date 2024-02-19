let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        console.log("clicked clicked",userChoice);
        playGame(userChoice);
    })
})

const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    let compChoice=genComp();
    console.log(compChoice);
    
    if(compChoice==userChoice){
        let element1= document.querySelector("#user-score");
        let element2= document.querySelector("#comp-score");
        og1=element1.innerText;
        og2=element2.innerText;
        element1.innerText="draw";
        element2.innerText="draw";
        setTimeout(() => {
            element1.innerText = og1;
            element2.innerText = og2;
          }, 1000);
    }
    else{
        let userwin=true;
        if(userChoice=="rock"){
            if(compChoice=="paper"){
                userwin=false;
            }
        }
        if(userChoice=="paper"){
            if(compChoice=="scissor"){
                userwin=false;
            }
        }
        if(userChoice=="scissor"){
            if(compChoice=="rock"){
                userwin=false;
            }
        }
        if(userwin){
            userScore++;
            document.querySelector("#user-score").innerText=userScore;
        }
        else{
            compScore++;
            document.querySelector("#comp-score").innerText=compScore;
        }
    }
    
}
const genComp=()=>{
    let arr=["rock","paper","scissor"];
    let compCh=arr[Math.floor(Math.random()*3)];
    return compCh;
}
