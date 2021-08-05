class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
    end
    
    def create
        @message = Message.new(message_params)

        if @message.save
            render :index
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def edit
        @message = Message.find(params[:id])
        render :edit
    end

    def destroy
        @message = Message.find(params[:id])
        @message.delete
        render :index
    end

    def message_params
        params.require(:message).permits(:body)
    end
end
