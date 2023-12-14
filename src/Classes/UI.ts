import { TodoInterface } from "../Interfaces/TodoInterface";
import Store from "./Store";
class UI {
    addTodoToList(todo: TodoInterface) {
        const list = document.getElementById("todo-list")!;

        const tr = document.createElement("tr");
        tr.innerHTML = `
                            <th>${todo.id}</th>
                            <td>${todo.title}</td>
                            <td><input type="checkbox" ${
                                todo.status ? "checked" : ""
                            } class="form-check-input" onclick="changeStatusTodo(${
            todo.id
        })" ></td>
                            <td><button class="btn btn-sm btn-outline-danger" onclick="removeTodo(event, ${
                                todo.id
                            })">delete</button></td>
                            `;

        list.appendChild(tr);
    }


     removeTodo(e: Event, id: number) {
        const element = e.target as HTMLElement;

        element.parentElement!.parentElement!.remove();

        Store.removeTodo(id)
    }

}

export default UI;