export class Content {
  private readonly content: string;

  get value() {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 1 && content.length <= 300;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
