import { Component, Input } from '@angular/core';
import { Card } from '../card';
import { Column } from '../column';
import { BoardDataService } from '../boarddata.service';

@Component({
    selector: 'trello-column',
    templateUrl: './trellocolumn.component.html',
    styleUrls: ['./trellocolumn.component.scss']
})

export class TrelloColumnComponent {
    @Input()
    public column: Column;
    public showAction: boolean = true;

    constructor(private service: BoardDataService) {
    }

    advanceCard(cardTitle: string, columnTitle: string): void {
        this.service.moveCard(cardTitle, columnTitle);
        // debugger;
        // if (this.service.isCardInLastColumn(cardTitle)) {
        //     this.showAction = false;
        // }
    }
}