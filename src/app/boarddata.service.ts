import { Injectable } from '@angular/core';
import { Card } from './card';
import { Column } from './column';

@Injectable()

export class BoardDataService {

    columns: Column[] = [
        new Column("To do", 0),
        new Column("In progress", 1),
        new Column("Complete", 2)
    ];

    constructor() {
        // let json = localStorage.getItem("ttt-games") || "[]";
        // this.cards = JSON.parse(json)
        //     .map(cardState => new Card(gameState));

        let cards = [new Card("card 1"), new Card("another card")];
        cards[0].description = "I need to figure out how to do this flexbox sh*t better";
        cards[1].description = "I need to get some queso with these chips"
        this.columns[0].cards = cards;

        let cards2 = [new Card("card 2")];
        cards2[0].description = "Need to go get some bourbon after work";
        this.columns[1].cards = cards2;

        let cards3 = [new Card("card 3")];
        cards3[0].description = "Need to hit up some bbq spots this weekend";
        this.columns[2].cards = cards3;

    }

    createCard(title: string, column: Column): Card {
        let card = new Card(title);
        column.cards.push(card);
        return card;
    }

    getAllColumns(): Column[] {
        return this.columns;
    }

    moveCard(cardTitle: string, sourceColTitle: string): void {
        let source = this.getColumnFromTitle(sourceColTitle);
        let dest = this.columns.indexOf(source) + 1;
        let card = this.getCardFromTitle(cardTitle, source);

        //todo: remove card from source
        this.columns[dest].cards.push(card);
        source.cards = source.cards.filter(x => x !== card);
    }

    getColumnFromTitle(title: string): Column {
        for (let column of this.columns) {
            if (column.title === title) {
                return column;
            }
        }

        return null;
    }

    getCardFromTitle(title: string, column: Column): Card {
        for (let card of column.cards) {
            if (card.title === title) {
                return card;
            }
        }

        return null;
    }

    isLastColumn(columnTitle: string): boolean {
        let col = this.getColumnFromTitle(columnTitle);
        let dest = this.columns.indexOf(col) + 1;
        //debugger;
        if (this.columns.length - 1 <= dest) {
            return true;
        }
        return false;
    }

    isCardInLastColumn(title: string): boolean {
        let lastCol = this.columns[this.columns.length - 1];
        for (let card of lastCol.cards) {
            if (card.title === title) {
                return true;
            }

        }
        return false;
    }
    // removeGame(game: TicTacToeGame): void {
    //     let index = this.games.findIndex(g => g === game);
    //     this.games.splice(index, 1);
    // }

    // saveAll(): void {
    //     let json = JSON.stringify(this.games);
    //     localStorage.setItem('ttt-games', json);
    // }
}