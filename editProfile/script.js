const fullname= document.getElementById('name')
const email = document.getElementById("email")
const about = document.getElementById("about")
const profile= document.getElementById("profileImg")
const registerForm=document.getElementById('register')
let users= JSON.parse(localStorage.getItem('Users')) || []
const userContainer=document.getElementById("users")
window.addEventListener("DOMContentLoaded", renderUsers(users))
registerForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    let new_user={
        name: fullname.value,
        email: email.value,
        about: about.value,
        id:Date.now(),
        profileImg: profile.files[0].name
    }
    users.push(new_user)
    localStorage.setItem("Users", JSON.stringify(users))
    alert("New User added")

}
)

function renderUsers(user){
    userContainer.innerHTML=""
    user.forEach((element) =>{
        let link =document.createElement('a')
        link.textContent= element['name']
        link.href=`singleuser.html?id=${element['id']}`
        link.target="_blank"
        userContainer.appendChild(link)
    })
}

