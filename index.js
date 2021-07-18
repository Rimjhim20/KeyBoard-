const buttons = document.querySelectorAll('.keyboard_wrapper .key .row button'),
    keys = document.querySelectorAll('.keyboard_wrapper .key'),
    display = document.querySelector('.keyboard_wrapper .display');

if (buttons && keys && display) {
    let capsLockMode = false;
    buttons.forEach(key => {
        key.addEventListener('click', function () {
            if (this.classList.contains('caps')) {
                this.classList.toggle('active');
                keys.classList.toggle('uppercase');
                capsLockMode ? capsLockMode = false : capsLockMode = true;
            }
            else if (this.classList.contains('enter')) {
                    display.innerText += "\n";    
            }
            else if (this.classList.contains('tab')) {
                display.innerText += "\t";    
        }
           
            else if (this.classList.contains('backspace')) {
                let str = display.innerText;
                display.innerText = str.substring(0, (str.length - 1));
            } else {
                if (capsLockMode) {
                    display.innerText += this.dataset.key.toUpperCase();
                } else {
                    display.innerText += this.dataset.key.toLowerCase();
                }
            }

        });
    });
}