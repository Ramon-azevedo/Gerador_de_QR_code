const tudo = document.querySelector('.tudo');
const codeForm = document.querySelector('#form input');
const bot = document.querySelector('#bot');
const qr = document.querySelector('#qr img')
const qrCodeInputValue = codeForm.value;

function clickbut() {
    
    const qrCodeInputValue = codeForm.value;

    if (!qrCodeInputValue) {
        return;
    }

    bot.innerHTML = 'Gerando QR Code...'

    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qr.addEventListener('load', () => {
        tudo.classList.add('qr');
        bot.innerHTML = 'Qr Code gerado!'
    });

    

    
}

codeForm.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
         clickbut()   
    }
    });


bot.addEventListener('click', () => {
    clickbut()
})


codeForm.addEventListener('keyup', () => {
    if (!qrCodeInputValue) {
        tudo.classList.remove('qr');
        bot.innerHTML = 'Gerar QR Code'
    }
    });