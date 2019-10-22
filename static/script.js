$(document).ready(function () {

    var min = 0;
    var sec = 5;
    $("#timer").html(min + ":" + sec);

    $("#btnadd").click(function () {
        $("#taskList").append("<li class='justify-content-between d-flex taskElement ui-sortable-handle'><p>" + $("#task").val() + "</p><button class='delTask'><i class= 'fas fa-times-circle' ></i ></button ></li >");
        $(".delTask").click(function () {
            $(this).parent().remove();
        })
    })

    $(".delTask").click(function () {
        $(this).parent().remove();
    })

    $("#taskList").sortable();
    $("#taskList").disableSelection();

    $("#start").click(function () {
        if ($("#taskTimer").html() == "") {
            $("#taskTimer").append($(".taskElement").first());
            $("#taskTimer .taskElement button").remove();
        }


        var isPaused = false;

        setInterval(function () {
            if (!isPaused)
                if (sec == 0) {
                    sec = 59;
                    if (min > 0) {
                        min--;
                    }
                    $("#timer").html(min + ":" + sec);
                }
                else {
                    sec -= 1;
                    $("#timer").html(min + ":" + sec);
                }
                $("#pause").click(function(){
                    isPaused = true;
                })
                
            if (min == 0 && sec == 0) {
                isPaused = true;

                min = 0;
                sec = 5;
                $("#timer").html(min + ":" + sec);

                $("#finishList").append($("#taskTimer .taskElement"));
            }
        }, 1000);
    })


});