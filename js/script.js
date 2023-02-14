// alert("ready")
console.log("script: ready");
console.log("jQ:", $);

$("button").click(function (e) { 
    // e.preventDefault();
    $("ul").append(`<li><span>X</span>${$("input").val()}</li>`);
    $("input").val("");
});

$("ul").on("click", "span", function () {
    $(this).closest("li").remove();
});
