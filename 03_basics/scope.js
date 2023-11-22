function one(){
    const userName = "paras";
    function two(){
        const website = "test"
        console.log(userName);
    }
    two()
    // console.log(secondUser);
}
one()


if(true){
    const userName = "Paras";
    if(userName==="Paras"){
        const website = " youtube";
        console.log(userName+website)
    }
    // console.log(website)
}
// console.log(userName)

// +++++++++++++++++++intersting+++++++++++++++++++++++++
console.log(addOne(4,5));

function addOne(a,b){
    return a+b
}

// console.log(addTwo(5)); this declaration of function expression with variable
const addTwo = function(num){
    return num+2
}

