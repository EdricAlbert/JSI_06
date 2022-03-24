// // let nameInput = prompt("Enter Your Name");
// // console.log(nameInput);

// // setTimeout(() => {
// //     let nameInput = prompt("enter name");
// //     console.log(nameInput)
// // }, 0);

// // let a = 1;
// // let b = 2;
// // console.log(a + b);

// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let diLayNuoc = true;
//         if (diLayNuoc){
//             resolve("Nuoc ve r nè");
//         } else {
//             reject("Ko có nước")
//         }
//     }, 3000);
// })

// console.log("ngủ")

// myPromise
//     .then(function(data){
//         return data + ", đi nâu cơm đi";
//     }). then(function(res){
//         console.log(res)
//     })
//     .catch(function (err){
//         console.log(err);
//     })
// console.log(myPromise)

const getData = () => {
    const request = fetch("https://reqres.in/api/users?page=2");
    console.log(request);
    request.then((response) => {
        return response.json();
    }).then((data) => {
        let users = data.data;
        renderUser(users);
    }).catch((err)=>{
        console.log(err);
    })
}

const renderUser = (users) => {
    let result = "";
    for (let i = 0; i < users.length(); i++){
        console.log(users[i]);
    }
}

getData();