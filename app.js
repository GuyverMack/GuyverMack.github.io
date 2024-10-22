const fileArray = ["arguments_(PowerShell)_1131011fa4868085836bf797d34f8127.html","Asymptotic_notation_1131011fa4868062a9b8e537509e033e.html","async()_2f586bd4b3b64e3d8e77104e2ebf89b7.html","Bit_Banging_1131011fa48680adb0e3dd98dbc44972.html","class_1121011fa48680d096addcb2a9e920e1.html","Closure_1121011fa48680b4811feaf76ed60772.html","comments_1151011fa48680ab892ddba1be223bf4.html","Complexity_4c3b756ddf6944d9b92ceebafe5a5389.html","constructor_1121011fa4868002a598e836cd45ae4e.html","Data_Structures_1121011fa486800d8a04d405ef9ec29f.html","Document_Object_Model_(DOM)_1121011fa48680408050c7be2d93631f.html","Fetch_1121011fa48680ca8260e6f06271defe.html","Function_1121011fa48680348e48d95b04cde541.html","GET_1121011fa486802ab639f7b2bc3fb3fb.html","h1_(CSS_selector)_1141011fa486805d93d0cb1da2136077.html","Hash_table_1121011fa48680409fdfefd7c034821e.html","Hello_world_1151011fa4868009aadff1db39e7037b.html","IIC_1131011fa4868002b4e4da3cdb7605e3.html","I?C_1131011fa48680228a6cf78ada4cba5a.html","JS_Style_Guidelines_1121011fa48680cbbee9d7c4f8e507eb.html","Method_1121011fa48680a9ab4af1a6243e4daf.html","Namespace_1121011fa486806e9ab2f0d15b39409f.html","Node_js_1121011fa486800f8eb9d0525b2f1815.html","Object_1121011fa4868096ab40e3d950efd042.html","pexels-thisisengineering-3861969.jpgPOST_1121011fa48680928472f822db1a4f3a.html","print_1141011fa48680e29eecd452adf3e31a.html","promise_c51419ad971144479744746ae0ad7bd9.html","Property_1121011fa48680b8ba6bea17c951a17d.html","Pulse_Width_Modulation_(PWM)_1131011fa486806ea0cbf410eab3b2f4.html","Quicksort_1131011fa48680b59453e1f05925049f.html","Regular_expressions_(Regex)_1121011fa48680dba51be1db80696f96.html","SPI_1131011fa48680d89ab7f52f75471ef4.html","this_(keyword)_1131011fa486805aa0f4dbfcb24c0952.html","Try?Catch_1121011fa48680a097acd6c5b5c93058.html","UART_1131011fa48680c49578cce48c7bd65c.html","XML_1121011fa48680d38658f48888eacd81.html","[Example_Page]_1121011fa48680728481e6fe42a34dee.html","[Flowchart_Example]_1121011fa4868022a3b0c5f336a3db60.html"];

let fileIndex = 0;

function loadNextFile() {
    if (fileIndex >= fileArray.length) {
      fileIndex = 0;
    }
      
      const iframe = document.getElementById("contentFrame");
      
      if (iframe) {
        const fileName = fileArray[fileIndex];
        const fileContent = document.createElement('div');
        fileContent.innerHTML = `
          <iframe src="content/Coding_Study_Wiki_acb5908e8a664382af6667917c0e6cf2/${fileName}" frameborder="0" width="100%" height="100%"></iframe>
        `;
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        iframeDocument.body.appendChild(fileContent);

        fileIndex++;
      }
} // end function loadNextFile

      document.addEventListener("DOMContentLoaded", () => {
      const iframe = document.getElementById("contentFrame");
      if (!iframe) {
        console.error("Content frame not found");
          return;
        }

        iframe.onload = () => {
            const iframeWindow = iframe.contentWindow;
            const iframeDocument = iframe.contentDocument || iframeWindow.document;

            iframeWindow.addEventListener('scroll', () => {
              const scrollPosition = iframeDocument.documentElement.scrollTop + iframeDocument.documentElement.clientHeight;
              const scrollHeight = iframeDocument.documentElement.scrollHeight;
              
              if (scrollHeight -scrollPosition < 300) {
                loadNextFile();
              }
            });
            loadNextFile();
            loadNextFile();
          }; // end iframe.onLoad()
          iframe.src - 'about:blank';
        });


