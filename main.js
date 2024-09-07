#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("\t\t Welcome To Hasnain's Coding World"));
console.log("=".repeat(70));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    std = [];
    add_student(obj) {
        this.std.push(obj);
    }
}
const persons = new Person();
let entname;
while (!entname || !entname.givename.trim()) {
    entname = await inquirer.prompt({
        name: "givename",
        type: "input",
        message: chalk.bold.green("Please Enter Your Name"),
        transformer: (givename) => {
            return chalk.bold.yellow(givename);
        },
    });
    if (!entname.givename.trim()) {
        console.log(chalk.bold.italic.red("Name cannot be empty. Please enter your name."));
    }
}
const startProgram = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "userinput",
            message: chalk.bold.green("Please Tell Whome Which You Want To Talk"),
            choices: ["My Self", "Students", "Don't Want To Talk Anybody or Exit Program"]
        });
        if (ans.userinput == "My Self") {
            console.log(chalk.bold.italic.yellow(`Hello i am ${chalk.bold.red(entname.givename)} And i am Talking To My Self!!`));
        }
        if (ans.userinput == "Students") {
            const ans = await inquirer.prompt({
                name: "StdName",
                type: "input",
                message: chalk.bold.green("Enter The Student Name Which You want to Talk"),
                transformer: (StdName) => {
                    return chalk.bold.yellow(StdName);
                }
            });
            const student = persons.std.find(val => (val.name == ans.StdName));
            if (!student) {
                const name = new Student(ans.StdName);
                persons.add_student(name);
                console.log(persons.std);
                console.log(chalk.bold.italic.yellow(`Hello ${chalk.bold.red(entname.givename)} I Am ${chalk.bold.red(ans.StdName)}, Sorry I am in Class Right Now I will Talk To You After Class!`));
            }
            if (student) {
                console.log(chalk.bold.italic.yellow(`Hello ${chalk.bold.red(entname.givename)} I Am ${chalk.bold.red(ans.StdName)}, And i already Tell You Before That I am Taking Class Now Dont't Disturb me Again!`));
            }
        }
        if (ans.userinput == "Don't Want To Talk Anybody or Exit Program") {
            console.log(chalk.bold.red.italic("Thanks For Giving Your Precious Time Thank You"));
            process.exit();
        }
    } while (true);
};
startProgram(persons);
