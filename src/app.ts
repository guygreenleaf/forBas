import axios from "axios";

interface Cat {
    id: string;
    url: URL;
    width: Number;
    height: Number;
    breeds: string[];
    favourite?: {}
}

async function fetchData():Promise<Cat>{
    const res = await axios.get<Cat>(
        "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    return res.data;
}

(async ()=> { 
    console.log(await fetchData());
})();