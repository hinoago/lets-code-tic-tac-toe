import { Field } from './Field';
import './style.css';

export class Game{
    gameStart(): void{
        new Field();
        this.loadScore();
    }

    loadScore(): void{
        if(localStorage.getItem("xScore") == null){
            localStorage.setItem("xScore", "0");
        }

        if(localStorage.getItem("oScore") == null){
            localStorage.setItem("oScore", "0");
        }

        document.querySelector("#x")!.innerHTML = localStorage.getItem("xScore")!;
        document.querySelector("#o")!.innerHTML = localStorage.getItem("oScore")!;
    }
}