import {Controller} from "stimulus";

export default class extends Controller {
    static targets = ['name'];

    connect() {
        // Show name of todo
        this.nameTarget.textContent = this.element.dataset.value;
    }
}


