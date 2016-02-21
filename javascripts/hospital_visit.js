function get_todos() {
    var todos = createNewPatient();
    console.log("IN TODOS")
    console.log(todos);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    document.getElementById('task').value = ""
    var now = moment().format('LT');
    var todos = get_todos();
    var createTask = {'task': task, 'time': now}
    addNewRecord('hospital_visit', createTask)
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    (todos[3].days[0].content).splice(id, 1);
    localStorage.setItem('patient', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();
    debugger;
    if(todos[3].days.length === 0){
      return;
    }
    var today = moment().format('LL');
    var html = '<div>' + today + '<ul class="collection border-none">';
    var tasks = todos[3].days[0].content
    for(var i=0; i<tasks.length; i++) {
        html += '<button class="remove" id="' + i  + '">x</button><li class="collection-item avatar list-items" style="min-height: 30px !important;padding-left: 20px !important;display: inline-flex;border-bottom: none">' + tasks[i].time + " " + tasks[i].task + '</li><br />';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
