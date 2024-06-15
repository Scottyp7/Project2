import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
// hooks are usually named exports rather than default
export async function useData(url) {
    const url = 'https://live-golf-data.p.rapidapi.com/stats?year=2024&statId=186';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '40213f4cf1msh063feedcb071abdp157664jsnff041b1fdcee',
            'x-rapidapi-host': 'live-golf-data.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);}
}