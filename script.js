function CBR_XML_Daily_Ru(rates) {
  function trend(current, previous) {
    if (current > previous) return ' ▲';
    if (current < previous) return ' ▼';
    return '';
  }
    
  var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ',');
  var USD = document.getElementById('USD');
  USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate);
  USD.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous);

  var EURrate = rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
  var EUR = document.getElementById('EUR');
  EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);
  EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
  
  var GBPrate = rates.Valute.GBP.Value.toFixed(4).replace('.', ',');
  var GBP = document.getElementById('GBP');
  GBP.innerHTML = GBP.innerHTML.replace('00,0000', GBPrate);
  GBP.innerHTML += trend(rates.Valute.GBP.Value, rates.Valute.GBP.Previous);

  var JPYrate = rates.Valute.JPY.Value.toFixed(4).replace('.', ',');
  var JPY = document.getElementById('JPY');
  JPY.innerHTML = JPY.innerHTML.replace('00,0000', JPYrate);
  JPY.innerHTML += trend(rates.Valute.JPY.Value, rates.Valute.JPY.Previous);
  
  var UAHrate = rates.Valute.UAH.Value.toFixed(4).replace('.', ',');
  var UAH = document.getElementById('UAH');
  UAH.innerHTML = UAH.innerHTML.replace('00,0000', UAHrate);
  UAH.innerHTML += trend(rates.Valute.UAH.Value, rates.Valute.UAH.Previous);
  
  var BRLrate = rates.Valute.BRL.Value.toFixed(4).replace('.', ',');
  var BRL = document.getElementById('BRL');
  BRL.innerHTML = BRL.innerHTML.replace('00,0000', BRLrate);
  BRL.innerHTML += trend(rates.Valute.BRL.Value, rates.Valute.BRL.Previous);
  
  var CNYrate = rates.Valute.CNY.Value.toFixed(4).replace('.', ',');
  var CNY = document.getElementById('CNY');
  CNY.innerHTML = CNY.innerHTML.replace('00,0000', CNYrate);
  CNY.innerHTML += trend(rates.Valute.CNY.Value, rates.Valute.CNY.Previous);
}
