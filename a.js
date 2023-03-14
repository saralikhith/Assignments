function validate(){
  
    var form=document.forms.form;
    var x=form.name.value;
    var user={}
    if(x.length<6){
    
        document.getElementById("namet").innerHTML=`
        <p class='bg-danger text-white'>username should have minimum 6 characters</p>
        `
    }
    else{
        document.getElementById("namet").innerHTML=``
            user['name']=x;
    }
    var em=form.email.value;
    var at= em.indexOf("@");
    var dot = em.indexOf(".");
    if(at < 1 || dot <= at + 2 || dot==em.length-1){
        document.getElementById("em").innerHTML=`
        <p class='bg-danger text-white'>enter valid email</p>
        `
    }
    else{document.getElementById("em").innerHTML=``
           user['email']=em;
    }
    var pa=form.password.value;
    if(pa.length<6){
        document.getElementById("pat").innerHTML=`
        <p class='bg-danger text-white'>password should have minimum 6 characters</p>
        `
    }
    else{
        document.getElementById("pat").innerHTML=``
        user.password=pa;
    }
    user.country=form.country.value;
    if(form.male.checked){
        user.gender='male';
    }
    else{
        user.gender='female';

    }
    if(!user.name || !user.email || !user.password){
        window.alert("please enter valid details")
    }
    else{
        console.log(user)
    }



       
    
}

var x=document.getElementById("ename")
document.addEventListener("change",function(event){
     console.log("hai")
})