"use strict";
// #!/usr/bin/env node
// import * as readline from 'readline';
// import axios from 'axios';
// import * as jsonData from './countries.json';
// class CommandLineInterface {
//   private rl: readline.Interface;
//   constructor() {
//     this.rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//   }
//   public promptUser(question: string, callback: (input: string) => void) {
//     this.rl.question(question, (userInput) => {
//       callback(userInput);
//     });
//   }
//   public closeInterface() {
//     this.rl.close();
//   }
// }
// class Games {
//   public checkPalindrome(input: string) {
//     const reversed = input.split('').reverse().join('').toLowerCase();
//     reversed === input.toLowerCase() ? console.log('\n\x1b[32m\nThe word is a Palindroe!\n\x1b[0m'): console.log('\n\x1b[31m\nnot a palindrom!\n\x1b[0m');
//   }
//   public checkLowerCase(word: string) {
//     word === word.toLowerCase() ? console.log('\n\x1b[32m\nAll lowerCase!\n\x1b[0m') : console.log('\n\x1b[31m\nContains UPPERCASE\n\x1b[0m');
//   }
//   public checkIfAllNumbers(input: string) {
//     for (let i = 0; i < input.length; i++) {
//       const charTest = input.charAt(i);
//       const parsedChar = parseInt(charTest);
//       if (isNaN(parsedChar)) {
//         console.log("Contains non-digit characters.");
//         return;
//       }
//     }
//     console.log("All characters are numbers.");
//   }
//   public async getNationality(nameOfUser: string) {
//     try {
//       const response = await axios.get('https://api.nationalize.io?name=' + nameOfUser);
//       const data = response.data.country;
//       const { country_id, probability } = data.reduce((max: any, current: any) =>
//         current.probability > max.probability ? current : max
//       );
//       const entry: [string, string][] = Object.entries(jsonData);
//       const foundEntry = entry.find(([isoCode, _]) => isoCode === country_id);
//       if (foundEntry) {
//         const [isoCode, countryName] = foundEntry;
//         console.log(`${nameOfUser} is from ${isoCode}: ${countryName} with a probability of ${probability}`);
//       } else {
//         console.log("Country ISO could not be found");
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//   public playAgain(callback: (input: string) => void) {
//     const cli = new CommandLineInterface();
//     cli.promptUser('Play again? (y/n): ', (userInput) => {
//       callback(userInput.trim());
//     });
//   }
// }
// function main() {
//   console.log('Welcome to the CLI Game!');
//   const cli = new CommandLineInterface();
//   function playGame() {
//     main() 
//   }
//   cli.promptUser('Choose an action:\n1. Check for Palindrome\n2. Check for Lowercase\n3. check if an entery is Number\n4. check a yser nationality\n5. Exit \nEnter 1 or 2 or 3 or 4 or 5 to exit: '
//   , (userInput) => {
//     const choice = userInput.trim();
//     switch (choice) {
//       case '1':
//         console.log('\n\x1b[31m\nDefenition: A palindrom is a word that is read the same backwards\n\x1b[0m') 
//         cli.promptUser("\x1b[32mEnter a word to check if it is a palindrom: \x1b[0m", (userInput) => {
//           const game = new Games();
//           game.checkPalindrome(userInput)
//           // game.playAgain((playAgainInput) => {
//           //   // if (playAgainInput === 'y') {
//           //   //   cli.closeInterface
//           //   //   playGame(); // Start the game again
//           //   // } else {
//           //   //   cli.closeInterface();
//           //   // }
//           // });
//           cli.closeInterface();
//         });
//         break;
//       case '2':
//         cli.promptUser("\x1b[32mEnter a word: \x1b[0m", (userInput) => {
//           const game = new Games();
//           game.checkLowerCase(userInput);
//           cli.closeInterface();
//         });
//         break;
//         case '3':
//         cli.promptUser('enter a word: ', (userInput) => {
//           const game = new Games();
//           game.checkIfAllNumbers(userInput);
//           cli.closeInterface();
//         });
//         break;
//         case '4':
//           cli.promptUser('enter a name: ', (userInput) => {
//             const game = new Games();
//             game.getNationality(userInput);
//             cli.closeInterface();
//           });
//           break;
//           case '5':            
//             cli.closeInterface();
//             break;
//       default:
//         console.log('please enter a valid number');
//         cli.closeInterface();
//         break;
//     }
//   });
// }
// main();
//# sourceMappingURL=protoTyper.js.map