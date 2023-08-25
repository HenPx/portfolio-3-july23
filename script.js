const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
for (let i = 0; i < the_animation.length; i++) {
const elements = the_animation[i];

observer.observe(elements);
}

const jokeBox = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single"

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeBox.textContent = `${item.joke}` ;
    });
}
btn.addEventListener("click",getJoke);
getJoke();