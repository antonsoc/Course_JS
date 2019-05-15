class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.textAlign = textAlign;
    }
    createElement() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    }
}

let ex = new Options(20, 30, 'red', 12, 'center');
console.log(ex);

ex.createElement();