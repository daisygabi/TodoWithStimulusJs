import { Controller } from "stimulus";
let Datastore = require('nedb');
const EMPTY_STRING = "";

export default class extends Controller {
    static targets = ['name'];
    todoItems = new Datastore();
    itemsToAdd = [];

    connect() {
        this.itemsToAdd = [];
    }

    add() {
        this.itemsToAdd.push(this.name);
        this.todoItems.insert(this.itemsToAdd, function(err, docs) {
            docs.forEach(function(d) {
                console.log('Added item:', d);
            });
        });
        this.clearInput();
    }

    clearInput() {
        this.nameTarget.value = EMPTY_STRING;
    }

    get name() {
        return this.nameTarget.value;
    }
}
