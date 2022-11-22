//JS Nested Ifs

// Username: student@mail.com
// Password: discovery

// let attempts = 3;
// let userName = prompt ("Enter username or email address:").toLowerCase();
// let password = prompt ("Enter password:").toLowerCase();

// function userLogin (userName, password){
//     if (userName == "student@mail.com" && password == "discovery")
//     {
//         alert("Login successful!");
//     }
//     else {
//         attempts = attempts - 1;
//         alert (`Login failed. ${attempts} login attempt(s) left.`);
//         userName = prompt ("Enter username or email address:").toLowerCase();
//         password = prompt ("Enter password:").toLowerCase();

//         if (userName == "student@mail.com" && password == "discovery")
//         {
//             alert("Login successful!");
//         }

//         else {
//             attempts = attempts - 1;
//             alert (`Login failed. ${attempts} login attempt(s) left.`);
//             userName = prompt ("Enter username or email address:").toLowerCase();
//             password = prompt ("Enter password:").toLowerCase();

//             if (userName == "student@mail.com" && password == "discovery")
//             {
//                 alert("Login successful!");
//             }

//             else {
//                 attempts = attempts - 1;
//                 alert (`Login failed. ${attempts} login attempt(s) left.`);
//             }
//         }
//     }
// }
// userLogin (userName, password);

//JS Loops 

let attempts = 3;
let userName = prompt ("Enter username or email address:").toLowerCase();
let password = prompt ("Enter password:").toLowerCase();

while (userName !== "student@mail.com" && password !== "discovery" ){
    attempts--;
    alert(`Login failed. ${attempts} login attempt(s) left.`);
    userName = prompt ("Enter username or email address:").toLowerCase();
    password = prompt ("Enter password:").toLowerCase();
}
if ( userName === "student@mail.com" && password === "discovery"){
    alert("Login successful!");
}
