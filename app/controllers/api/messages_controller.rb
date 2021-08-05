class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render 'api/messages/index'
    end
    
    def create
        @messages = Message.all
        @post = Message.new(message_params)

        if @post.save
            render 'api/messages/index'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit
        @message = Message.find(params[:id])
        render :edit
    end

    def destroy
        @messages = Message.all
        @message = Message.find(params[:id])
        @message.destroy
        render :index
    end

    def message_params
        params.require(:message).permit(:body)
    end
end
