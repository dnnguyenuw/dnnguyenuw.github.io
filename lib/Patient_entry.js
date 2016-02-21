class patient_entry{

  constructor(){
    this.types = new Array[6]
  }

  get_types(){
    var patient_entry = new Array;
    if (localStorage.getItem('todo') !== null){
      patient_entry = JSON.parse(todos_str);
    }
    return patient_entry
  }


  set_types(type){
    var days = new Array[]
    type_objects = {types: type , days}
    return type_objects
  }

  remove_types

  get_content

  //TODO - 
    
  
  class new_day(){
    return
  }
  

  }

}
