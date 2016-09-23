/**
 * @author Schwartz, Harris (hfschwartz21@gmail.com)
 * @version 0.0.1
 * @summary Project 1 code || Created 09.22.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomCount, bathroomCount, garageSize, homePrice;

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_PRICE = 6000;
//garage_price is the price of each additional car the garage needs to hold;

function main() {
    setLotNumber();
    setBedroomCount();
    setBathroomCount();
    setGarageSize();
    calculateHomePrice();
    printResults();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question('\nPlease enter lot number: ');
}

function setBedroomCount() {
    bedroomCount = Number(PROMPT.question('\nPlease enter the number of bedrooms you would like: '));
}

function setBathroomCount() {
    bathroomCount = Number(PROMPT.question('\nPlease enter the number of bathrooms you would like: '));
}

function setGarageSize() {
    garageSize = Number(PROMPT.question('\nPlease enter the size you need the garage to be by number of cars: '));
}

function calculateHomePrice() {
    homePrice = BASE_PRICE + BEDROOM_PRICE * bedroomCount + BATHROOM_PRICE * bathroomCount + GARAGE_PRICE * garageSize;
}

function printResults() {
    console.log("\nYour house will cost " + homePrice);
}