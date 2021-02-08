function copy(link) {
    const text = document.createElement("textarea")
    text.value = `${document.location.protocol}//${document.location.host}/${link}`
    document.body.appendChild(text)
    text.select()
    document.execCommand("copy", false)
    text.remove()
}
