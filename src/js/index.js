const socialShare = document.querySelector('.card__share');
const socialCard = document.querySelector('.card__social');
const makeUnvisible = () => socialCard.classList.remove('card__social--visible');
const toggleVisible = () => socialCard.classList.toggle('card__social--visible');

socialShare.addEventListener('focusout', makeUnvisible);
socialShare.addEventListener('click', toggleVisible);
