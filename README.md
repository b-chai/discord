# discord

| **Column**        | **Data Type** | **Details**               |
|-------------------|---------------|---------------------------|
| `id`              | integer       | not null, primary key     |
| `username`        | string        | not null, indexed, unique |
| `password_digest` | string        | not null                  |
| `session_token`   | string        | not null, indexed, unique |
| `server_id`       | integer       | not null, unique          |
| `server_role`     | string        | unique                    |
| `email`           | string        | not null, unique          |
| `friends`         | string        | not null, unique          |
| `friends_id`      | integer       | not null, unique          |

| **Column**      | **Data Type** | **Details**           |
|-----------------|---------------|-----------------------|
| `id`            | integer       | not null, primary key |
| `server_name`   | string        | not null, indexed     |
| `user_id`       | integer       | not null, foreign key |
| `text_channels` | string        | not null              |