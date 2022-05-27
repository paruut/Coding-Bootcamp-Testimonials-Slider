const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', () => {
    document.querySelector('.img-person').src = './images/image-john.jpg';
    document.querySelector('.tanya-rev').classList.add('hide');
    document.querySelector('.john-rev').classList.remove('hide'); 
});

btnPrev.addEventListener('click', () => {
        document.querySelector('.img-person').src = './images/image-tanya.jpg';
        document.querySelector('.john-rev').classList.add('hide');
        document.querySelector('.tanya-rev').classList.remove('hide');
});