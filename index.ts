#! /usr/bin/env node

import inquirer from "inquirer";
import chalk  from "chalk";

console.log(chalk.bgGrey("\n\t\t\t---CURRENCY CONVERTER---\n"));

const currency:any={
    USD:1, // Base currency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    SAR:3.75,
    ECD:2.70,
    EGP:47.33,
    HKD:7.83,
    CND:1.36,
    UAED:3.67,
    NER:133.08,
    OMR:0.38
};

let user_answer=await inquirer.prompt(
    [
        {
            message:"Enter from currency: ",
            name:"from",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","SAR","ECD","EGP","HKD","CND","UAED","NER","OMR"]
        },
        {
            message:"Enter to currency: ",
            name:"to",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","SAR","ECD","EGP","HKD","CND","UAED","NER","OMR"]
        },
        {
            message:"Enter your amount: ",
            name:"amount",
            type:"number",
            transformer:(amount) => {
                return chalk.cyan(amount);
            }
        }
    ]
);

// Dynamic approach
let fromAmount=currency[user_answer.from]; // exchange rate
let toAmount=currency[user_answer.to]; // exchange rate
let amount=user_answer.amount;

let baseAmount=amount/fromAmount; // USD base amount
let convertedAmount=baseAmount*toAmount;

console.log(chalk.cyanBright("\nThe converted amount is: "),chalk.yellowBright(convertedAmount.toFixed(2)));


/*
let userFromCurrency=user_answer.from;
let userToCurrency=user_answer.to;

let fromAmount=currency[userFromCurrency];
let toAmount=currency[userToCurrency];
*/