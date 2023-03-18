//create a form
//submit 20 times
//create report analysis on category and subcategory

id=1
p=[]
//window.localStorage.clear()
function add(){
    var form=document.forms['my_form'];
    prod={categeory:'',sub_catogery:'',name:'',price:'',discount:'',id:1}
    prod.categeory=form.categeory.value;
    prod.sub_catogery=form.sub_catogery.value;
    prod.name=form.name.value;
    prod.price=form.price.value;
    prod.discount=form.discount.value;
    id+=1
    p.push(prod)
    var x=JSON.stringify(p)
    window.localStorage.setItem("prouducts",x) 
}

function report(){
    var prod=window.localStorage.getItem("prouducts")
    prod=JSON.parse(prod)
    q={}
      for (const x of prod) {
        var r=x.sub_catogery
        if(!q.hasOwnProperty(x.categeory)){
                temp={}
                temp[`${r}`]=1
                q[`${x.categeory}`]=[temp]
            }
            else{
                q[`${x.categeory}`].find(function(m){
                             if(Object.keys(m)[0]==r){
                                 m[`${r}`]+=1
                             }
                             else{
                                temp1={}
                temp1[`${r}`]=1
               // q[`${x.categeory}`]=[temp]
                                q[`${x.categeory}`].push(temp1)
                             }
                })
                
            }
        
      }
      console.log(q)
      var b=document.getElementById('b')
    for (const key in q) {
      //const div_card=$('<div></div>').addClass('card')
      const div_card=document.createElement("div")
      div_card.className="card"
      div_card.style="width:18rem"
      //div_card.css("width","18rem")
      const div_body=document.createElement("div")
      div_body.className="card-body"
      //const div_body=$('<div></div>').addClass('card-body')
      const h=document.createElement('h5')
      h.className='card-title'
      h.innerHTML=`categeory - ${key}`
      div_body.appendChild(h)
   for (const k of q[key]) {
       const p=document.createElement('p')
       p.innerHTML=`${Object.keys(k)[0]} - ${Object.values(k)[0]}`
       div_body.appendChild(p)
   }
      div_card.appendChild(div_body)
      b.appendChild(div_card)
  }
}
    
/*
         <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/