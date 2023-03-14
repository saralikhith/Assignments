let arr=[{empid:1,ename:"likhith",level:5,salary:1000},{empid:2,ename:"sara",level:2,salary:2000},{empid:3,ename:"vishwak",level:5,salary:2000},{empid:4,ename:"vishal",level:5,salary:50000},{empid:5,ename:"likhit",level:0,salary:6000},{empid:6,ename:"likki",level:2,salary:7000}]
function delemp(arr,empid){
       for(let a=0;a<arr.length;a++){
        if (arr[a].empid==empid){  
           arr.splice(a,1)       
        }
       }
       console.log(arr)
}
function addemp(arr,obj){
      for(let a of arr){
        
         if(a.empid===obj.empid){
            console.log("alredy employee exits")
            return
         }
         
      }
      arr.unshift(obj)
      console.log(arr)
}

function filter(a){
   for(let k of a){
   
      if(k['level']>4){
        console.log(k['ename']);
      }
    }
}
 function update(arr,empid,what,x){

  
            console.log("successfully updated")
          
   
   console.log(arr)
 }


addemp(arr,{empid:8,ename:"likhith",level:5,salary:1000})
//delemp(arr,5)
//filter(arr)
//update(arr,6,'ename',"saralikhith")

/*
function change(){
   var x=document.getElementById("x")
   alert("color is beingchanged")
   x.style="color:pink"
}
*/
function change(){
   var x=document.getElementsByClassName("form-control")
   console.log(x);
   x[0].innerHTML='sara';
}