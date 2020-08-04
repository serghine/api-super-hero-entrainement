'use strict';
  
const forms = document.querySelectorAll('form');
//const inputhero1=document.getElementById('inputhero1');
//const inputhero2=document.getElementById('inputhero2');

//console.log(forms)
forms.forEach(function(form){
 
    form.addEventListener('submit',function(e){
       e.preventDefault()
       const hero=form.querySelector('input').value
      // console.log(hero)
       
     // console.log(hero)

    fetch(`/hero?search=${hero}`)
                      .then(function(response){ return response.json()})                    
                      .then(function(data){console.log(data)})
                      .catch(function(err){console.log("error:",err)})


    })
    
})