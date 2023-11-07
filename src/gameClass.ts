import axios from 'axios';
import { RunGame } from './game';
import * as jsonData from './countries.json';

export class Games {
    public checkPalindrome(input: string) {
      const reversed = input.split('').reverse().join('').toLowerCase();
      reversed === input.toLowerCase() ? 
      console.log('\n\x1b[32m\nThe word is a Palindroe!\n\x1b[0m'):
      console.log('\n\x1b[31m\nnot a palindrom!\n\x1b[0m');
    }


    public checkLowerCase(word: string) {
      word === word.toLowerCase() ? 
      console.log('\n\x1b[32m\nAll lowerCase!\n\x1b[0m') : 
      console.log('\n\x1b[31m\nContains UPPERCASE\n\x1b[0m');
    }

    public checkIfAllNumbers(input: string) {
      for (let i = 0; i < input.length; i++) {
        const charTest = input.charAt(i);
        const parsedChar = parseInt(charTest);
        if (isNaN(parsedChar)) {
          console.log("Contains non-digit characters.");
          return;
        }
      }
      console.log("All characters are numbers.");
    }


    public async getNationality(nameOfUser: string) {
      try {
        const response = await axios.get('https://api.nationalize.io?name=' + nameOfUser);
        const data = response.data.country;
        const { country_id, probability } = data.reduce((max: any, current: any) =>
          current.probability > max.probability ? current : max
        );
  
        const entry: [string, string][] = Object.entries(jsonData);
        const foundEntry = entry.find(([isoCode, _]) => isoCode === country_id);
        if (foundEntry) {
          const [isoCode, countryName] = foundEntry;
          console.log(`${nameOfUser} is from ${isoCode}: ${countryName} with a probability of ${probability*100}%`);
        } else {
          console.log("Country ISO could not be found");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    public armstrongNumberCheck(num: string) {
      const n = num.length;
      let sum = 0;
    
      for (let i = 0; i < num.length; i++) {
        const digit = parseInt(num[i]);
        sum += Math.pow(digit, n);
      }
    
      if (sum.toString() === num) {
        console.log(`${num} is an Armstrong number.`);
      } else {
        console.log(`${num} is not an Armstrong number.`);
      }
    }
    
  }