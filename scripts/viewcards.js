let cards = JSON.parse(localStorage.getItem('cards'));

const template = document.getElementById('card-template');
const content = template.content;

cards.forEach((card, index) =>{
    
    let cardview = document.importNode(content, true);
    cardview.querySelector('.to-text').textContent = card.to;
    cardview.querySelector('.from-text').textContent = card.from;
    cardview.querySelector('.title-text').textContent = card.title;
    cardview.querySelector('.subtitle-text').textContent = card.subtitle;
    cardview.querySelector('.message-text').textContent = card.message;


    let deletebutton = cardview.querySelector('.delete-btn');
    deletebutton.addEventListener('click', function(){
        cards.splice(index,1);
        localStorage.setItem('cards', JSON.stringify(cards));
        deletebutton.parentNode.parentNode.remove();
    });
    document.getElementById('card-list').appendChild(cardview);

});