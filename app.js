'use strict';
// api url
const api = 'https://islomapi.uz/api/present/day?region=';

// get elements
const cityName = document.getElementById('city-name');
const inputCity = document.getElementById('input-city');
const span=document.querySelector('.span-city')
const container = document.getElementById('container');

// event listener for select
async function getInput(region) {
    let valueInput = inputCity.value;
    span.innerHTML = `(${valueInput})`;
    // fetching api
    const request = await fetch(api + region);
    const response = await request.json();
    console.log(response);
    document.getElementById('bomdod').textContent = response.times.tong_saharlik;
    document.getElementById('quyosh').textContent = response.times.quyosh; 
    document.getElementById('peshin').textContent = response.times.peshin;
    document.getElementById('asr').textContent = response.times.asr;
    document.getElementById('shom').textContent = response.times.shom_iftor;
    document.getElementById('xufton').textContent = response.times.hufton;


       

}
getInput('Toshkent');

inputCity.addEventListener('change', (e) => {
    getInput(e.target.value);
})
       


