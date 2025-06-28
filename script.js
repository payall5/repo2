let yourChoice='';
let compChoice='';
let yourChoiceNo=JSON.parse(localStorage.getItem("compChoice"));
let compChoiceNo=JSON.parse(localStorage.getItem("yourChoice"));
document.querySelector("#rock").addEventListener("click",function(){
    yourChoice='Rock';
    compChoice=generateCompChoice();
    document.querySelector('.wins').innerText=getResult();
    setLocalStorage();
});
document.querySelector("#paper").addEventListener("click",function(){
    yourChoice='Paper';
    compChoice=generateCompChoice();
    document.querySelector('.wins').innerText=getResult();
    setLocalStorage();
});
document.querySelector("#scissors").addEventListener("click",function(){
    yourChoice='Scissors';
    compChoice=generateCompChoice();
    document.querySelector('.wins').innerText=getResult();
    setLocalStorage();
});

function generateCompChoice(){
    let ran=Math.random()*3;
    if(ran>0 & ran<=1){
        return 'Rock';
    }
    else if(ran>1 & ran<=2){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

function getResult(){
    if(yourChoice===compChoice){
        return`It's a Tie`; 
    }
    else if(yourChoice==='Rock'){
        if(compChoice==='Paper'){
            compChoiceNo++;
            document.querySelector('#comp-score').innerText=compChoiceNo;
            return `${compChoice} bets ${yourChoice}`;
        }
        else{
            yourChoiceNo++;
            document.querySelector('#your-score').innerText=yourChoiceNo;
            return `${yourChoice} bets ${compChoice}`;
        }
    }
    else if(yourChoice==='Paper'){
        if(compChoice==='Rock'){
            yourChoiceNo++;
            document.querySelector('#your-score').innerText=yourChoiceNo;
            return `${yourChoice} bets ${compChoice}`;
        }
        else{
            compChoiceNo++;
            document.querySelector('#comp-score').innerText=compChoiceNo;
            return `${compChoice} bets ${yourChoice}`;
        }
    }
    else{
        if(compChoice==='Paper'){
            yourChoiceNo++;
            document.querySelector('#your-score').innerText=yourChoiceNo;
            return `${yourChoice} bets ${compChoice}`;
        }
        else{
            compChoiceNo++;
            document.querySelector('#comp-score').innerText=compChoiceNo;
            return `${compChoice} bets ${yourChoice}`;
        }
    }
}
document.querySelector('.content').addEventListener("click",function(){
    compChoiceNo=0;
    yourChoiceNo=0;
    localStorage.removeItem("compChoice");
    localStorage.removeItem("yourChoice");
    document.querySelector('#your-score').innerText=yourChoiceNo;
    document.querySelector('#comp-score').innerText=compChoiceNo;
    document.querySelector(.wins).innerText=`Undefined choices`;
})
function setLocalStorage(){
    localStorage.setItem("compChoice",JSON.stringify(compChoiceNo));
    localStorage.setItem("yourChoice",JSON.stringify(yourChoiceNo));
}
