const containerEl = document.querySelector(".home-text");
const careers = ["Web Developer","Freelancer","Story Writter"];

let careersindex = 0;
let charindex = 0;

updatetext();
function updatetext() {
     charindex++;
     containerEl.innerHTML = `I Am a ${careers[careersindex].slice(0, charindex)}`;

     if (charindex === careers[careersindex].length) {
          careersindex++;
          charindex = 0;
     }
     
     if (careersindex === careers.length) {
          careersindex = 0;
     }
     setTimeout(updatetext, 400)
}
