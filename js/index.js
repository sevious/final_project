

function displayTodo() {
    let dataLocalStorage = localStorage.getItem("todos")
    console.log(dataLocalStorage, "==> VALUE LOCAL");
    let dataTodos = JSON.parse(dataLocalStorage)

    let listTodo = ""

    if (dataTodos) {
        
        for (let index = 0; index < dataTodos.length; index++) {
            // const element = array[index];
            listTodo += `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 bg-transparent">
                        <div class="form-check">
                            <input type="checkbox" onchange="setComplete(checked, id)" value="" name="" id=${dataTodos[index].id} aria-label="..." ${dataTodos[index].chekced ? "checked" : ""}>
                        </div>
                    </li>
                    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <div class="form-check">
                            <p class="lead fw-normal mb-0">
                                ${dataTodos[index].name}
                            </p>
                        </div>
                    </li>
            
                    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <button type="button" class="btn btn-danger" onclick=(deleteTodo(${dataTodos[index].id}))>
                            Delete
                        </button>
                    </li>
                </ul>
            `
        }
    }

    // console.log(listTodo);

    document.getElementById("list-todo").innerHTML = listTodo

}

function submitTodo() {
    
    const todo = document.getElementById("add-todo").value

    // console.log(todo, "==> APA");
    let todos = JSON.parse(localStorage.getItem("todos"))
    // console.log(todos, "==> APA");

    if (todos) {
        // console.log("masuk if");
        let inputUser = {
            id: todos[todos.length-1].id + 1,
            name: todo,
            chekced: false
        }
        // console.log(inputUser, "==> apa ini");

        todos.push(inputUser)
    } else {
        console.log("masuk else");
        todos = [{
            id: 0,
            name: todo,
            chekced: false
        }]
    }

    localStorage.setItem("todos", JSON.stringify(todos))

    document.getElementById("add-todo").value = ""

    displayTodo()
}

function setComplete(checked, id) {

    // console.log(checked, "=> VALUE 1");
    // console.log(id," ==> Value 2");

    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.map(el => {
        if (el.id === Number(id)) {
            el.chekced = checked
        }
        return el
    })

    let resultStringfy = JSON.stringify(todos)

    localStorage.setItem("todos", resultStringfy)
    // console.log(todos, "==> INI NEW TODOS AFTER CHECKED");
}

function deleteTodo (id) {
    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.filter(el => el.id !== Number(id))

    // console.log(todos, "==> RESULT DELETE");
    if (todos.length) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }else {
        localStorage.removeItem("todos")
    }

    displayTodo()
}

