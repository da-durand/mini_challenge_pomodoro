$(document).ready(function () {

    $("#btnadd").click(function () {
        $("#taskList").append("<li class='justify-content-between d-flex'><p>" + $("#task").val() + "</p><button class='delTask'><i class='fas fa-times-circle'></i></button></li>");
    })

    $(".delTask").click(function () {
        $(this).parent().remove();
    })

    $("#taskList").sortable();
    $("#taskList").disableSelection();

    $("#start").click(function(){
        $("#taskTimer").append("#taskList:firstChild");
    })


});