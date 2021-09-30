@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :created_at, :author_id, :channelId
        json.author_name message.author.username
    end
end