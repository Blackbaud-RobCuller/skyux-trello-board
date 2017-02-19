import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardDataService } from '../boarddata.service';
import { Column } from '../column';
import { Card } from '../card';

@Component({
    selector: 'trello-board',
    templateUrl: './trelloboard.component.html',
    styleUrls: ['./trelloboard.component.scss']
})

export class TrelloBoardComponent implements OnInit {

    columns: Column[] = [];

    constructor(private service: BoardDataService) {
    }

    ngOnInit() {
        this.columns = this.service.getAllColumns();
        console.log(this.columns);
    }

    // ngOnDestroy() {
    //     this.service.saveAll();
    // }

    // selectGame(game: TicTacToeGame) {
    //     this.selectedGame = game;
    // }

    createCard(title: string): void {
        this.service.createCard(title, this.columns[0]);
    }

    // moveCard(card: Card, sourceColumn: Column, destColumn: Column): void {
    //     this.service.moveCard(card, sourceColumn, destColumn);
    // }

    // removeGame(game: TicTacToeGame) {
    //     this.service.removeGame(game);
    //     if (game === this.selectedGame) {
    //         this.selectedGame = null;
    //     }
    // }
}