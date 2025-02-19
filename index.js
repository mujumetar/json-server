document.getElementById("data-js");
let url = `http://localhost:8000/data`;

async function showData(url) {
    let fetch = fetch(url);
    let resp = await resp.json()
    let data =  console.log(data.id)

    console.log(data.id)
}