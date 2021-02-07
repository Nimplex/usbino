function add(verify) {
    const link = $("#linkinput").val()
    const id = $("#idinput").val()
    const folder = $("#folderinput").val()

    $.post( `/add`, {link, id, folder, verify}, function(data) {
        location.reload()
    }, "json")
}

function remove(verify, id) {
    $.post( `/remove`, {id, verify}, function(data) {
        location.reload()
    }, "json")
}