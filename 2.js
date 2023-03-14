var arr=[1,2,3]

function email(usr){
    var a=usr.split("@");
  if(usr.endsWith("@darwinbox.io")){
    return true
  }
  else{
    return false
  }
}
console.log(email("sara@darwinbox.io"));
arr=[1,2,3]
arr.forEach(function (ele,key){
    console.log(ele,key);
})
d={
    a:1,b:2,c:function(){
        console.log("hello this is ");
    }
}
d.c();
for(var i in arr){
   // console.log(i)
}
for(var a of arr){
    console.log(a);
}

const ar=function(x){
    console.log("hello"+x);
}

a=[{empid:1,ename:"likhith",level:5},{empid:2,ename:"sara",level:2},{empid:3,ename:"vishwak",level:5},{empid:4,ename:"vishal",level:5},{empid:5,ename:"likhit",level:0},{empid:6,ename:"likki",level:2}]

for(var k of a){
   
      if(k['level']>4){
        console.log(k['ename']);
      }
    }

const e=document.querySelector("#name");
console.log(e)