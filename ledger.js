let state=Storage.load();
function renderLedger(){
 const s=document.getElementById('ledger');
 if(!s)return;
 s.innerHTML='<h2>Mission Ledger</h2><button id="quickSpend">+ Quick Spend</button><ul id="txList"></ul>';
 const list=document.getElementById('txList');
 state.transactions.forEach(t=>{const li=document.createElement('li');li.textContent=t.category+' - $'+t.amount.toFixed(2);list.prepend(li);});
 document.getElementById('quickSpend').onclick=()=>{const amt=parseFloat(prompt('Amount'));if(isNaN(amt))return;const cat=prompt('Category','Expense')||'Expense';state.available-=amt;state.transactions.push({amount:amt,category:cat});Storage.save(state);document.getElementById('availableBalance').textContent='$'+state.available.toFixed(2);renderLedger();};
}
document.addEventListener('DOMContentLoaded',renderLedger);
