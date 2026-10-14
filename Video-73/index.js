function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (views / 1000).toFixed(0) + "K";
    }

    let htmlCard = `
    <div class="card">
        <div class="left">
            <div class="thumbnail">
                <img src="${thumbnail}" alt="thumbnail">
            </div>
            <div class="duration">
                <button>${duration}</button>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <p>${title}</p>
            </div>
            <div class="metadata">
                <span class="channel-name">${cName}</span> • 
                <span class="views">${viewStr} views</span> • 
                <span class="months-old">${monthsOld} months ago</span>
            </div>
        </div>
    </div>`;

    // Correctly targets the .container div from your HTML
    document.querySelector(".container").innerHTML += htmlCard;
}

// Example Execution
createCard(
    "Redux in one video | SIGMA WEB DEVELOPMENT COURSE TUTORIAL - #120", 
    "CodeWithHarry", 
    750000, 
    2, 
    "45:15", 
    "https://ytimg.com"
);
