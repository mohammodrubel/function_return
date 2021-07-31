
function functionReturn (){
    var sum =0
        for (var i=0; i<arguments.length;i++){
            sum+= arguments[i]
        }
    return sum
}
var result= functionReturn(23,4,56)
console.log(result)

function myFunction (name,email){
    return{
        name:name,
        email:email
    }
}
var result = (myFunction('Mohammod rubel','mohammodrubel007@gmail.com'))
console.log(result)