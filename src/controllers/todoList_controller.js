import {Controller} from "stimulus";
import {TODO_STORAGE_KEY} from "../common";

export default class extends Controller {
    static targets = ['item'];

    initialize(key) {
        this.allItems = localStorage && JSON.parse(localStorage.getItem(TODO_STORAGE_KEY));
    }

    connect() {
        this.allItems.map(item => {
                let li = document.createElement('li');
                li.classList.add('flex', 'm-5', 'p-2', 'items-start', 'content-start', 'bg-red-100');
                li.innerHTML += item;
                this.itemTarget.appendChild(li);
            }
        );
    }
}
