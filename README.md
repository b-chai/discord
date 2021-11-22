## About DiscordClone

### DiscordClone is a one-to-one clone of the current [Discord app](https://discord.com).

[DiscordClone](https://this-isnt-discord.herokuapp.com/#/)

### DiscordClone is a voice, video and text communication service that is used by over a hundred million people and communities

## DiscordClone Tech Stack

### Backend

- Ruby
- Ruby on Rails
- PostgreSQL
- Redis
- ActionCable

### Frontend

- JavaScript
- React-Redux
- HTML
- CSS

## Key Features

- Live Chat
- Servers with CRUD feature
- Channels with CRUD feature
- Direct Messaging

Live chat is the primary feature of DiscordClone, which utilizes ActionCable - Integrated WebSockets for Rails [Action Cable](https://www.npmjs.com/package/actioncable).

```Ruby
ChatChannel
    def subscribed
        stream_for 'chat_channel'
    end
```

```Javascript
App.cable.subscriptions.create(
    { channel: "ChatChannel" },
    {
        received: data => {
            switch (data.type) {
            case 'message':
                return this.props.receiveMessage(data.message)
            case 'remove':
                return this.props.removeMessage(data.id)
            }
        },
        speak: function(data) {
            return this.perform("speak", data)
        },
        load: function(data) {
            return this.perform("load", data)
        },
        remove: function(data) {
            return this.perform('remove', data)
        },
        update: function(data) {
            return this.perform('update', data)
        }
    }
);
```

Action Cable creates a subscription which listens for new messages associated with the appopriate channel.

```Ruby
def speak(data)
    message = Message.new(body: data['body'])
    if message.save
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
end
```

When a new message is created it broadcasts the message to the appopriate channels. Users that are subscribed to the channel will receive the message in real time.