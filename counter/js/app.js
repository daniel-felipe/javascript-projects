//  set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) 
            count--;
        else if (styles.contains('increase'))
            count++;
        else    
            count = 0;

        value.style.color = getTextColor(count);
        value.textContent = count;
    });
});

// get text color
function getTextColor(count) {
    let color = null;

    if (count > 0)
        color = '#50C993';
    else if (count < 0) 
        color = '#F14668';
    else
        color = '#242424';
    
    return color;
}
