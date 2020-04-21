


const inp = document.getElementById('file-2');
const anylyze = document.getElementById('anylyze');


const textLeft = document.getElementById('left');
const symbolsTable = document.querySelector('.right table');
const choose = document.getElementById('choose');
const noFile = document.getElementById('noFile');
anylyze.addEventListener('click', function (e) {
    showFile(inp);



})

function showFile(inp) {
    let text;
    let symbols;
    let quantitySymbols = [];
    choose.style.color = '#fff6fe';
    noFile.style.display = 'none';
    if (inp.files.length === 0) {
        getText('<h2>Файл не выбран</h2>');
        symbolsTable.innerHTML = '';
        choose.style.color = 'red';
        noFile.style.display = 'block';


    } else {
        console.log(inp.value);
        let file = inp.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
            console.log(reader.result[0]);
            text = reader.result.split('');

            symbols = [... new Set(text)];

            for (let i = 0; i < symbols.length; i++) {
                let quantity = 0;
                for (let j = 0; j < text.length; j++) {
                    if (symbols[i] === text[j]) {
                        quantity++;
                    }
                }
                quantitySymbols.push({
                    symbols: symbols[i],
                    quantity: quantity
                });

            }
            getText(reader.result);
            getSymbols(quantitySymbols);
        }
    }


}
inp.addEventListener('change', function (e) {
    choose.style.color = '#fff6fe';
    noFile.style.display = 'none';
})

function getText(text) {
    textLeft.innerHTML = `<div id="content">${text}</div>`;
}

function getSymbols(quantitySymbols) {
    symbolsTable.innerHTML = '';
    quantitySymbols.sort((a, b) => b.quantity - a.quantity)
    symbolsTable.innerHTML = `<th>№</th><th>Символ</th><th>Количество</th>`;
    for (let i = 0; i < quantitySymbols.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${i + 1}</td><td>${quantitySymbols[i].symbols}</td><td>${quantitySymbols[i].quantity}</td>`;
        symbolsTable.appendChild(tr);
    }
}














//////////////////////////////////////////////////////////////////////////////////////
; (function (document, window, index) {
    'use strict';
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));