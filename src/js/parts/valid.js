function valid() {
  // Валидация данных ввода в инпуты
  document.body.addEventListener("input", e => {
    let target = e.target;

    if (target.getAttribute("name") === "phone") {
      target.value = "+" + target.value.replace(/[^0-9]/g, "").substring(0,12);
      if (target.value.length == 1) {
        target.value = "";
      }
    }

  });
}

module.exports = valid;