let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenValue = '';
let history = '';
let answerHis = [];
let operationHis = [];
let singleHis = 0;
let selectItem
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(e);
        if (buttonText == 'c') {
            history = screenValue;
            operationHis.push(history);
            screen.value = '';
            screenValue = '';
        }
        else if (buttonText == '←') {
            buttonText = screenValue;
            let str = String(screenValue);
            str = str.slice(0, -1);
            screen.value = str;
            screenValue = str;
            // console.log(str)
        }

        else if (buttonText == '=') {
            let check = screenValue;
            if (check.includes('%')) {
                check = check.split('%')
                let a = check[0];
                let b = check[1]
                check = (a / b) * 100;
                screen.value = check;
                screenValue = check;
                // console.log(check)
            }
            else {
                // console.log('no')
            }
            screen.value = eval(screenValue);
            answerHis.push(screen.value);
        }

        else if (buttonText == 'A his') {
            console.log(answerHis)
            screen.value = answerHis;
            screenValue = answerHis
        }
        else if (buttonText == 'O his') {
            screenValue = operationHis;
            screen.value = operationHis;
            console.log(operationHis)
        }
        else if (buttonText == 'H') {
            // console.log(history)
            screen.value = history;


        }
        else if (buttonText == 'S his') {
            singleHis++;
            if (singleHis > answerHis.length) {
                screen.value = "no history"
                return;
            }
            screenValue = answerHis[answerHis.length - singleHis];
            screen.value = screenValue
            // console.log(screenvalue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

// keyboard crontroler.

let numString = '';
document.getElementsByTagName("body")[0].addEventListener('keydown', (e) => {
    let keyText = e.key;
    // console.log(e);

    function enteringKeys() {
        screen.value = keyText;
        screenValue = screen.value;
        numString = numString.concat(screenValue);
        screen.value = numString;
        screenValue = numString;
    }

    function style(keyText) {
        // console.log(buttons);
        for (item of buttons) {
            if (item.innerText == keyText) {
                // item.click()
                // console.log("outer",item);
                item.style.background = "rgb(77, 94, 252)"
                // selectItem = item
                function styleOut() {
                    item.style.background = "rgb(171, 253, 255)"

                }
                const callback = styleOut
                setTimeout(callback, 2000)
            }
        }
    }

    if (keyText == '1' || keyText == '2' || keyText == '3' || keyText == '4' || keyText == '5' || keyText == '6' || keyText == '7' || keyText == '8' || keyText == '9' || keyText == '0' || keyText == '%' || keyText == '*' || keyText == '-' || keyText == '+' || keyText == '/' || keyText == '.') {
        enteringKeys();
        style(keyText);
    }

    else if (keyText == 'c' || keyText == 'C') {
        history = screenValue;
        screenValue = '';
        screen.value = '';
        numString = '';
    }
    else if (keyText == 'Enter') {
        let check = screenValue;
        if (check.includes('%')) {
            check = check.split('%')
            let a = check[0];
            let b = check[1]
            check = (a / b) * 100;
            screen.value = check;
            screenValue = check;
        }
        else {
            // console.log('no')
        }
        screen.value = eval(screenValue);

    }
    else if (keyText == 'Backspace') {
        keyText = screenValue;
        let str = screenValue;
        str = str.slice(0, -1);
        screen.value = str;
        screenValue = str;
    }
    else if (keyText == 'h' || keyText == 'H') {
        // console.log(history);
        screen.value = history;
    }
    else {
        console.log('error')
    }
})

