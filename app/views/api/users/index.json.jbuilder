@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :created_at, :rooms
    end
end