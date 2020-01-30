import {Controller} from "stimulus";

let Datastore = require('nedb');

export default class extends Controller {
    static targets = ['item'];
    allItems = new Datastore();

    initialize() {
        this.allItems = {
            getAllData() {
                return ['This is your first long task description', 'Create a todo app with Stimulus Js and set a deadline for this work.', 'Share the project publicly on Github']
            }
        };
    }

    connect() {
        this.allItems.getAllData().map(item => {
                let li = document.createElement('li');
                li.classList.add('flex', 'm-5', 'p-2', 'items-start', 'content-start', 'bg-red-100');
                li.innerHTML += item;
                this.itemTarget.appendChild(li);
            }
        );
    }
}
