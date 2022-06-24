import { Field } from './Field';
import './style.css';

export class Game{
    gameStart(): void{
        new Field();
    }
      
    winGame(){
    /*if(arr.length >= 3){
        return arr.every(pos => pos.x == 0) || arr.every(pos => pos.x == 1) || arr.every(pos => pos.x == 2)
        || arr.every(pos => pos.y == 0) || arr.every(pos => pos.y == 1) || arr.every(pos => pos.y == 2)
        || (arr.some(pos => pos.x == 0 && pos.y == 0 || pos.x == 2 && pos.y == 0) 
        &&
        arr.some(pos => pos.x == 2 && pos.y == 2 || pos.x == 0 && pos.y == 2)
        &&
        arr.some(pos => pos.x == 1 && pos.y == 1));
    }
    return false;*/
    }
      
    endGame(){
    
    }
}