
function calculate(){
   let p=parseFloat(document.getElementById('bam').value) ;
   let q=parseFloat(document.getElementById('tp').value);

   let tipamt=(p*q)/100;
   let total=p+tipamt;

   document.getElementById('ta').value=tipamt.toFixed(2);
   document.getElementById('ttl').value=total.toFixed(2);
}