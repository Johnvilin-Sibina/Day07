//1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//Solution:
let request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    let res = JSON.parse(request.response);
//a) Get all the countries from Asia continent/region using Filter function
//Solution:
let asia = res.filter((ele)=>ele.region=="Asia");  //The complete details of all the countries in Asia is filtered 
                                                    //and stored in an array named "asia".

let asian_countries = asia.map((ele)=>ele.name.common); //Map function is applied to the array "asia" and the common
                                                        // name of the countries in it is stored in an array named "asian_countries".
console.log(asian_countries);

//b) Get all the countries with a population of less than 2 lakhs using Filter function
//Solution:
let popu = res.filter((ele)=>ele.population<200000);  //The complete details of all the countries with population less
                                                      // than 2lakhs is filtered and stored in an array named "popu".

let popu_countries = popu.map((ele)=>ele.name.common);  //Map function is applied to the array "popu" and the common name 
                                                        //of the countries in it is stored in an array named "popu_countries".
console.log(popu_countries);

//c) Print the following details name, capital, flag, using forEach function
//Solution:
let details = res.forEach((ele)=>{
    if(ele.capital==undefined){      //If capital is undefined the statement within if condition will be executed 
                                    //else the statement within else will be executed. 
        console.log(`Name: ${ele.name.common}, Capital: Capital is not given, Flag: ${ele.flags.png}`)
    }
    else{
    console.log(`Name: ${ele.name.common}, Capital: ${ele.capital[0]}, Flag: ${ele.flags.png}`)
}
});

//d) Print the total population of countries using reduce function
//Solution:
let total_popu = res.reduce((acc,cv)=>acc+cv.population,0);  //Using reduce the total population of all the counties 
console.log(total_popu); //is calculated. Here "acc" is the accumulator and "cv" is the current value and 
                        //the initial value before any addittion is performed is set to 0;

//e) Print the country that uses US dollars as currency.
//Solution:
let usd  = res.filter((ele)=>ele.currencies && ele.currencies.USD); //This line checks if there is currencies and the currencies is USD and 
                 //stores the complete details of those countries that satisfy both the condition in an array named "usd".
let usd_countries = usd.map((ele)=>ele.name.common);  //Using map the common name of the countries in the array "usd" is stored in an array named "usd_countries".
console.log(usd_countries);
}
