import * as readline from 'readline';

export class CommandLineInterface {
  private rl: readline.ReadLine;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public promptUser(question: string, callback: (input: string) => void) {
    this.rl.question(question, (userInput) => {
      callback(userInput);
    });
  }

  public closeInterface() {
    this.rl.close();
  }
}

