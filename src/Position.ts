export class Position{

    constructor(private x: number, private y: number, private content: "x" | "o" | undefined){

    }

    setContent(content: "x" | "o"): void{
        this.content = content;
    }

    getX(): number{
        return this.x;
    }

    getY(): number{
        return this.y;
    }

    getContent(): string | undefined{
        return this.content;
    }
}