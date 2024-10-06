const container = document.querySelector('.container');
// const URL="contents/" + ;
// I was originally going to have the script read the content directory, but I found out JS cant do server side
// except that it possibly could, only for Chrome, Firefox, and maybe Edge.
function displayImages() {
    for (let i=0; i<XXX.length; i++) {
    }
}

function loadImages(numImages = 10) {
    let i = 0;
    while (i < numImages) {
        fetch('content/' + i + ".html")
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = `${data.message}`
                container.appendChild(img)
            })
        i++;
    }
}

loadImages();

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages();
    }
})