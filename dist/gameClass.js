"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Games = void 0;
const axios_1 = __importDefault(require("axios"));
const jsonData = __importStar(require("./countries.json"));
class Games {
    checkPalindrome(input) {
        const reversed = input.split('').reverse().join('').toLowerCase();
        reversed === input.toLowerCase() ?
            console.log('\n\x1b[32m\nThe word is a Palindroe!\n\x1b[0m') :
            console.log('\n\x1b[31m\nnot a palindrom!\n\x1b[0m');
    }
    checkLowerCase(word) {
        word === word.toLowerCase() ?
            console.log('\n\x1b[32m\nAll lowerCase!\n\x1b[0m') :
            console.log('\n\x1b[31m\nContains UPPERCASE\n\x1b[0m');
    }
    checkIfAllNumbers(input) {
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
    async getNationality(nameOfUser) {
        try {
            const response = await axios_1.default.get('https://api.nationalize.io?name=' + nameOfUser);
            const data = response.data.country;
            const { country_id, probability } = data.reduce((max, current) => current.probability > max.probability ? current : max);
            const entry = Object.entries(jsonData);
            const foundEntry = entry.find(([isoCode, _]) => isoCode === country_id);
            if (foundEntry) {
                const [isoCode, countryName] = foundEntry;
                console.log(`${nameOfUser} is from ${isoCode}: ${countryName} with a probability of ${probability * 100}%`);
            }
            else {
                console.log("Country ISO could not be found");
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    armstrongNumberCheck(num) {
        const n = num.length;
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            const digit = parseInt(num[i]);
            sum += Math.pow(digit, n);
        }
        if (sum.toString() === num) {
            console.log(`${num} is an Armstrong number.`);
        }
        else {
            console.log(`${num} is not an Armstrong number.`);
        }
    }
}
exports.Games = Games;
//# sourceMappingURL=gameClass.js.map