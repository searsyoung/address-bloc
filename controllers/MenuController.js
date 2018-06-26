const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Get the Date",
                    "Remind me",
                    "Exit"
                ]
            }
        ];
        this.book = new ContactController();
    }

    main() {
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch (response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Get the Date":
                    this.getDate();
                    break;
                case "Remind me":
                    this.remindMe();
                    break;
                case "Exit":
                    this.exit();
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    clear() {
        console.log("\x1Bc");
    }

    addContact() {
        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
            this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
                console.log("logging answers.email", answers.email);
                console.log("Contact added successfully!");
                this.main();
            }).catch((err) => {
                console.log(err);
                this.main();
            });
        });
    }
    getDate() {
        let today = new Date().toJSON();
        this.clear();
        console.log("The current date and time is: " + today)
        this.main()
    }

    remindMe() {
        let message = "Learning is a life-long pursuit."
        this.clear();
        console.log(message);
        this.main();
        return message;

    }

    exit() {
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }
}