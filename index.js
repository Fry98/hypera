let empty = null;

module.exports = function(defVal){
  if(defVal !== undefined){
    empty = defVal;
  }
  return arrayBuilder;
}

function arrayBuilder(...dims){
  let array = [];
  let result;
  for(let i = 0; i < dims[dims.length-1]; i++){
    array.push(empty);
  }
  dimBuilder(array, dims.length-2);
  return result;

  function dimBuilder(filler, index){
    if(index >= 0){
      let dimUp = [];
      for(let i = 0; i < dims[index]; i++){
        
        dimUp.push(filler);
      }
      dimBuilder(dimUp, index-1);
    }
    else{
      result = filler;
    }
  }
}

