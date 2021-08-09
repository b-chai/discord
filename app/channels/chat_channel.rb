class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(body: data['body'])
    if message.save
      socket = { body: message.body, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = Message.all
    socket = { messages: messages, type: 'load' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
  end

end
