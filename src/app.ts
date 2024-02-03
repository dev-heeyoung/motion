import { Composable, PageComponent, PageItemComponent } from './components/page/page.js'
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { TextInput } from './components/dialog/input/text-input.js';


class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        // image
        const imageBtn = document.querySelector('#image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })           
        })

        // video
        const videoBtn = document.querySelector('#video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })

            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(inputSection.title, inputSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            })           
        })

         // text
         const noteBtn = document.querySelector('#note')! as HTMLButtonElement;
         noteBtn.addEventListener('click', () => {
             const dialog = new InputDialog();
             const inputSection = new TextInput();
             dialog.addChild(inputSection);
             dialog.attachTo(dialogRoot);
 
             dialog.setOnCloseListener(() => {
                 dialog.removeFrom(dialogRoot);
             })
 
             dialog.setOnSubmitListener(() => {
                 const note = new NoteComponent(inputSection.title, inputSection.text);
                 this.page.addChild(note);
                 dialog.removeFrom(dialogRoot);
             })           
         })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);