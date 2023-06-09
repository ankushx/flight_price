require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;


//const axios = require('axios');

// app.get('/flight-prices', async (req, res) => {
  
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
//     const { source, destination, date } = req.query;
//     const apiKey = process.env.API_KEY;
//    const url = `https://api.example.com/flights?source=${source}&destination=${destination}&date=${date}&apiKey=${apiKey}`;


//     // try {

//     //   const options = {
//     //     method: 'GET',
//     //     url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
//     //     params: {
//     //       source: 'LOND',
//     //       destination: 'NYCA',
//     //       date: '<REQUIRED>',
//     //       adults: '1',
//     //       currency: 'USD',
//     //       countryCode: 'US',
//     //       market: 'en-US'
//     //     },
//     //     headers: {
//     //       'X-RapidAPI-Key': '58583c9b1dmshb6e081b7c55425fp1cab7ejsn33a303c01405',
//     //       'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
//     //     }
//     //   };
          
    
//     const response = await axios.get(url);
//     const { data } = response;

//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching flight prices:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });


app.get('/flight-prices', async (req, res) => {
  try {
    const { source, destination, date } = req.query;
    const apiKey = process.env.API_KEY;
    const url = `https://api.example.com/flights?source=${source}&destination=${destination}&date=${date}&apiKey=${apiKey}`;

    const response = await axios.get(url);
    const { data } = response;

    res.json(data);
  } catch (error) {
    console.error('Error fetching flight prices:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// const options = {
//   method: 'GET',
//   url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/',
//   headers: {
//     'X-RapidAPI-Key': '58583c9b1dmshb6e081b7c55425fp1cab7ejsn33a303c01405',
//     'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

