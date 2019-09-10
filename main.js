
$(function () {

    let $ul = $("ul");

    $ul.on("click","li",function () {
        $.get("http://pdfstep.zzz.com.ua",function (resp) {
            alert(resp);
        })


    })




});

