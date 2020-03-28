const div = document.getElementById('div');

div.addEventListener('click', function (e) {
    if (e.target.tagName === "A") {
        let conf = confirm("Перейти по ссылке?");
        if (!conf) {
            e.preventDefault();
        }
    }
})