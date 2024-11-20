
//- Lege eine neue Datei an donkey.ts an
//- Erstelle dort ein Interface IDonkey mit folgenden Eigenschaften: - name: string;- age: -number; -favoriteFood: string

export interface IDonkey {
    name: string,
    age: number,
    fluffyness: number,
    favoriteFood: string
};

export enum Donkey {
    Daisy,
    Gus, 
    Rosie,
    Coco,
    Jasper
};

//Erstelle einen Record vom Typ <Donkey, IDonkey> mit fünf Einträgen

type TBunchOfDonkeys =  Record<Donkey,IDonkey>;

const donkeyBunch :TBunchOfDonkeys = {
    0: {
        name: "Daisy",
        age: 4,
        fluffyness: 3,
        favoriteFood: "Daisies",
      },
      1: {
        name: "Gus",
        age: 3,
        fluffyness: 2,
        favoriteFood: "Oats",
      },
      2: {
        name: "Rosie",
        age: 1,
        fluffyness: 6,
        favoriteFood: "Roses",
      },
      3: {
        name: "Coco",
        age: 2,
        fluffyness: 7,
        favoriteFood: "Coconuts",
      },
      4: {
        name: "Jasper",
        age: 12,
        fluffyness: 5,
        favoriteFood: "Hay",
      },
};