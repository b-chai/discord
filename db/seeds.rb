# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "Demo", email: "demo@demo", password:"test123")
User.create!(username: "Luke", email: "Luke@luke", password:"test123")
User.create!(username: "Skywalker", email: "Skywalker@skywalker", password:"test123")
User.create!(username: "AnotherUser", email: "hello@hello", password:"test123")
Server.create!(server_name: "dms", owner_id: 1)
Server.create!(server_name: "MyFirstServer", owner_id: 1)
Channel.create!(channel_name: "General", server_id: 1)