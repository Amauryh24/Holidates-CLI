#!/usr/bin/env node
const countryList = require('country-list');
const axios = require('axios');
const chalk = require('chalk');
const { getCode, getName } = require('country-list');

let args = process.argv.slice(2);
let country = args[0] || 'Belgium';
let currentYear = args[1] || new Date().getFullYear();
let countryCode = (getCode(country));

if (countryCode == undefined) {
    console.log(chalk.red('Sorry, this country is not available !'));
} else {
    console.log(chalk.green("Holidates in "+ chalk.underline.bold(country)  + " for the year " + chalk.underline.bold(currentYear) + ":\n"));
    getholidays();
}

async function getholidays() {
  try {
    const response = await axios.get("https://date.nager.at/Api/v2/PublicHolidays/" + currentYear + "/" + countryCode);
  
    for (const item of response.data) {
          console.log(chalk.blue(item.date) + " : " + chalk.blue.italic(item.name));
    }
  } catch (error) {
    console.error(error);
  }
}
