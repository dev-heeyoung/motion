import { BaseComponent, Component } from "../component.js";

export interface Composable {
    addChild(child: Component): void;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
    constructor() {
        super(`
        <li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <span class="close">X</span>
            </div>
        </li>
    `)
    }
    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super(`<ul class='page'></ul>`)
    } 
    addChild(section: Component) {
       const item = new PageItemComponent();
       item.addChild(section);
       item.attachTo(this.element, 'beforeend')
    }
}