class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render 'api/messages/index'
    end

    def message_params
        params.require(:message).permit(:body)
    end
end