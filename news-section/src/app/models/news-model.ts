export class News {
    id: number;
    title: string;
    previewImageUrl: string;
    article: string;

    constructor(id: number, title: string, previewImageUrl: string, article: string) {
        this.id = id;
        this.title = title;
        this.previewImageUrl = previewImageUrl;
        this.article = article;
    }
}
