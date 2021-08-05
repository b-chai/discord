export const sendMessage = message => (
    $.ajax({
        method: "POST",
        url: "",
        data: {message}
    })
)

export const editMessage = message => (
    $.ajax({
        method: "GET",
        url: "",
        data: {message}
    })
)

export const deleteMessage = messageId => (
    $.ajax({
        method: "DELETE",
        url: "",
        messageId
    })
)