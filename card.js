var ele=document.getElementById('isee')
function api(){
    const http=new XMLHttpRequest();
    http.open('GET',"https://reqres.in/api/users?page=2")
    http.onload=function(){
       var x= JSON.parse(http.responseText)
       console.log(x)
       for (const i of x['data']) {
        const div_col=document.createElement("div")
        div_col.className="col my-2"
          const div_card=document.createElement('div');
          div_card.className=`card`
          div_card.style="width: 18rem;"
          const img=document.createElement("img")
          img.className=`card-img-top`
          img.src=i.avatar
          const div_body=document.createElement("div")
          div_body.className="card-body"
          const head=document.createElement("h5")
          head.innerHTML=`<b>${i.last_name} ${i.first_name}</b>`
          const para=document.createElement('p')
          para.innerHTML=`${i.email}`
          const par=document.createElement('p')
          par.innerHTML=`id - ${i.id}`
          div_card.appendChild(img)
          div_body.appendChild(head)
          div_body.appendChild(para)
          div_body.appendChild(par)
          div_card.appendChild(div_body)
          div_col.appendChild(div_card)
          ele.appendChild(div_col)
    }
    }
    http.send()
   
}
/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/