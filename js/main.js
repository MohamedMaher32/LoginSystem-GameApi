// ******************* signup page *************************//
let signupPage = document.querySelector(".sginUpForm")
let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let myBtn = document.getElementById("myBtn")
let alertSuccess = document.getElementById("alertSuccess")
let alertWrong = document.getElementById("alertWrong")
let wrongName = document.getElementById("wrongName")
let wrongEmail = document.getElementById("wrongEmail")
wrongPass = document.getElementById("wrongPass")
let go = document.getElementById("Go")
let userList = []
if (localStorage.getItem("userList") != null) {
    userList = JSON.parse(localStorage.getItem("userList"))
}
myBtn.addEventListener("click", add)
function add() {
    if (validName() == true && validEmail() == true && validPassword() == true) {
        let result = userList.find((x) => {
            return x.email.toLowerCase() == emailInput.value.toLowerCase()
        })
        if (result == undefined) {
            let user = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            userList.push(user)
            localStorage.setItem("userList", JSON.stringify(userList))
            alertWrong.classList.replace("d-block", "d-none")
            alertSuccess.classList.replace("d-none", "d-block")
            clearSinupForm()
        }
        else {
            alertWrong.classList.replace("d-none", "d-block")
            alertSuccess.classList.replace("d-block", "d-none")
        }
    }
}
function clearSinupForm() {
    nameInput.value = ""
    emailInput.value = ""
    passwordInput.value = ""
    nameInput.classList.remove("is-valid")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
}
go.addEventListener("click", () => {
    loginPage.classList.remove("d-none")
    signupPage.classList.add("d-none")
})
nameInput.addEventListener("blur", validName)
function validName() {
    let reg = /^[a-zA-Z]{3,10}[0-9]?$/
    if (reg.test(nameInput.value) == true) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        wrongName.classList.add("d-none")
        return true
    }
    else {
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        wrongName.classList.remove("d-none")
        return false
    }
}
emailInput.addEventListener("blur", validEmail)
function validEmail() {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (reg.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        wrongEmail.classList.add("d-none")
        return true
    }
    else {
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        wrongEmail.classList.remove("d-none")
        return false
    }
}
passwordInput.addEventListener("blur", validPassword)
function validPassword() {
    let reg = /^[a-zA-Z0-9!@#$%^&*]{3,16}$/
    if (reg.test(passwordInput.value) == true) {
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        wrongPass.classList.add("d-none")
        return true
    }
    else {
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        wrongPass.classList.remove("d-none")
        return false
    }
}
// ******************* login page *************************//
let loginPage = document.querySelector(".loginForm")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginWrong = document.getElementById("loginWrong")
let wrongLOginName = document.getElementById("wrongLOginName")
let wrongLoginPass = document.getElementById("wrongLoginPass")
let myBtn2 = document.getElementById("myBtn2")
let back = document.getElementById("Back")
if (localStorage.getItem("userList") != null) {
    userList = JSON.parse(localStorage.getItem("userList"))
}
myBtn2.addEventListener("click", login)
function login() {
    if (validLoginEmail() == true && validLoginPassword() == true) {
        let result = userList.find((x) => {
            return x.email.toLowerCase() == loginEmail.value.toLowerCase() && x.password.toLowerCase() == loginPassword.value.toLowerCase()
        })
        if (result == undefined) {
            loginWrong.classList.replace("d-none", "d-block")
        }
        else {
            loginWrong.classList.replace("d-block", "d-none")
            gamesPage.classList.remove("d-none")
            loginPage.classList.add("d-none")
            clearLoginForm()
        }
    }
}
function clearLoginForm() {
    loginEmail.value = ""
    loginPassword.value = ""
    loginEmail.classList.remove("is-valid")
    loginPassword.classList.remove("is-valid")
}
back.addEventListener("click", () => {
    loginPage.classList.add("d-none")
    signupPage.classList.remove("d-none")
})
loginEmail.addEventListener("blur", validLoginEmail)
function validLoginEmail() {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (reg.test(loginEmail.value) == true) {
        loginEmail.classList.add("is-valid")
        loginEmail.classList.remove("is-invalid")
        wrongLOginName.classList.add("d-none")
        return true
    }
    else {
        loginEmail.classList.add("is-invalid")
        loginEmail.classList.remove("is-valid")
        wrongLOginName.classList.remove("d-none")
        return false
    }
}
loginPassword.addEventListener("blur", validLoginPassword)
function validLoginPassword() {
    let reg = /^[a-zA-Z0-9!@#$%^&*]{3,16}$/
    if (reg.test(loginPassword.value) == true) {
        loginPassword.classList.add("is-valid")
        loginPassword.classList.remove("is-invalid")
        wrongLoginPass.classList.add("d-none")
        return true
    }
    else {
        loginPassword.classList.add("is-invalid")
        loginPassword.classList.remove("is-valid")
        wrongLoginPass.classList.remove("d-none")
        return false
    }
}
// ******************* games page *************************//
// active siblings links
$(".nav-link").click(function(){
    $(this).addClass("active")
    $(this).parent().siblings().children().removeClass("active")
    $(".navbar-collapse").addClass("d-none")
    $(".navbar-collapse").removeClass("d-block")
})
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").removeClass("d-none")
})
let gamesPage = document.querySelector(".games")
let logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    loginPage.classList.remove("d-none")
    gamesPage.classList.add("d-none")
})
// landing spinner
let loading = document.querySelector(".loading");
// display games
let gameList =[]
async function getGames(type){
   loading.classList.remove("d-none");
   const options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': '7e5459cb8cmsh9e15f0722147d97p16a88cjsn5688b3201589',
         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
       }
     } 
     let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
     let data = await response.json()
     gameList = data
     loading.classList.add("d-none");
     displayGames()
}
getGames("mmorpg")
 function displayGames(){
   let temp = ""
   gameList.forEach((x) => {
       temp += `
     <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
           <div class="card bg-transparent h-100 overflow-hidden item" game-Id="${x.id}">
             <div class="card-body p-3">
               <img src="${x.thumbnail}" class="card-img-top rounded-2" alt="image">
               <div class="row justify-content-between py-3">
                 <span class="card-title col-8">${x.title}</span>
                 <span class="bg-primary rounded-2 col-3 text-center free align-self-center">Free</span>
               </div>
               <p class="card-text text-center text-muted">${x.short_description}</p>
             </div>
             <div class="footer py-2 border-top border-dark row justify-content-between">
               <span class="bg-dark ms-4 py-1 rounded-pill text-center col-4">${x.genre}</span>
               <span class="bg-dark me-4 col-4 py-1 rounded-pill text-center">${x.platform}</span>
             </div>
           </div>
         </div>`
   })
   document.getElementById("myRow").innerHTML = temp
   getId()
}
let navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((x)=>{
        x.addEventListener("click",(g)=>{
        let result = g.target.getAttribute("catogry")
        getGames(result)    
      })
})
// id function
function getId(){
  let items = document.querySelectorAll(".item")
  for(let i=0 ; i<items.length ; i++){
      items[i].addEventListener("click" ,function(){
      let reId = this.getAttribute("game-Id")
      startPage.classList.add("d-none")
      detailsPage.classList.remove("d-none")
      details(reId)
      })
  }
}
// transform between pages
let startPage = document.getElementById("myGames")
let detailsPage = document.getElementById("myInfo")
let closeBtn = document.getElementById("closePage")
closeBtn.addEventListener("click",()=>{
  startPage.classList.remove("d-none")
  detailsPage.classList.add("d-none")
})
// details functions
async function details(id){
  loading.classList.remove("d-none");
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7e5459cb8cmsh9e15f0722147d97p16a88cjsn5688b3201589',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
  let details = await response.json()
  loading.classList.add("d-none");
  displayDetails(details)
}
function displayDetails(response){
  let temp =`<div class="col-md-4 col-sm-12"><img src="${response.thumbnail}" alt="image" class="w-100"></div>
              <div class="col-md-8 col-sm-12">
                <h3 class="pb-2">Title: ${response.title}</h3>
                <h6>Category: <span class="px-2 py-1 bg-info rounded-3 text-dark fw-bold">${response.genre}</span></h6>
                <h6 class="py-2">Platform: <span class="px-2 py-1 bg-info rounded-3 text-dark fw-bold">${response.platform}</span></h6>
                <h6 class="pb-2">Status: <span class="px-2 py-1 bg-info rounded-3 text-dark fw-bold">${response.status}</span></h6>
                <p>${response.description}</p>
                <a href="${response.game_url}" target="_blank" class="btn btn-outline-info text-white mb-5">Show Game</a>
              </div>`
  document.getElementById("myDeatils").innerHTML = temp
}

