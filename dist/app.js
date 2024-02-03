import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { VideoComponent } from './components/page/item/video.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Testing Image', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('title', 'body');
        note.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('video title', 'https://www.youtube.com/watch?v=JP3R00tCL4I&ab_channel=StudySonicFocus');
        video.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
