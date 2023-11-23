const user = {
    userName: "Paras",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`)
    }
}

user.welcomeMessage();


function coffee() {
    console.log(this)
}

coffee()

const chai = () => {
    console.log(this)
}

chai()