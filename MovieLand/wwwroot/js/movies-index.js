$(function () {
    $(".item-action-favorite").on("click", function () {
        var parent = $(this).parent(),
            id = $(this).parentsUntil(".items-container").last().attr("id");

        $.get("/Movies/SetFavorite/" + id, function (result) {
            if (result) {
                parent.toggleClass("favorite");
            }
        });


    });
});