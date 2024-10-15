console.log("practice objects forEach() and map()");

type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type Student = {
    name: string;
    age: number;
    coop: boolean;
    address: Address;
    emails: string[];
};

let studentData: Student[] = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData);
console.log(studentData.map(studentName => studentName.name)); /* console returns: (2) ['Alex', 'Sandra'] */
console.log(studentData.map(studentCoop => studentCoop.coop)); /* console returns : (2) [false, true] */
console.log(studentData.map(studentCity => studentCity.address.city)); /* console returns : (2) ['Toronto', 'Toronto'] */
console.log(studentData.map(studentMail => studentMail.emails)); /* console returns : (2) [Array(2), Array(2)]
0
: 
(2) ['alex69@gmail.com', 'alex123@yahoo.com']
1
: 
(2) ['sandra@gmail.com', 'sandra@yahoo.com']
length
: 
2
[[Prototype]]
: 
Array(0) */

/* alternative : */

const grabDetails  = (students: Student[]): void => {
    students.forEach((student: Student) => {
        console.log(student.name);
        console.log(student.coop);
        console.log(student.address.city);
        console.log(student.emails);
    })
}
grabDetails(studentData);