import { Composable, PageComponent, PageItemComponent } from './components/page/page.js'
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';


class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Testing Image', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const note = new NoteComponent('title', 'body');
        this.page.addChild(note);

        const video = new VideoComponent('video title', 'https://www.youtube.com/watch?v=JP3R00tCL4I&ab_channel=StudySonicFocus')
        this.page.addChild(video);

        const imageBtn = document.querySelector('#image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            console.log('open')
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            })

            dialog.setOnSubmitListener(() => {
                // add submit action
                dialog.removeFrom(document.body);
            })

            dialog.attachTo(document.body) 
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);