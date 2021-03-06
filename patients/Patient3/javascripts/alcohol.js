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
    addNewRecord('alcohol', createTask)
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    (todos[1].days[0].content).splice(id, 1);
    localStorage.setItem('patient3', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();
    debugger;
    if(todos[1].days.length === 0){
      return;
    }
    var today = moment().format('LL');
    var html = '<div>' + today + '<ul class="collection border-none">';
    var tasks = todos[1].days[0].content
    for(var i=0; i<tasks.length; i++) {
        html += '<button class="remove" id="' + i  + '">x</button><li class="collection-item avatar list-items">' + tasks[i].time + " " + tasks[i].task + '</li><br />';
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
