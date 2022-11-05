function creategame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/${player1}.svg" alt="Colombia icon">
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="Brasil flag">
    </li>
    `
}

let delay = -0.5;
function createcard(date, day, games){
    delay = delay + 0.5;
    return`
    <main id="cards">

    <div class="card" style="animation-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
            ${games}
        </ul>

    </div>
</main>`
}




document.querySelector('#cards').innerHTML =  
        createcard("24/11","QUINTA",creategame("brazil","10:00","colombia"))+
        createcard("24/11","QUINTA",creategame("brazil","16:00","colombia")+creategame("brazil","16:00","colombia"))+
        createcard("24/11","QUINTA",creategame("brazil","20:00","colombia"))