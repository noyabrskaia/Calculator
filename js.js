function insert(nmbrs) {
    document.querySelector('.output').value = document.querySelector('.output').value+nmbrs;
  }
  
  function clean() {
    document.querySelector('.output').value="";
  }

  function back() {
    let exp = document.querySelector('.output').value;
    document.querySelector('.output').value = exp.substring (0, exp.length-1);
  } 

 function equal() {
    let expresion = document.querySelector('.output').value;
  
    if(expresion) {
      document.querySelector('.output').value = eval(expresion);
    }
  } 

 