document.addEventListener('keypress', (e) => {
    var key = e.key;
    var code = e.code;  

    // cara 1
    // document.querySelector('.key').innerText += key;

    // cara 2
    var keyClass = document.querySelector('.key');
    keyClass.innerText += key;
})

// Selain keypress ada keydown dan keyup
// keydown = dipencet lebih lama
// keyup = key dilepas dari keyboard