let empty = null;

module.exports = function(defVal){
  if(defVal !== undefined){
    empty = defVal;
  }
  return arrayBuilder;
}

function arrayBuilder(...dims){
  if(dims.length === 0){
    throw new Error('Missing arguments');
  }
  return dimBuilder(0);
  function dimBuilder(index){
    let arr = [];
    if(index < dims.length-1){
      for(let i = 0; i < dims[index]; i++){
        arr.push(dimBuilder(index+1));
      }
    }
    else{
      for(let i = 0; i < dims[index]; i++){
        arr.push(empty);
      }
    }
    return arr;
  }
}

