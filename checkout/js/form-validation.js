let loader = $(".loader");

$("#submit").click(function () {
    let name = $("#name");
    let lastName = $("#last_name");
    let type = $("#type");
    let hasError = false;
    loader.css("display", "flex");
    $(".error-input").hide();

    if (!name.val()) {
        name.next().show();
        hasError = true;
    }
    if (!lastName.val()) {
        lastName.next().show();
        hasError = true;
    }
    if (!type.val()) {
        type.next().show();
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: { name: name.val(), lastName: lastName.val(), type: type.val() }
        }).done(function( msg ) {
            loader.hide();
                if (msg.success) {
                    alert("Заказ создан");
                } else {
                    alert("Заказ не создан");
                }
            });
    }
})