
document.getElementById('start').onclick=()=>{
document.getElementById('splash').classList.remove('active');
document.getElementById('home').classList.add('active');
localStorage.setItem('off_started','true');
};
if(localStorage.getItem('off_started')){
document.getElementById('splash').classList.remove('active');
document.getElementById('home').classList.add('active');
}
