import { Card } from './card';

export class Column {

    public cards: Card[];
    public description: string;
    //public status: number;

    constructor(public title: string, public status: number) {}


}