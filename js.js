
let box=document.getElementsByClassName("cont");
let turn = "X"; 

const changeturn=()=>{
    return turn==="X"?"O":"X";
}

const checkWin=()=>{

    let WIN=[[0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]];


  WIN.forEach(e=>{
   if(box[e[0]].innerHTML===box[e[1]].innerHTML && box[e[1]].innerHTML===box[e[2]].innerHTML && box[e[0]].innerHTML!=="")
   {
     console.log(box[e[0]].innerHTML+" WON");
     alert("player "+box[e[0]].innerHTML+" won");
     window.location.reload();
   }         


 })

}



 Array.from(box).forEach(element=>{
    element.addEventListener('click',()=>{
        element.innerHTML=turn;
        turn=changeturn();
        console.log("clicked");
        checkWin();
    })
 })