class Api::DirectMessagesController < ApplicationController

    def index
        @messages = DirectMessage.all.includes(:author)
        render 'api/direct_messages/index'
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def message_params
        params.require(:message).permit(:body)
    end

end
