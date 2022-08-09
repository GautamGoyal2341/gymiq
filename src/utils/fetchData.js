// import {env} from 'process'
// import { env } from 'process';
export const excerciseOptions  = {
  method: 'GET',
//   url:   "<url>",
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_SOME_API_KEY
   
  }
};



export const fetchData = async (url,options) => {
    const response  = await fetch(url,options);
const data = await response.json();

return data;    
}