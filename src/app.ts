import { Composable, PageComponent, PageItemComponent } from './components/page/page.js'
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { TextInput } from './components/dialog/input/text-input.js';

type InputComponentConstructor<T = MediaInput | TextInput> = {
    new (): T;
}

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, private readonly dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaInput>('image', MediaInput, (input: MediaInput) => new ImageComponent(input.title, input.url))
        this.bindElementToDialog<MediaInput>('video', MediaInput, (input: MediaInput) => new VideoComponent(input.title, input.url))
        this.bindElementToDialog<TextInput>('note', TextInput, (input: TextInput) => new NoteComponent(input.title, input.text))
    }
    
    private bindElementToDialog<T extends MediaInput | TextInput>(
        type: string, 
        InputComponent: InputComponentConstructor<T>,
        makeComponent: (input: T) => Component
        ): void {
        const elementBtn = document.querySelector(`#${type}`)! as HTMLButtonElement;
        
        elementBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new InputComponent();
            dialog.addChild(inputSection);
            dialog.attachTo(this.dialogRoot);

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            })

            dialog.setOnSubmitListener(() => {
                const image = makeComponent(inputSection)
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            })           
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);