import {EMonster} from "../enums/monsters";
import monstersData from './monsters.json'

interface Monster {
    id: number
    name: string
}

interface MonstersDictionary {
    [key: string]: Monster;
}

const monsters: MonstersDictionary = monstersData

export class Monsters {
    static get(monsterId: EMonster): Monster | undefined {
        return monsters[monsterId.toString()]
    }
}

