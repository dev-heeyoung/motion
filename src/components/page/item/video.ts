import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`
        <section class="video">
            <h2 class="video__title"></h2>
            <div class="video__container"><iframe class="video__content"></iframe></div>
        </section>
        `)

        const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
        titleElement.textContent = title;

        const contentElement = this.element.querySelector(".video__content")! as HTMLIFrameElement;
        contentElement.src = this.converURL(url);
    }

    private converURL(url: string): string {
        const startIdx = url.search('v=') + 2;
        const endIdx = url.search('&');
        const videoId = url.slice(startIdx, endIdx);
        console.log(videoId);

        if(videoId) {
            return `https://www.youtube.com/embed/${videoId}`
        }
        return url;
    }
}