import {Controller} from "stimulus";

export default class extends Controller {
    static targets = ['item'];

    initialize() {
        this.allItems = {
            getAllData() {
                return [{_id: 'id11', name: 'This is your first long task description'},
                    {_id: 'id12', name: 'Create a todo app with Stimulus Js and set a deadline for this work.'},
                    {_id: 'id13', name: 'Share the project publicly on Github'}]
            }
        };
    }

    connect() {
        this.allItems.getAllData().map(item => {
                let li = document.createElement('li');
                li.classList.add('flex', 'm-5', 'p-2', 'items-start', 'content-start', 'bg-red-100');
                li.innerHTML += item.name;
                this.itemTarget.appendChild(li);
            }
        );
    }
}
