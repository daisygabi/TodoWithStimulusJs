import { Controller } from "stimulus";
import {EMPTY_STRING, TODO_STORAGE_KEY} from "../common";

export default class extends Controller {
    static targets = ['name'];
    itemsToAdd = [];

    connect() {
        this.itemsToAdd = [];
    }

    add() {
        this.itemsToAdd.push(this.name);
        localStorage && localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(this.name));
        this.clearInput();
    }

    clearInput() {
        this.nameTarget.value = EMPTY_STRING;
    }

    get name() {
        return this.nameTarget.value;
    }
}
