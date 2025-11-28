

const BASE_URL = "https://open.er-api.com/v6/latest";



const dropdowns = document.querySelectorAll(".dropdown select");   //to select the country by code name
const Btn = document.querySelector("Button");              //btn for the exchange rate
const fromCurr= document.querySelector(".from select");       //from which country
const toCurr= document.querySelector(".to select");           //to which country code rate
const msg = document.querySelector(".msg");   
let amount = document.querySelector(".Amount input");                //to display the message


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}
//to  update flage based on user input

const updateFlag= (element) =>{
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let newSrc= `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};

//user input 

Btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amtValue = amount.value;
    if (amtValue === "" || amtValue < 1) {
        amtValue = "1";
        amount.value = "1";
    }

    const URL = `https://open.er-api.com/v6/latest/${fromCurr.value}`;

    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log("API response:", data);

        // field name
        const rates = data.rates;

        // target rate
        const rate = rates[toCurr.value];

        //conversion part
        const convertedAmount = (amtValue * rate).toFixed(2);

        msg.innerText = `${amtValue} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Something went wrong. Try again later.";
    }
});









