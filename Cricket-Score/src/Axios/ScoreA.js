import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8084";

export default async function  scoreA(payload) {
    console.log("PAy Load = == ", payload);
    console.log("Axios calledd........");
    const res = await axios.post("/addscoreA",  { score: payload.score, runs: payload.run }, {

        headers: {'Cache-Control': 'no-cache',
        Accept: 'application/json',
        charset: 'UTF-8',
        'Content-Type': 'application/json'}
    })
 
    console.log("data : " ,res.data); 
    return res.data
}