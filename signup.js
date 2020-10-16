const USERNAME = "abc"
const PASSWORDS = "123456"
const DATA = [
    {
        username: "user1",
        passwords: "123123",
        cfpasswords: "123123",

    },
    {
        username: "user2",
        passwords: "456456",
        cfpasswords: "456456",
         
    }
]
localStorage.setItem("wa06_data", JSON.stringify(DATA))

function getId(id) {
    return document.getElementById(id)
}

getId("submit-button").addEventListener("click", submitLogin)

function submitLogin() {
    let username = getId("username-input").value
    let passwords = getId("passwords-input").value
    let cfpasswords = getId("cf-passwords-input").value

    let data = localStorage.getItem("wa06_data")
    console.log(data)

    // let message = ""

//     if (username.trim() != USERNAME ) {
//         message = "Tài khoản không hợp lệ 😦"
//     }
//     else if (passwords != PASSWORDS) {
//         message = "Mật khẩu không hợp lệ 😦"
//     }
//     else {
//         alert("Bạn đã đăng nhập thành công 😄")
//     }
 
   let response = findAccount(username, passwords, cfpasswords)

    if (response.success == true) {
        getId("error-mess").innerText = ""
        alert(response.message)
    } else {
        getId("error-mess").innerText = response.message
    }
}

function findAccount(username, passwords, cfpasswords) {
    let data = localStorage.getItem("wa06_data")
    console.log(data)
    let database = JSON.parse(data)

    for (let item of DATA ) {
        if (item.username == username) {
            if (item.passwords == passwords == cfpasswords) {
                return {success: true, message: "Đăng kí thành công"}
            } else if (cfpasswords = "") {
                return {success: false, message: "Bạn chưa nhập lại mật khẩu"}
            } else {
                return {success: false, message: "Bạn chưa đăng kí thành công"}
            }
        }
    }
    return {success: false, message: "Tài khoản không tồn tại! 😦"}
}