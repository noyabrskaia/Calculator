function insert(nmbrs) {
    document.querySelector('.output').value = document.querySelector('.output').value+nmbrs;
  }
  
 function equal() {
    let expresion = document.querySelector('.output').value;
  
    if(expresion) {
      document.querySelector('.output').value = eval(document.querySelector('.output').value);
    }
  } 
  
  function clean() {
    document.querySelector('.output').value="";
  }