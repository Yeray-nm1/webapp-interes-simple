(function(){
    
  //comment test 23
  'use strict';
  var nselect = document.querySelector('select');
  const nprogress = document.getElementById('ratebar');
  var nperc = document.getElementById('percent');
  nperc.innerHTML = `${parseFloat((nprogress.value)/100)}%`;
  var nbtn = document.querySelector('button');

  nprogress.oninput = function(){
      nperc.innerHTML = `${parseFloat((this.value)/100)}%`;
  }

  for(let i=0; i<10; i++){
      var nYears = document.createElement('option');
      nYears.setAttribute('value', i);
      nYears.innerText = `${i+1}`;
      nselect.appendChild(nYears);
  }

  nbtn.addEventListener('click', function(event){
      event.preventDefault();
      const nprogress = document.getElementById('ratebar');
      var deposit = document.getElementById('amount');
      const amount = (deposit.value*(parseFloat(nprogress.value)/100)*(parseInt(nselect.value)+1))/100;
      var paragh = document.querySelectorAll('#answer p');
      var prg = [];
      var txt;

      if (deposit.value < 1) alert("Enter a positive number");
      else{
          for (let i=0; i<paragh.length; i++){
              switch(i){
                  case 0: 
                      txt = ` ${deposit.value},`;
                      break;
                  case 1:
                      txt = ` ${parseFloat(nprogress.value)/100}%,`;
                      break;
                  case 2:
                      txt = ` ${amount},`;
                      break;
                  case 3:
                      txt = ` ${new Date().getFullYear()+parseInt(nselect.value)+1}`;
                      break;
              }
              prg[i] = document.createElement('span');
              prg[i].textContent = prg[i].textContent + txt;
              paragh[i].appendChild(prg[i]);
              paragh[i].style.display="block";
              paragh[i].style.visibility="visible";
          }
      }
      
  });

})();