document.getElementById("data-js");
let table = document.getElementById("tbody");

let url = `http://localhost:8000/data/`;

const getUser = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  showdata(data);
  console.log(data);
};

getUser();

function showdata(data) {
  table.innerHTML = "";
  data.map((ele) => {
    table.innerHTML += `
               <tr>
               <td><b>${ele.id}</b></td>
               <td><img src=${ele.pic} alt="" style="width: 50px;"/></td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td><button class="btn btn-danger btn-sm" onclick="del(${ele.id})">🗑️</button></td>
                <td><button class="btn btn-warning btn-sm">✏️</button></td>
            </tr>
        `;
  });
}

async function addition() {
  let user = {
    pic: document.getElementById("pic").value,
    id: String(Math.round(Math.random() * 1000 + 1)),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers:{
        "Content-Type": "application/json",
    }
  });
  const data = await resp.json();

  getUser();
}

async function del(id) {

// let d = String(id);

// console.log(typeof(d));

const resp = await fetch(`http://localhost:8000/data/${id}`, {
    method: "DELETE",
  });
  console.log(resp);
}
