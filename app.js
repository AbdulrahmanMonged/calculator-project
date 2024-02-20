const h1s = document.querySelector("#result")
const [result1, operation, result2] = h1s.children;
const nums = document.querySelectorAll(".num")
const oprs = document.querySelectorAll(".opr")
const equal = document.querySelector('#equal')
toggeled = false
ans = 0

for(let num of nums) {
    num.addEventListener('click', () => {
        if(!operation.innerText) {
            if(result1.innerText != "Math Error" && !toggeled) {
    result1.innerText += num.innerText
    result1.innerText = +result1.innerText
        } else {
            result1.innerText = num.innerText;
            toggeled = false;
        }
        } else {
            result2.innerText += num.innerText
            result2.innerText = +result2.innerText
        }
})
}

for(let opr of oprs) {
    opr.addEventListener('click', () => {
    operation.innerText = opr.innerText
    result1.classList.toggle("h6")
})
}

equal.addEventListener('click', () => {
    if(operation.innerText) { 
        switch(operation.innerText) {
            case "+": { 
                result1.innerText = +result1.innerText + +result2.innerText;
                result1.innerText = +result1.innerText 
                break;
        }
            case "-": {
                result1.innerText = +result1.innerText - +result2.innerText;
                result1.innerText = +result1.innerText 
                break;
        }
            case "*": {
                result1.innerText = +result1.innerText * +result2.innerText;
                result1.innerText = +result1.innerText 
                break;
        }
            case "/": {
                result1.innerText = +result1.innerText / +result2.innerText;
                result1.innerText = +result1.innerText 
                break;
        }
        }
        toggeled = true;
        result2.innerText = "";
        operation.innerText = "";
        result1.classList.toggle("h6")
       if (result1.innerText === "NaN") result1.innerText = "Math Error";
    }
})
