import { Position } from "./Position";

export class Field{
    field: Array<Position> = [];
    moves: number = 0;

    constructor(){
        const $field: HTMLDivElement = document.querySelector("#field")!;
        let n = 1;
      
        let shape = "O";
        let x = 0;
        let y = 0;
      
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
            const position = new Position(x, y, undefined);
            this.field.push(position);

            const area = document.createElement("div");
            area.className = "area";
            area.id = `area${n}`;
            n++;
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
                try{
                    this.win();
                }catch(e: any){
                    this.playAgain();
                }
            });
            $field.appendChild(area);
            x++;
            }
        x = 0;
        y++;
        }
    }

    win(): void{
        const area1 = this.field.find(pos => pos.getX() == 0 && pos.getY() == 0);
        const area2 = this.field.find(pos => pos.getX() == 1 && pos.getY() == 0);
        const area3 = this.field.find(pos => pos.getX() == 2 && pos.getY() == 0);
        const area4 = this.field.find(pos => pos.getX() == 0 && pos.getY() == 1);
        const area5 = this.field.find(pos => pos.getX() == 1 && pos.getY() == 1);
        const area6 = this.field.find(pos => pos.getX() == 2 && pos.getY() == 1);
        const area7 = this.field.find(pos => pos.getX() == 0 && pos.getY() == 2);
        const area8 = this.field.find(pos => pos.getX() == 1 && pos.getY() == 2);
        const area9 = this.field.find(pos => pos.getX() == 2 && pos.getY() == 2);
        if(this.moves >= 5){
            if(area1?.getContent() != undefined && area1?.getContent() == area2?.getContent() && area2?.getContent() == area3?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area1")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area2")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area3")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area1.getContent()}Score`)!);
                localStorage.setItem(`${area1.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area1.getContent()}`);
            }

            if(area4?.getContent() != undefined && area4?.getContent() == area5?.getContent() && area5?.getContent() == area6?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area4")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area5")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area6")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area4.getContent()}Score`)!);
                localStorage.setItem(`${area4.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area4.getContent()}`);
            }

            if(area7?.getContent() != undefined && area7?.getContent() == area8?.getContent() && area8?.getContent() == area9?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area7")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area8")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area9")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area7.getContent()}Score`)!);
                localStorage.setItem(`${area7.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area7.getContent()}`);
            }

            if(area1?.getContent() != undefined && area1?.getContent() == area4?.getContent() && area4?.getContent() == area7?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area1")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area4")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area7")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area1.getContent()}Score`)!);
                localStorage.setItem(`${area1.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area1.getContent()}`);
            }

            if(area2?.getContent() != undefined && area2?.getContent() == area5?.getContent() && area5?.getContent() == area8?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area2")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area5")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area8")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area2.getContent()}Score`)!);
                localStorage.setItem(`${area2.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area2.getContent()}`);
            }

            if(area3?.getContent() != undefined && area3?.getContent() == area6?.getContent() && area6?.getContent() == area9?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area3")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area6")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area9")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area3.getContent()}Score`)!);
                localStorage.setItem(`${area3.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area3.getContent()}`);
            }

            if(area1?.getContent() != undefined && area1?.getContent() == area5?.getContent() && area5?.getContent() == area9?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area1")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area5")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area9")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area1.getContent()}Score`)!);
                localStorage.setItem(`${area1.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area1.getContent()}`);
            }

            if(area3?.getContent() != undefined && area3?.getContent() == area5?.getContent() && area5?.getContent() == area7?.getContent()){
                const n1 = <HTMLDivElement>document.getElementById("area3")!.children[0];
                const n2 = <HTMLDivElement>document.getElementById("area5")!.children[0];
                const n3 = <HTMLDivElement>document.getElementById("area7")!.children[0];
                n1.style.color = "green";
                n2.style.color = "green";
                n3.style.color = "green";
                let num = parseInt(localStorage.getItem(`${area3.getContent()}Score`)!);
                localStorage.setItem(`${area3.getContent()}Score`, (num+1).toString());
                throw new Error(`Vitoria ${area3.getContent()}`);
            }
        }
    }

    playAgain(): void{
        confirm("Jogar novamente");
        setTimeout(() =>{
            window.location.reload();
        }, 1000);
    }
}