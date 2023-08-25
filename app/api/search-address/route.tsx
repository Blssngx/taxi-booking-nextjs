import { NextResponse } from "next/server";

// https://api.mapbox.com/search/searchbox/v1/suggest?q=cape&language=en&country=za&session_token=079f01f0-1ae8-4da1-88a2-276c26d0dafb&access_token=pk.eyJ1IjoiYmxzc25neCIsImEiOiJjbGpzbDZxbGQwYzhzM2ZudWFmN2NwcXU0In0.lK9n7KaKz2VhTkTQby0Dow
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any) {

    const {searchParams}=new URL(request.url);

    const searchText=searchParams.get('q');

    const res=await fetch(BASE_URL+'?q='+searchText+'&language=en&country=za&session_token=079f01f0-1ae8-4da1-88a2-276c26d0dafb'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult=await res.json();
    return NextResponse.json(searchResult)
    
}