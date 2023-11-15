const { text } = require("express");

class Shapes {
    // fill;
    // text;
    // textColor;
constructor(fill,textColor,text) {
    this.fill = fill,
    this.text = text,
    this.textColor = textColor
}

setText() {
    return`<text domain-baseline="middle", text-anchor="middle", font-size="50px", font-weight="600" fill="${this.textColor}">${this.text}</text>`;
}

}

class Circle extends Shapes {
    constructor(fill,text,textColor) {
        super(fill, textColor, text);
    }

    renderCircle() {
        return `<svg version="1.1" width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="${this.fill}"></circle>
                    <text x="50" y="50" fill="${this.textColor}">${this.text}</text>
            
                </svg>`
    }
}

class Square extends Shapes {
    constructor(fill,text,textColor) {
        super(fill, textColor, text);
    }

    renderSquare() {
        return `<svg version="1.1" width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="${this.fill}"></rect> 
                    <text x="50" y="50" fill="${this.textColor}">${this.text}</text>
                </svg>
                `
    }
}

class Triangle extends Shapes {
    constructor(fill,text,textColor) {
        super(fill, textColor, text);
    }

    renderTriangle() {
        return `<svg version="1.1" width="450" height="450" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="214,50 300,195 140,200" fill="${this.fill}"></polygon>
                    <text x="200" y="150" fill="${this.textColor}">${this.text}</text>
                    
                </svg>
                `
    }}


    module.exports =  {Shapes, Circle, Square, Triangle}