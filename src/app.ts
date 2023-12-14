interface TodoInterface {
    id: number,
    title: string,
    status: boolean
}

class Todo implements TodoInterface {
    id: number;
    title: string;
    status: boolean;

    constructor(todo: TodoInterface) {
        this.id = todo.id;
        this.title = todo.title;
        this.status = todo.status;
    }
}

class UI {
    addTodoToList(todo: TodoInterface) {
        const list = document.getElementById('todo-list')!;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${todo.id}</th>
        <td>${todo.title}</td>
        <td><input type="checkbox" ${todo.status ? "checked" : ""} class="form-check-input"></td>
        <td><button class="btn btn-sm btn-outline-danger" onclick="ui.removeTodo(event)">delete</button></td>
        `;
        list.appendChild(tr);
    }
}
const form = document.getElementById('todo-form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const titleError = document.getElementById('title-error') as HTMLParagraphElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    if (title.value === '') {
        titleError.innerHTML = 'Title is required...'

    } else {
        titleError.innerHTML = ''
        console.log(title.value);
        const todoObj: TodoInterface = {
            id: Math.round(Math.random() * 100),
            title: title.value.trim(),
            status: false
        }
        const todo = new Todo(todoObj)
    const ui = new UI()
    ui.addTodoToList(todo)
    title.value = ''

    }

})
