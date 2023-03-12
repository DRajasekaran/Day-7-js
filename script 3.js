var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);

//a.Get all the countries from the Asia continent /region using the Filter function

var resa=result.filter((ele)=>ele.region=="Asia");
console.log(resa.map((ele)=>{return ele.population}))

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var resb=result.filter((ele)=>ele.population<200000);
console.log(resb.map((ele)=>{return ele.name}));

//c.Print the following details name, capital, flag using forEach function

result.forEach((country)=>{
    console.log("Name   : "+country.name);
    console.log("Capital: "+country.capital);
    console.log("Flag   : "+country.flag);
    console.log("--------------------------------")
});

//d.Print the total population of countries using reduce function

var resd=result.reduce((a,b)=>a+b.population,0);
console.log(resd)

//e.Print the country which uses US Dollars as currency

var rese=[];
result.filter((ele)=>{
for(let key in ele.currencies){
    if(ele.currencies[key].code=="USD"){
        rese.push(ele.name);
    }
}});
console.log(rese);
}