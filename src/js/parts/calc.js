let calc = () => {

  let selectBlock = document.querySelector('.select-block'),
      size = document.getElementById('size'),
      material = document.getElementById('material'),
      services = document.getElementById('options'),
      promo = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      sizeSum = 0,
      materialSum = 0,
      servicesSum = 0,
      total = 0;

  selectBlock.addEventListener('input', function () {
    sizeSum = size.options[size.selectedIndex].value;
    materialSum = material.options[material.selectedIndex].value;
    servicesSum = +services.options[services.selectedIndex].value;
    total = sizeSum * materialSum;

    if (sizeSum == 0 || materialSum == 0) {
      totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    } else if (sizeSum != 0 && materialSum != 0 && promo.value == "IWANTPOPART") {
      console.log(1);
      let a = +total;
      totalValue.innerHTML = "Стоимость картины: " + (a + servicesSum)*0.7 + 'руб';
    } else {
      let a = +total;
      totalValue.innerHTML = "Стоимость картины: " + (a + servicesSum) + 'руб';
    }
  });




















};

module.exports = calc;