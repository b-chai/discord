
export const receiveMessages = () => (
    $.ajax({
        method: "GET",
        url: "/api/messages"
    })
)

export const sendMessage = message => (
    $.ajax({
        method: "POST",
        url: "/api/messages",
        data: {message}
    })
)

export const editMessage = message => (
    $.ajax({
        method: "GET",
        url: `/api/messages/${message.id}`,
        data: {message}
    })
)

export const deleteMessage = messageId => (
    $.ajax({
        method: "DELETE",
        url: `/api/messages/${messageId}`,
    })
)