export const fetchAllChannels = () => (
    $.ajax({
        method: "GET",
        url: "api/channels"
    })
)

export const createChannel = channel => (
    $.ajax({
        method: "POST",
        url: "api/channels",
        data: {channel}
    })
)