import { BaseComponent } from "../../component.js";

export class TextInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
        <div class="text__section">
            <div class="form__container">
                <label for="title" class="title">Title</label>
                <input type="text" id="title"/>
            </div>
            <div class="form__container">
                <label for="text" class="text">Text</label>
                <textarea rows="3" id="text"/></textarea>
            </div>
        </div>
        `)
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }

    get text(): string {
        const element = this.element.querySelector('#text')! as HTMLTextAreaElement;
        return element.value;
    }
}