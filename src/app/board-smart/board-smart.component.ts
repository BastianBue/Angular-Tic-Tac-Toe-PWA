import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-smart',
  templateUrl: './board-smart.component.html',
  styleUrls: ['./board-smart.component.sass']
})
export class BoardSmartComponent implements OnInit {

  squares: any[]= [];
  xIsNext:boolean = false;
  winner:"X"| "O" | null = null;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame():void{
    this.squares = Array(9).fill(null);
  }

  
  public get player() : string {
    return this.xIsNext ? "O" : "X";
  }

  
 checkForWin():void{
  console.log(this);
  const {squares:s} = this
    this.checkThree(s[0],s[1],s[2]);
    this.checkThree(s[3],s[4],s[5]);
    this.checkThree(s[6],s[7],s[8]);
    this.checkThree(s[0],s[3],s[6]);
    this.checkThree(s[1],s[4],s[7]);
    this.checkThree(s[2],s[5],s[8]);
    this.checkThree(s[0],s[4],s[8]);
    this.checkThree(s[2],s[4],s[6]); 
  }

  makeMove(index:number):void{
    const {squares} = this
    if(squares[index] === null ){
     squares[index] = this.player;
     this.checkForWin();
     this.xIsNext = !this.xIsNext;
    }  
  }

  checkThree(a:"X"| "O" |undefined,b:"X"| "O" |undefined,c:"X"| "O" |undefined):void{

    if(a ){
      if(a === b && a === c){
        this.winner = a 
        console.log(this.winner);
        
      }
    }
  }


}
