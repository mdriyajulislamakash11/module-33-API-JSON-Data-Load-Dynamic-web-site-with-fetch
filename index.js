function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser(data))
};

function displayUser(data){
    const ul = document.getElementById("users-list");

    for(let user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

