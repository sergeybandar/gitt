let rmb = document.getElementById("rmb");
const block = document.getElementById('Block');
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    rmb.style.left = `${e.pageX}px`;
    rmb.style.top = `${e.pageY}px`;
    if ((window.innerWidth - e.pageX) < rmb.offsetWidth) {
        rmb.style.left = `${e.pageX - rmb.offsetWidth}px`;

    }
    if ((window.innerHeight - e.pageY) < rmb.offsetHeight) {
        rmb.style.top = `${e.pageY - rmb.offsetHeight}px`;
    }
    block.style.display = "block";

})
window.addEventListener('click', function (e) {
    if (e.target === block) {
        block.style.display = "none";
    }

});
rmb.addEventListener('click', function (e) {
    if (e.target.tagName === "P") {
        alert(e.target.innerText);
    }
})
