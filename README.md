This repository contains answers for all the questions of day 07 task.
The file script.js contains answers for the questions
1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
a) Get all the countries from Asia continent /region using Filter function
b) Get all the countries with a population of less than 2 lakhs using Filter function
c) Print the following details name, capital, flag, using forEach function
d) Print the total population of countries using reduce function
e) Print the country that uses US dollars as currency.

a) Get all the countries from Asia continent /region using Filter function
      I used the methods filter and map to print all the common names of the countries that are in Asia.
b) Get all the countries with a population of less than 2 lakhs using Filter function
      I used the methods filter and map to print all the common names of the coutries that have population less than 2,00,000.
c) Print the following details name, capital, flag, using forEach function
      I used forEach function for this question and within for Each I have given if else condition since capital for all the countries is not given. 
      In if condition I have given the condition to check if capital is undefined and it is followed by the statement to be executed if the condition is satisfied
      and in else I have given the statement to be executed in case the if condition is not satisfied.
d) Print the total population of countries using reduce function
     I have used the reduce method to add the population of all the countries since can sum up an array wihtout using any loops.
e) Print the country that uses US dollars as currency.
     I have used the filter method to find if a country has currency and the currency is US Dollar and stored the details of the countries using USD as their currency in an array
     and used the map method to print the common name of all the countries in that array.
     
The file index.html contains the source to run the script.js file in the browser. We can go live from this file in a browser to view the output of script.js file.

The file Output.docx contains all the screen shots of the outuput that are run in the browser. 
