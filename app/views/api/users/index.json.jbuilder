@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :avatar_url
end

json.partial! "api/users/user", user: @user