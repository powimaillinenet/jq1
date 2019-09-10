
$(function () {

    let $ul = $("ul");

    $ul.on("click","li",function () {
        $.get("http://pdfstep.zzz.com.ua",function (resp) {
            console.log(resp);
        })
		$.get("http://pdfstep.zzz.com.ua",function (resp) {
            alert(resp);
        })

    })
    $ul.on("click","li",function () {
        $.get("http://pdfstep.zzz.com.ua",function (resp) {
            alert(resp);
        })


    })
    $ul.on("click","li",function () {
        $.get("http://pdfstep.zzz.com.ua",function (resp) {
            alert(resp);
        })


    })
    $ul.on("click","li",function () {
        $.get("http://pdfstep.zzz.com.ua",function (resp) {
            alert(resp);
        })


    })




});

