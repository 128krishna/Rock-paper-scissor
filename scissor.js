let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice"); 
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#Usercard");
const compScorepara=document.querySelector("#Computercard");
const restart=document.querySelector("#restart");

//get user choice.
const reset =()=>{
    userscore=0;
   compscore=0;
   userScorepara.innerText="0";

   compScorepara.innerText="0"; 
   msg.innerText="Play your move";
   msg.style.backgroundColor="#081b31";

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
         playgame(userchoice);
    });
});
const draw =()=>{
  
   msg.innerText="Game was Draw. Play again.";
   msg.style.backgroundColor="#081b31";
}
const  showWinner = (userWin,computerchoice1,Userchoice)=>{
    if(userWin){
     
      userscore++;
      userScorepara.innerText=userscore;
      msg.innerText=`You win! Your${Userchoice} beats ${computerchoice1}`;
      msg.style.backgroundColor="green";
    }
    else{
     
      compscore++;
      compScorepara.innerText=compscore;
      msg.innerText=`You Lost.  ${computerchoice1} beats your ${Userchoice}`;
      msg.style.backgroundColor="red";
    }
}

const playgame=(Userchoice)=>{
  
   const computerchoice1=computerchoice();
  
   if(Userchoice === computerchoice1 ){
      draw();
   }
   else{
      let userWin=true;
      if(Userchoice ==="rock")
         {
            userWin = computerchoice1 ==="paper" ? false : true;
         }
         else if(Userchoice === "paper"){
            userWin = computerchoice1 ==="scissor"?false : true;
         }
         else{
            userWin = computerchoice1 ==="rock"?false:true;
         }
         showWinner(userWin,computerchoice1,Userchoice);
   }
}
//for computer choice.
const computerchoice=()=>{
   const option=["rock","paper","scissor"]; 
   const comid= Math.floor(Math.random()*3);
   return option[comid];
}
restart.addEventListener("click",reset);