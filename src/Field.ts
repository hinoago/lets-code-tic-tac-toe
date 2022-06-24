import { Position } from "./Position";

export class Field{
    field: Array<Position> = [];
    moves: number = 0;

    constructor(){
        const $field: HTMLDivElement = document.querySelector("#field")!;
      
        let shape = "O";
        let x = 0;
        let y = 0;
      
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
            const position = new Position(x, y, "blank");
            this.field.push(position);

            const area = document.createElement("div");
            area.className = "area";
            area.style.left = x*100+"px";
            area.style.top = y*100+"px";
        
            if(y == 0 || y == 1){
                area.style.borderBottom = "5px solid black";
            }
            if(x == 0 || x == 1){
                area.style.borderRight = "5px solid black"
            }
        
            area.addEventListener("click", () =>{
                if(area.innerHTML != ""){
                    return;
                }

                this.moves++;
        
                const posX = parseInt(area.style.left.substring(0, area.style.left.indexOf("px")))/100;
                const posY = parseInt(area.style.top.substring(0, area.style.top.indexOf("px")))/100;

                if(shape == "O"){
                    this.field.find(pos => pos.getX() == posX && pos.getY() == posY)?.setContent("o");
                    area.innerHTML = "<p>O</p>";
                    shape = "X";
                }else{
                    this.field.find(pos => pos.getX() == posX && pos.getY() == posY)?.setContent("x");
                    area.innerHTML = "<p>X</p>"
                    shape = "O";
                }
                console.log(this.field.find(pos => pos.getX() == posX && pos.getY() == posY));
                try{
                    this.win();
                }catch(e){
                    console.log(e);
                }
            });
            $field.appendChild(area);
            x++;
            }
        x = 0;
        y++;
        }
    }

    getField(): Array<Position>{
        return this.field;
    }

    win(){
        if(this.moves >= 6){
            let win = 0;
            const resultX = this.field.filter(pos => pos.getContent() == "x");
            const resultCircle = this.field.filter(pos => pos.getContent() == "o");

            resultX.forEach(pos =>{
                if(pos.getX() == 0){
                    win++;
                }
            });
            console.log(win);
        }
    }
}