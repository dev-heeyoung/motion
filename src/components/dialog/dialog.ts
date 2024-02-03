import { BaseComponent, Component } from "../component.js";
import { Composable } from "../page/page.js";

type onListener = () => void;


export class InputDialog extends BaseComponent<HTMLElement> implements Composable { 
    closeListener?: onListener;
    submitListener?: onListener;

    constructor() {
        super(`
        <section class="dialog">
            <button class="close">X</button>
            <div id="dialog__body"></div>
            <button class="dialog__submit">ADD</button>
        </section>
        `)

        const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }

        const submitBtn = this.element.querySelector(".dialog__submit")! as HTMLButtonElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
    }
    setOnCloseListener(listener: onListener) {
        this.closeListener = listener
    }

    setOnSubmitListener(listener: onListener) {
        this.submitListener = listener
    }

    addChild(child: Component): void {
        const dialogBody = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(dialogBody);

    }
}