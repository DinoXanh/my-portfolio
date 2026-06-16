document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Tấn Phát đã load xong!');
    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
});

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

});

document
.querySelectorAll('.hidden')
.forEach(el=>observer.observe(el));

const btn =
document.getElementById("themeBtn");

btn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
