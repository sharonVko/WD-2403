// 1- Erstelle einen Ordner contracts
//- Lege dort eine Datei employee.ts an
//- Erstelle ein Interface IEmployee mit den Eigenschaften
//    - name (string), - age (number), - position (string)


interface IEmployee {
    _name: string;
    _age: number;
    _position : string;
    _startDate: Date;// level 2_2

    getYearsOfService: () => number;
    
};


// level 2_2
//- Erweitere das Interface IEmployee um die Eigenschaft startDate (Date) und die Methode getYearsOfService (number), die die Dienstjahre der Mitarbeitenden zum Stand heute zurückgibt (see Trainee.ts)
//- Implementiere die Eigenschaft und Methode an allen nötigen Stellen
export default IEmployee;