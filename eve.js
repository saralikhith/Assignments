c=0
function func(){
    alert("button clicked")
}
function onload(){
    c+=1
    if(c%2==0){
        document.getElementById("x").src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    
    }
    else{
    document.getElementById("x").src="https://thumbs.dreamstime.com/b/beautiful-sunset-over-water-tree-silhouette-nature-landscape-amazing-orange-yellow-sky-night-scene-wallpaper-birds-flying-154424473.jpg"
}
}

var b=document.getElementById("btn")
b.addEventListener("click",onload)

function count(a){
  alert(a)
}