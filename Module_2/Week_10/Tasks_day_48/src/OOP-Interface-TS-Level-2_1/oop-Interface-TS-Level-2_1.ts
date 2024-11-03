import Manager from './classes/Manager';
import Subordinate from './classes/Subordinate';
console.log("test");

// 5- Erstelle drei Instanzen der Klasse Subordinate
//- Erstelle eine Instanz der Klasse Manager
//- Weise die Subordinates über die Methode addSubordinate dem Manager zu


const subordinate1 = new Subordinate("Bernie", 47,"Janitor");
const subordinate2 = new Subordinate("Angie", 34, "Receptionist");
const subordinate3 = new Subordinate("Helga", 51, "Cafeteria cook");

const cafeteriaManager = new Manager("Harold",44, "cafeteria Manager"); 

cafeteriaManager.addSubordinate(subordinate1);
cafeteriaManager.addSubordinate(subordinate2);
cafeteriaManager.addSubordinate(subordinate3);

console.log(cafeteriaManager);  /* console returns: Manager {_name: 'Harold', _age: 44, _position: 'cafeteria Manager', _assignedEmployees: Array(3)}
_age
: 
44
_assignedEmployees
: 
Array(3)
0
: 
Subordinate {_name: 'Bernie', _age: 47, _position: 'Janitor'}
1
: 
Subordinate {_name: 'Angie', _age: 34, _position: 'Receptionist'}
2
: 
Subordinate {_name: 'Helga', _age: 51, _position: 'Cafeteria cook'}
length
: 
3
[[Prototype]]
: 
Array(0)
_name
: 
"Harold"
_position
: 
"cafeteria Manager"
[[Prototype]]
: 
Object */


