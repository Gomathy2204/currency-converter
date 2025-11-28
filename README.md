# currency-converter
🪙 Currency Converter (HTML • CSS • JavaScript)

A simple and responsive Currency Converter Web App built using HTML, CSS, and Vanilla JavaScript.
It uses the free open.er-api.com public API to fetch real-time exchange rates — no API key required.

📌 Features

✔️ Convert any currency to another in real-time
✔️ Uses a free & public exchange rate API
✔️ Dropdown country selector auto-filled from country list
✔️ Automatic flag update based on selected currency
✔️ Validates amount input
✔️ Clean UI and easy-to-understand code
✔️ Beginner-friendly JavaScript async/await example

🛠️ Tech Stack

HTML – structure

CSS – styling

JavaScript – logic, API calls

Exchange Rate API (open.er-api.com) – for live rates

🔗 API Used
https://open.er-api.com/v6/latest/{CURRENCY_CODE}

Example:
https://open.er-api.com/v6/latest/USD

No API key required.

📸 Features Explained
🔄 Real-Time Conversion

Fetches live rates using:

const URL = `https://open.er-api.com/v6/latest/${fromCurr.value}`;

🚩 Auto Flag Update

Updates country flag when dropdown changes using:

https://flagsapi.com/{country_code}/flat/64.png

📤 User Input Validation

If user enters empty or invalid value, defaults to 1.

🚀 How to Run

Download or clone the repository

Open index.html in your browser

Start converting currencies instantly!
