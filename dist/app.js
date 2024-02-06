import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { TextInput } from './components/dialog/input/text-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('image', MediaInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('video', MediaInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('note', TextInput, (input) => new NoteComponent(input.title, input.text));
    }
    bindElementToDialog(type, InputComponent, makeComponent) {
        const elementBtn = document.querySelector(`#${type}`);
        elementBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new InputComponent();
            dialog.addChild(inputSection);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeComponent(inputSection);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);
