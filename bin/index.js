#!/usr/bin/env node
const countryList = require('country-list');
const axios = require('axios');
const { getCode, getName } = require('country-list');

let args = process.argv.slice(2);
let country = args[0] || 'Belgium';
let currentYear = args[1] || new Date().getFullYear();
let countryCode = (getCode(country));

if (countryCode == undefined) {
    console.log('this country is not available');
} else {
    console.log("Holidates in "+ country + " for the year " + currentYear + ":\n");
    getholidays();
}

async function getholidays() {
  try {
    const response = await axios.get("https://date.nager.at/Api/v2/PublicHolidays/" + currentYear + "/" + countryCode);
  
    for (const item of response.data) {
          console.log(item.date + " : " + item.name);
    }
  } catch (error) {
    console.error(error);
  }
}
