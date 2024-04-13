
//1.Import readline 
const readline = require("readline");

//2. Configure interface to connect with terminal/command line.
//for read value and write value

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3. Read value from terminal/command line
// here Question take sting .
interface.question("enter the first value: ",(num1)=>{

    interface.question("enter the Second value: ",(num2)=>{

        const sum = Number(num1)+Number(num2);
        console.log("sum of two number is: ",sum);
        interface.close();

    })
});