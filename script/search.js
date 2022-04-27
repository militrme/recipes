const form = document.getElementById('form'),
    body = document.body,
    aaa = document.getElementsByTagName('a'),
    input = document.getElementById('input');

function find() {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let text = input.value;

        for (i = 0; i < aaa.length; i++) {
            aaa[i].classList.remove('good')
        }

        input.value = '';

        if (text < 1) {
            alert('Вы ничего не написали.')
        } else {
            for (i = 0; i < aaa.length; i++) {
                aaa[i].classList.remove('good')
    
                if (aaa[i].textContent.includes(text)) {
                    aaa[i].classList.add('good')
                    aaa[i].scrollIntoView({block: 'center', behavior: 'smooth'});
                    input.value = '';
                }
            }; 
        }
    });
};

find();