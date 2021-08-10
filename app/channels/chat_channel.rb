class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(body: data['body'])
    if message.save
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