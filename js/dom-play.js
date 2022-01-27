    
    const spans = document.querySelectorAll('div#play span');

    console.log(spans);

    for(const mySpan of spans){
      mySpan.addEventListener('click',function(ev){
       // alert(mySpan.dataset.actor);
       highLightActor(mySpan.dataset.actor);
      });
      
    }

    function highLightActor(myActor){
      
      for(const mySpan of spans){
    
        if(myActor == mySpan.dataset.actor){
          mySpan.style.backgroundColor = 'yellow';
        }else{
          mySpan.style.backgroundColor = 'white';
        }

      
      } 
    
    }   