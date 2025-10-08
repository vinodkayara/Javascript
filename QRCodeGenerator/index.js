function GenerateQRCode(){
  let website=  document.getElementById('website').value

  if(website){
    let qrContainer=document.getElementById('qrcode')
    qrContainer.innerHTML=""
    new QRCode(qrContainer,website)
    document.getElementById('qrcode-container').style.display="block"
  }else{
    alert("Please enter valid url")
  }
}