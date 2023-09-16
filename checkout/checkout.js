// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
/*  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  }) */

  $("#redeem").click(function () {
    let url = "http://testologia.site/promo-code?name=" + $("#promo-code").val();

    let http = new XMLHttpRequest();
    http.open("get", url);
    http.send();

    http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200)  {

      let result = null;
      try {
        result = JSON.parse(http.responseText);
      } catch (e) {}

      // проверка на существование промокода
      if (result) {
        $("#promocode").removeClass("d-none").addClass("d-flex");
      } else {

      }

    }
    }
  })

})()
