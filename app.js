const container = document.querySelector('.container');
// const URL="contents/" + ;
// I was originally going to have the script read the content directory, but I found out JS cant do server-side,
// except that it possibly could, only for Chrome, Firefox, and maybe Edge.
const fileArray = ["arguments (PowerShell) 1131011fa4868085836bf797d34f8127.html","Asymptotic notation 1131011fa4868062a9b8e537509e033e.html","async() 2f586bd4b3b64e3d8e77104e2ebf89b7.html","Bit Banging 1131011fa48680adb0e3dd98dbc44972.html","class 1121011fa48680d096addcb2a9e920e1.html","Closure 1121011fa48680b4811feaf76ed60772.html","comments 1151011fa48680ab892ddba1be223bf4.html","Complexity 4c3b756ddf6944d9b92ceebafe5a5389.html","constructor 1121011fa4868002a598e836cd45ae4e.html","Data Structures 1121011fa486800d8a04d405ef9ec29f.html","Document Object Model (DOM) 1121011fa48680408050c7be2d93631f.html","Fetch 1121011fa48680ca8260e6f06271defe.html","Function 1121011fa48680348e48d95b04cde541.html","GET 1121011fa486802ab639f7b2bc3fb3fb.html","h1 (CSS selector) 1141011fa486805d93d0cb1da2136077.html","Hash table 1121011fa48680409fdfefd7c034821e.html","Hello world 1151011fa4868009aadff1db39e7037b.html","IIC 1131011fa4868002b4e4da3cdb7605e3.html","I?C 1131011fa48680228a6cf78ada4cba5a.html","JS Style Guidelines 1121011fa48680cbbee9d7c4f8e507eb.html","Method 1121011fa48680a9ab4af1a6243e4daf.html","Namespace 1121011fa486806e9ab2f0d15b39409f.html","Node js 1121011fa486800f8eb9d0525b2f1815.html","Object 1121011fa4868096ab40e3d950efd042.html","pexels-thisisengineering-3861969.jpgPOST 1121011fa48680928472f822db1a4f3a.html","print 1141011fa48680e29eecd452adf3e31a.html","promise c51419ad971144479744746ae0ad7bd9.html","Property 1121011fa48680b8ba6bea17c951a17d.html","Pulse Width Modulation (PWM) 1131011fa486806ea0cbf410eab3b2f4.html","Quicksort 1131011fa48680b59453e1f05925049f.html","Regular expressions (Regex) 1121011fa48680dba51be1db80696f96.html","SPI 1131011fa48680d89ab7f52f75471ef4.html","this (keyword) 1131011fa486805aa0f4dbfcb24c0952.html","Try?Catch 1121011fa48680a097acd6c5b5c93058.html","UART 1131011fa48680c49578cce48c7bd65c.html","XML 1121011fa48680d38658f48888eacd81.html","[Example Page] 1121011fa48680728481e6fe42a34dee.html","[Flowchart Example] 1121011fa4868022a3b0c5f336a3db60.html"];
const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
const iframe = document.getElementById("contentFrame");
let fileIndex = 0;

function loadNextFile() {
  if (fileIndex < fileArray.length) {
    const iframe = document.getElementById("contentFrame");
    const loader = document.getElementById("loading");
    
    if (iframe && loader) {
      setTimeout(() => {
        iframe.src = "content/" + fileArray[fileIndex];
        fileIndex++;
        
        if (fileIndex < fileArray.length) {
          loader.style.display = "block";
        } else {
          loader.style.display = "none";
        }
      }, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loading");
  if (!loader) {
    console.error("Loading element not found");
    return;
  }

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadNextFile();
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(loader);

  // Load the first file immediately
  loadNextFile();
});