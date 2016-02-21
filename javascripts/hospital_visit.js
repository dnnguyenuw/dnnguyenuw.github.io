function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('hospital_visit');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var now = moment().format('LT');
    var todos = get_todos();
    var createTask = {'task': task, 'time': now}
    todos.push(createTask);
    localStorage.setItem('hospital_visit', JSON.stringify(todos));
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('hospital_visit', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();
    var today = moment().format('LL');
    var html = '<div>' + today + '<ul class="collection border-none">';
    for(var i=0; i<todos.length; i++) {
        html += '<button class="remove" id="' + i  + '">x</button><li class="collection-item avatar list-items">' + todos[i].time + " " + todos[i].task + '</li><br />';
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
