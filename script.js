let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let resultDisplayed = false;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string).toString();
                input.value = string;
                resultDisplayed = true;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
            resultDisplayed = false;
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
                string += value;
                resultDisplayed = false;
            } else if (resultDisplayed && ['+', '-', '*', '/'].includes(value)) {
                string = input.value + value;
                resultDisplayed = false;
            } else {
                string += value;
            }

            let lastChar = string.charAt(string.length - 1);
            let secondLastChar = string.charAt(string.length - 2);

            if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(secondLastChar)) {
                string = string.slice(0, -2) + lastChar;
            }

            input.value = string;
        }
    });
});
