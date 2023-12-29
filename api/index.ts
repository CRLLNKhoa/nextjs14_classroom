import { apiOptions } from "@/types";

const option:apiOptions = {
    next: {revalidate: 30},
    headers: {
        "X-Auth-Token": process.env.API_TOKEN_FOOTBALL,
        "Content-Type": "application/json",
        "Origin": 'http://localhost:3000' 
    }
}

export const getMathchesFootball = async () => {
    const matchData = await fetch("https://api.football-data.org/v4/matches",option)
    return matchData.json()
}