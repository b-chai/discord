class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for `chat_channel_#{params['channelId']}`
    # stream_for `chat_channel`
  end

  def load(data)
    data = Message.where(channelId: data['id'])
    messages = { messages: data, type: 'index'}

    messages_hash = {}
    data.each do |message|
        messages_hash[message.id] = create_return_message(message)
    end
    
    # puts '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    # puts messages
    # puts '========================================='
    # puts messages_hash
    # puts '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    
    socket = {type: "index", messages: messages_hash}
    ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
  end

  def speak(data)
    message = Message.new(
      body: data['message']['body'], 
      author_id: data['message']['authorId'], 
      channelId: data['message']['channelId']
    )

    if message.save
      # adds timestamps and author's name
      # message = {
      #   id: message['id'],
      #   body: message['body'], 
      #   authorId: message['author_id'],
      #   created_at: message['created_at'],
      #   updatedAt: message['updated_at'],
      #   authorName: message.author.username,
      #   channelId: message['channelId']
      # }
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
    end
  end

  def update(data)
    message = Message.find(data['id'])
    if message
      message.update(body: data['body'])
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
    end
  end

  def remove(data)
    message = Message.find(data['id'])
    if message
      message.destroy
      socket = { id: message.id, type: 'remove'}
      ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
    end
  end

  def unsubscribed
  end

  private
  def create_return_message(message)
      {
        id: message['id'],
        body: message['body'], 
        authorId: message['author_id'],
        created_at: message['created_at'],
        updatedAt: message['updated_at'],
        authorName: message.author.username,
        channelId: message['channelId']
      }
  end

end