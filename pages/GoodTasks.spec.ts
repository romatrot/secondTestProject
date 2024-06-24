import { expect, type Locator, type Page } from '@playwright/test';

export class GoodTasks{

    async WordBack(word: string) {
        word = word.toLowerCase();
        let letters: string[] = [];
        let wordBack: string = "";

        for (let i = 0; i < word.length; i++) {
            letters[i] = word.charAt(i);
        }

        for (let i = word.length - 1; i >= 0; i--) {
            wordBack += letters[i];
        }
    
        return wordBack;      
    }

    async RandomNumder(number : number) {
        let returnNumber: string="";

        for(let i=0;i<number;i++){
            returnNumber += String(Math.floor(Math.random() * 10));
        }
        if (returnNumber.charAt(0) == "0"){
            return 0;
        }else{
            return returnNumber;
        }
    }
    
}
