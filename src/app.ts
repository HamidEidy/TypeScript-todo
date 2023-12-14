import UI from "./Classes/UI";
import Store from "./Classes/Store";
import Todo from "./Classes/Todo";
import { TodoInterface } from "./Interfaces/TodoInterface";
const form = document.getElementById('todo-form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const titleError = document.getElementById('title-error') as HTMLParagraphElement;
const ui = new UI()
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

        ui.addTodoToList(todo)
        Store.addTodo(todo)
        title.value = ''

    }

});
(window as any).changeStatusTodo = (id: number) => {
    Store.changeStatusTodo(id)
}

(window as any).removeTodo = (e: Event,id: number) => {
    ui.removeTodo(e,id)
}

document.addEventListener('DOMContentLoaded', Store.displayTodos)
