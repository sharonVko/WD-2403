function calculate (number){

    let difference = number - 27;

    if (number > 27){
        difference *= 2;
    }
    console.log(difference);
}

calculate(35);
calculate(74);
calculate(123);
calculate(20);



/* - Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
- Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
- Lass dir das Ergebnis in der Konsole ausgeben.
- Teste die Nummern:
    - 35
    - 74
    - 123 */