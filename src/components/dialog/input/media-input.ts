import { BaseComponent } from "../../component.js";

export class MediaInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div class="media__section">
            <div class="form__container">
                <label for="title" class="title">Title</label>
                <input type="text" id="title"/>
            </div>
            <div class="form__container">
                <label for="url" class="url">URL</label>
                <input type="text" id="url"/>
            </div>
        </div>
        `)
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }

    get url(): string {
        const element = this.element.querySelector('#url')! as HTMLInputElement;
        return element.value;
    }
}