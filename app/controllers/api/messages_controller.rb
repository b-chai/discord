class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all.includes(:author)
        render 'api/messages/index'
    end

    def message_params
        params.require(:message).permit(:body,:channelId)
    end
end