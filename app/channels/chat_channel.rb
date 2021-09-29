class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for 'chat_channel'
    puts '------------------------------------------------------------'
    puts params
    puts '------------------------------------------------------------'
    self.load
  end

  def load
    data = Message.where(channelId: params['channelId'])
    puts data
    messages = { messages: data, type: 'index'}
    ChatChannel.broadcast_to('chat_channel', messages)
  end

  def speak(data)
    message = Message.new(body: data['message']['body'], 
      author_id: data['message']['authorId'], channelId: data['message']['channelId'])
    if message.save
      # adds timestamps and author's name
      message = {
        id: message['id'],
        body: message['body'], 
        authorId: message['author_id'],
        createdAt: message['created_at'],
        updatedAt: message['updated_at'],
        authorName: message.author.username,
        channelId: message['channelId']
      }
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def update(data)
    message = Message.find(data['id'])
    if message
      message.update(body: data['body'])
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def remove(data)
    message = Message.find(data['id'])
    if message
      message.destroy
      socket = { id: message.id, type: 'remove'}
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def unsubscribed
  end

end