$(document).ready(function(){
        $.get("https://reqres.in/api/users?page=2",function(x){
            for (const i of x['data']) {
                //const div_col=document.createElement("div")
                const div_col=$('<div></div>').addClass("col my-2")
                //div_col.className="col my-2"
                 // const div_card=document.createElement('div');
                  const div_card=$('<div></div>').addClass("card")
                  div_card.css("width: 18rem;")
                 // div_card.className=`card`
                  //div_card.style="width: 18rem;"
                  //const im=document.createElement("img")
                  //img.className=`card-img-top`
                  //img.src=i.avatar
                  const img=$(`<img>`).addClass('card-img-top')
                  img.attr("src",i.avatar)
                  div_card.append(img)
                  const div_body=$('<div></div>').addClass('card-body')
                  //div_body.className="card-body"
                  const head=$('<h5></h5>').html(`<b>${i.last_name} ${i.first_name}</b>`)
                  div_body.append(head)
                 // head.innerHTML=`<b>${i.last_name} ${i.first_name}</b>`
                  const para=$('<p></p>').html(`${i.email} <br/> id - ${i.id}`)
                  div_body.append(para)
                 // para.innerHTML=`${i.email}`
                 // const par=document.createElement('p')
               //par.innerHTML=`id - ${i.id}`
           
              // div_body.appendChild(head)
               //div_body.appendChild(para)
               //div_body.appendChild(par)
              // div_card.appendChild(div_body)
              $(div_card).append(div_body)
               div_col.append(div_card)
               $(isee).append(div_col)
         }
         
        })
       
          
      
       
    
})