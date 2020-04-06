const block = document.querySelectorAll('.block');
let blockFlag = 0;
const area = document.getElementById('area');
let n;
area.addEventListener('click', function (e) {
    n = Number(e.target.getAttribute('id'));
    if (n < 5) {
        if (blockFlag === 0) {

            document.addEventListener('mousemove', mouseTracking);
            blockFlag = 1;
            
        } else {

            
            document.removeEventListener('mousemove', mouseTracking);
            blockFlag = 0;
            proverca();
        }
    }


})
let cordsArea = area.getBoundingClientRect();

const mouseTracking = function (e) {
   
    if (e.clientX > cordsArea.left && e.clientX < cordsArea.right && e.clientY > cordsArea.top && e.clientY < cordsArea.bottom) {
        
        block[n].style.left = `${e.clientX - 10}px`;
        block[n].style.top = `${e.clientY - 10}px`;
    }

}

function proverca() {
    let cordsBlock = [];
    for (let i = 0; i < block.length; i++) {
        cordsBlock.push(block[i].getBoundingClientRect())


    
            block[i].style['background-color'] = '';
        
        

    }
    for (let j = 0; j < block.length; j++) {
        
        for (let i = 0; i < block.length; i++) {

            if (i === j) {
                continue;
            }
            if ((cordsBlock[j].left > cordsBlock[i].left - 19 && cordsBlock[j].left < cordsBlock[i].right) && (cordsBlock[j].top > cordsBlock[i].top - 19 && cordsBlock[j].top < cordsBlock[i].bottom)) {
                block[i].style['background-color'] = 'red';
                block[j].style['background-color'] = 'red';
            }
        }
    }
}
