import { Games } from "./gameClass";
import { CommandLineInterface } from './commandLine';

const game = new Games();
const cli = new CommandLineInterface();

export function RunGame() {
  console.log('Welcome to the CLI Game');

  cli.promptUser('Choose an action:\n1. Check for Palindrome\n2. Check for Lowercase\n3. Check if an entry is a Number\n4. Check a user nationality\n5. Check if a number is an Armstrong Number\n6. Exit\nEnter the number of the game: ',
    (userInput) => {
      const choice = userInput.trim();

      switch (choice) {
        case '1':
          console.log('\n\x1b[31m\nDefinition: A palindrome is a word that is read the same backwards\n\x1b[0m');
          cli.promptUser("\x1b[32mEnter a word to check if it is a palindrome: \x1b[0m", (userInput) => {
            game.checkPalindrome(userInput);
            cli.closeInterface();
          });
          break;

        case '2':
          cli.promptUser("\x1b[32mEnter a word: \x1b[0m", (userInput) => {
            game.checkLowerCase(userInput);
            cli.closeInterface();
          });
          break;

        case '3':
          cli.promptUser("\x1b[32mEnter a word: \x1b[0m", (userInput) => {
            game.checkIfAllNumbers(userInput);
            cli.closeInterface();
          });
          break;

        case '4':
          cli.promptUser("\x1b[32mEnter a word: \x1b[0m", (userInput) => {
            game.getNationality(userInput);
            cli.closeInterface();
          });
          break;

        case '5':
          cli.promptUser('Enter a number to see if it is an Armstrong number: ', (userInput) => {
            game.armstrongNumberCheck(userInput);
            cli.closeInterface();
          });
          break;

        case '6':
          cli.closeInterface();
          break;

        default:
          console.log('Please enter a valid number');
          break;
      }
    });
}
RunGame()

