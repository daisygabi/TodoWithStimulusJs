import {Controller} from "stimulus";
import {EMPTY_STRING, TODO_STORAGE_KEY} from "../common";

export default class extends Controller {
    static targets = ['name', 'show', 'template'];
    itemsToAdd = [];

    connect() {
        this.loadTodoList();
    }

    appendTodo(todoValue) {
        let todo = document.importNode(this.templateTarget.content, true);
        todo.querySelector('li').dataset.value = todoValue;
        this.showTarget.appendChild(todo);
    }

    loadTodoList() {
        let data = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY));
        if (data) {
            let _this = this;
            data.forEach(function (todo) {
                _this.appendTodo(todo);
            })
        }
    }

    add() {
        let todoToAdd = this.nameTarget.value;
        this.itemsToAdd.push(todoToAdd);

        let existingData = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "[]");
        if (existingData === []) {
            localStorage && localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(this.itemsToAdd));
        } else {
            this.itemsToAdd.push(...existingData);
            localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(this.itemsToAdd));
        }
        this.itemsToAdd = [];
        this.clearInput();

        this.appendTodo(todoToAdd);
    }

    clearInput() {
        this.nameTarget.value = EMPTY_STRING;
    }

    get name() {
        return this.nameTarget.value;
    }
}
