function createNewPatient(){
  var patient_entry = new Array;
  var patient_str = localStorage.getItem('patient1');
  if (localStorage.getItem('patient1') !== null){
    patient_entry = JSON.parse(patient_str);
  }
  else{
    patient_entry.push({'type': 'diet', 'days': []},
                     {'type': 'alcohol', 'days':[]},
                     {'type': 'prescription', 'days':[]},
                     {'type': 'hospital_visit', 'days':[]},
                     {'type': 'vaccine_record', 'days':[]})
    localStorage.setItem('patient1', JSON.stringify(patient_entry));
      }

  return patient_entry
}

function addNewRecord(type, content){
  var unparsed_patient_entry = localStorage.getItem('patient1');
  var patient_entry = JSON.parse(unparsed_patient_entry);
  var today = moment().format('LL')
  for(var i = 0; i<5; i++){
    debugger;
    if(patient_entry[i].type === type){
      //Check if the first object in the content array is the same as today's date. If yes add record, else create new day
      if(patient_entry[i].days.length !== 0){
        if(patient_entry[i].days[0].day === today){
          patient_entry[i].days[0].content.push(content)
          localStorage.setItem('patient1', JSON.stringify(patient_entry));
          break;
      }
    }
      else{
        createNewDay(type,content, i);
        break;
      }
    }
  }
}

function createNewDay(type, content, index){
  var unparsed_patient_entry =  localStorage.getItem('patient1');
  var patient_entry = JSON.parse(unparsed_patient_entry);
  var today = moment().format('LL');
  patient_entry[index].days.push({'day': today, 'content': [content]});
  localStorage.setItem('patient1', JSON.stringify(patient_entry));
}
