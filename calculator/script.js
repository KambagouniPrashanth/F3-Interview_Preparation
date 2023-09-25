

// console.log(num1)
// console.log(num2)
document.getElementById("+").addEventListener("click",add)
document.getElementById("-").addEventListener("click",subtract)
document.getElementById("*").addEventListener("click",mul)
document.getElementById("/").addEventListener("click",div)



function add(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;


    
       let  result=parseFloat(num1)+parseFloat(num2);
       console.log(result)

    document.getElementById("result").value=result;
}

function subtract(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;


    
       let  result=parseFloat(num1)-parseFloat(num2);
        console.log(result)

    document.getElementById("result").value=result;
}
function mul(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;


    
       let  result=parseFloat(num1)*parseFloat(num2);
        console.log(result)

    document.getElementById("result").value=result;
}
function div(){
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;


    
       let  result=parseFloat(num1)/parseFloat(num2);
        console.log(result)

    document.getElementById("result").value=result;
}

           
          
           
            





        