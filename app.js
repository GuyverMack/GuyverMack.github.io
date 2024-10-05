const container = document.querySelector('.container');
URL="http://pages.github.com/guyvermack/content/XXX"


function loadImages(numImages = 10) {
    let i = 0;
    while (i < numImages) {
        fetch('XXX')
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