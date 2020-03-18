var bprice=12.99;
var salerate =.25;
var cprice = 8.99;
var wprice = 15.99
var pprice = 18.99
var bsale= bprice-(salerate*bprice)
var csale= cprice-(salerate*cprice)
var wsale= wprice-(salerate*wprice)
var psale= pprice-(salerate*pprice)

var bpriceEl=document.getElementById('bprice');
var bsaleEl=document.getElementById('bsale');

bpriceEl.textContent = bprice.toFixed(2);
bsaleEl.textContent= bsale.toFixed(2);

var cpriceEl=document.getElementById('cprice');
var csaleEl=document.getElementById('csale');

cpriceEl.textContent = cprice.toFixed(2);
csaleEl.textContent= csale.toFixed(2);

var wpriceEl=document.getElementById('wprice');
var wsaleEl=document.getElementById('wsale');

wpriceEl.textContent = wprice.toFixed(2);
wsaleEl.textContent= wsale.toFixed(2);

var ppriceEl=document.getElementById('pprice');
var psaleEl=document.getElementById('psale');

ppriceEl.textContent = pprice.toFixed(2);
psaleEl.textContent= psale.toFixed(2);
