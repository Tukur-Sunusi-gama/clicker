

coin.addEventListener('click', () => {

    if (_limit != 0) {
     quantity += upgrade
     _limit -= upgrade
     score.innerHTML = quantity
     limit.innerHTML = _limit
     progress.value = _limit
    } 
    else{
        limit.style.color = 'red' 
    } 
})

if (_limit <= 0) {
    document.classList.add('showItem')
}
hide.addEventListener('click', () => {
    if (_limit < 1000) {
        back.classList.add('hideItem')
        console.log('clicked');
    }
      
})
 