// var numbers = [];
var portofolio = [
    {id:"home", image:"./img/image1.jpg", note:"Project 1, Image 1, Sikunir 1, Aduh Pusing 1, Nuhun Ah 1"},
    {id:"tipe2", image:"./img/image2.jpg", note:"Project 2, Image 2, Sikunir 2, Aduh Pusing 2, Nuhun Ah 2"},
    {id:"tipe3", image:"./img/image3.jpg", note:"Project 3, Image 3, Sikunir 3, Aduh Pusing 3, Nuhun Ah 3"},
    {id:"home", image:"./img/image1.jpg", note:"Project 4, Image 4, Sikunir 4, Aduh Pusing 4, Nuhun Ah 4"},
    {id:"tipe2", image:"./img/image2.jpg", note:"Project 5, Image 5, Sikunir 5, Aduh Pusing 5, Nuhun Ah 5"},
{id:"tipe3", image:"./img/image3.jpg", note:"Project 6, Image 6, Sikunir 6, Aduh Pusing 6, Nuhun Ah 6"},
{id:"home", image:"./img/image1.jpg", note:"Project 7, Image 7, Sikunir 7, Aduh Pusing 7, Nuhun Ah 7"},
{id:"tipe2", image:"./img/image2.jpg", note:"Project 8, Image 8, Sikunir 8, Aduh Pusing 8, Nuhun Ah 8"},
{id:"tipe3", image:"./img/image3.jpg", note:"Project 9, Image 9, Sikunir 9, Aduh Pusing 9, Nuhun Ah 9"},
{id:"home", image:"./img/image1.jpg", note:"Project 10, Image 10, Sikunir 10, Aduh Pusing 10, Nuhun Ah 10"},
{id:"tipe2", image:"./img/image2.jpg", note:"Project 11, Image 11, Sikunir 11, Aduh Pusing 11, Nuhun Ah 11"},
{id:"tipe3", image:"./img/image3.jpg", note:"Project 12, Image 12, Sikunir 12, Aduh Pusing 12, Nuhun Ah 12"},
{id:"home", image:"./img/image1.jpg", note:"Project 13, Image 13, Sikunir 13, Aduh Pusing 13, Nuhun Ah 13"},
{id:"tipe2", image:"./img/image2.jpg", note:"Project 14, Image 14, Sikunir 14, Aduh Pusing 14, Nuhun Ah 14"},
{id:"tipe3", image:"./img/image3.jpg", note:"Project 15, Image 15, Sikunir 15, Aduh Pusing 15, Nuhun Ah 15"},
{id:"home", image:"./img/image1.jpg", note:"Project 16, Image 16, Sikunir 16, Aduh Pusing 16, Nuhun Ah 16"},
{id:"tipe2", image:"./img/image2.jpg", note:"Project 17, Image 17, Sikunir 17, Aduh Pusing 17, Nuhun Ah 17"},
{id:"tipe3", image:"./img/image3.jpg", note:"Project 18, Image 18, Sikunir 18, Aduh Pusing 18, Nuhun Ah 18"},
{id:"home", image:"./img/image1.jpg", note:"Project 19, Image 19, Sikunir 19, Aduh Pusing 19, Nuhun Ah 19"},
{id:"tipe2", image:"./img/image2.jpg", note:"Project 20, Image 20, Sikunir 20, Aduh Pusing 20, Nuhun Ah 20"}
];

// let i = 1;
// while (i <= 30) {
//   numbers.push(i);
//   i++;
// }

let konten_el = document.getElementById("konten-holder");

portofolio.forEach(port => {
    konten_el.innerHTML += `
    <div class="card m-1" style="width:450px">
        <img class="card-img-top" src="${port.image}" alt="Card image" style="height:250px">
        <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
        </div>
    </div>
  `
})

function show_all() {
  konten_el.innerHTML = "";

    portofolio.forEach(port => {
        konten_el.innerHTML += `
            <div class="card m-1" style="width:450px">
                <img class="card-img-top" src="${port.image}" alt="Card image" style="height:250px">
                <div class="card-body">
                    <h4 class="card-title">John Doe</h4>
                    <p class="card-text">Some example text.</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
                </div>
            </div>
        `
  })
}

function show_ganjil() {
//   let filtered_nums = numbers.filter(num => num % 2 !== 0);

  konten_el.innerHTML = "";

    for (let index = 0; index < portofolio.length; index++) {
        if (portofolio[index].id == "home") {
            // alert("Nani");
            konten_el.innerHTML += `
                <div class="card m-1" style="width:450px">
                    <img class="card-img-top" src="${portofolio[index].image}" alt="Card image" style="height:250px">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            `
        }
    
    }
}

function show_genap() {
//   let filtered_nums = numbers.filter(num => num % 2 === 0);

  konten_el.innerHTML = "";

//   filtered_nums.forEach(num => {
//     konten_el.innerHTML += `
//       <div class="card col-md-3">
//         <div class="card-body">
//           <h4>${num}</h4>
//         </div>
//       </div>
//     `
//   })

  for (let index = 0; index < portofolio.length; index++) {
    if (portofolio[index].id == "tipe2") {
        // alert("Nani");
        konten_el.innerHTML += `
            <div class="card m-1" style="width:450px">
                    <img class="card-img-top" src="${portofolio[index].image}" alt="Card image" style="height:250px">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
        `
    }

}
}