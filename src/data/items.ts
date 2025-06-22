import {EItem} from "../enums/items";
import itemsData from './items.json';

interface Item {
    id: number
    name: string
}

interface ItemsDictionary {
    [key: string]: Item;
}

const items: ItemsDictionary = itemsData

export class Items {
    static get(itemId: EItem): Item | undefined {
        return items[itemId.toString()]
    }
}

