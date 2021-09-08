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

export const showChannel = channel => (
    $.ajax({
        method: "GET",
        url: `api/channels/${channel.id}`
    })
)

export const editChannel = channel => (
    $.ajax({
        method: "PATCH",
        url: `api/channels/${channel.id}`,
        data: {channel}
    })
)

export const deleteChannel = channelId => (
    $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    })
)