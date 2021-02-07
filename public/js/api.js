function add(verify) {
    const link = $("#linkinput").val()
    const id = $("#idinput").val()
    const folder = $("#folderinput").val()

    $.post( `/add`, {link, id, folder, verify}, function(data) {
        // if (data.token) {
        //     $("#token").text(data.token)
        //     date_token()
        // }
    }, "json")
}