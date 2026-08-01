const recurring=[
{name:'James Tuition',amount:540,due:'Monthly'},
{name:'Student Loans',amount:800,due:'Monthly'},
{name:'Car Payment',amount:380.50,due:'Monthly'},
{name:'Personal Loan',amount:323.27,due:'Monthly'},
{name:'T-Mobile',amount:238.15,due:'Monthly'},
{name:'Car Insurance',amount:190,due:'Monthly'},
{name:'WiFi',amount:90,due:'Monthly'}
];
function renderRecurring(){
 const el=document.getElementById('settings');
 if(!el) return;
 let html='<h2>Recurring Expenses</h2><ul>';
 recurring.forEach(r=>html+=`<li>${r.name} - $${r.amount}</li>`);
 html+='</ul>';
 el.innerHTML=html;
}
document.addEventListener('DOMContentLoaded',renderRecurring);
