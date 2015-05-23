// PFUDOR.tk JavaScript Library -- Generator

gen_enablepfudor();
function gen_enablepfudor() {
    $('#vidid').attr("disabled","disabled");
    $('#1080').attr("disabled","disabled");
    $('#startat').attr("disabled","disabled");
    $('#stopat').attr("disabled","disabled");
    $("vidid").value="";
    $("startat").value="";
    $("stopat").value="";
    $('#vididgroup').attr("style","display: none");
}
function gen_disablepfudor() {
    $('#vidid').removeAttr("disabled");
    $('#1080').removeAttr("disabled");
    $('#startat').removeAttr("disabled");
    $('#stopat').removeAttr("disabled");
    $('#vididgroup').attr("style","display: inline");
}

$('#gen-ytplay').click(function() {
    gen_disablepfudor();
});

$('#anim').click(function() {
    gen_enablepfudor();
});

$('#huang').click(function() {
    gen_enablepfudor();
});
