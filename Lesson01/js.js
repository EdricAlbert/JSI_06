const getData = () => {
    const request = fetch("https://reqres.in/api/users?page=2");
    console.log(request);
    request.then((response) => {
        return response.json()
    }).then((data) => {
        let users = data.data;
        renderUser(users);
    }).catch((err) => {
        console.log(err);
    })
}

const renderUser = (users) => {
    for (let i = 0; i<users.length; i++){
        let info = users[i];
        const father = document.getElementById('user');
        let child1 = document.createElement('div');
            child1.className = 'child1';
        let img = document.createElement('img');
            img.src = info.avatar;
        let name = document.createElement('h2');
            name.innerHTML = info.first_name + ' ' + info.last_name;
        let email = document.createElement('p');
            email.innerHTML = info.email;
        child1.appendChild(img);
        child1.appendChild(name);
        child1.appendChild(email);
        father.appendChild(child1);
    }
}

getData();  
