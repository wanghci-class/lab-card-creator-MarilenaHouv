//preview button clicked
document.getElementById('previewform').addEventListener('click', function(){
    let recip = document.getElementById('recip').value;
    let send = document.getElementById('send').value;
    let title = document.getElementById('title').value;
    let sub = document.getElementById('sub').value;
    let message = document.getElementById('message').value;

    document.querySelector('.to-text').textContent = recip;
    document.querySelector('.from-text').textContent = send;
    document.querySelector('.title-text').textContent = title;
    document.querySelector('.subtitle-text').textContent = sub;
    document.querySelector('.message-text').textContent = message;
});

//save button clicked
document.getElementById('submitform').addEventListener('click', function(){
    let newcard = {
        to: document.getElementById('recip').value,
        from: document.getElementById('send').value,
        title: document.getElementById('title').value,
        subtitle: document.getElementById('sub').value,
        message: document.getElementById('message').value
    };

    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(newcard);
    localStorage.setItem('cards', JSON.stringify(cards));
});
