var obj=document.getElementsByClassName("btn")
var x=false;
var a1=0
var b1=0
var ind
var p=[0,0,0,0,0,0,0,0,0]
function validate(p){
   if(p[0]==p[1] && p[1]==p[2]){
     return p[0]
   }
   if(p[3]==p[4] && p[4]==p[5]){
    return p[3]
  }
  else if(p[6]==p[7] && p[7]==p[8]){
    return p[6]
  }
  else if(p[0]==p[3] && p[3]==p[6]){
    return p[0]
  }
  else if(p[1]==p[4] && p[4]==p[7]){
    return p[1]
  }
  else if(p[2]==p[5] && p[5]==p[8]){
    return p[2]
  }
  else if(p[0]==p[4]&& p[4]==p[8]){
    return p[0]
  }
  else if(p[2]==p[4] && p[4]==p[6]){
    return p[2]
  }
  else{
    return false
  }
 
}
function reset(){
  p=[0,0,0,0,0,0,0,0,0]
  for(var i=0;i<9;i++){
    document.getElementById(`${i}`).innerText=""
    obj[i].addEventListener("click",myfunc)
  }

}
function myfunc(){
    index=event.target.id
   // console.log(event,ind)
        if(x==false){
           
            p[index]='X'
            event.target.innerHTML=`<h3 class="text-white">X</h3>`
            x=true
        
        }
        else{
            event.target.innerHTML=`<h3 class="text-white">O</h3>`
            p[index]='O'
            x=false

        }
        var l=validate(p)
        console.log(p)
        if(l=='X'){
            document.getElementById("p").innerHTML=`<h1 class="text-white bg-primary">won by player-1</h1>`;
            a1+=1
            document.getElementById("x").innerHTML=a1;
            reset()
            console.log("hello",a1)
            
        }     
        if( l=='O'){
            b1+=1
            document.getElementById("y").innerHTML=b1;
            document.getElementById("p").innerHTML=`<h3 class="text-white bg-primary">won by player-2</h3>`;
            reset()
            console.log(b1)
        }
      
        event.target.removeEventListener("click",myfunc)
        
}
for (let index = 0; index < obj.length; index++) {  
    ind=index  
    console.log(ind,index)
    obj[index].addEventListener("click",myfunc)
  
}
//document.getElementById("p").innerHTML=`<h1 class="text-white bg-primary">match tie</h1>`;


