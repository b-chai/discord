class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render 'api/messages/index'
    end
    
    # def create
    #     @message = Message.new(message_params)

    #     if @message.save
    #         render 'api/messages/show'
    #     else
    #         render json: @message.errors.full_messages, status: 422
    #     end
    # end

    # def edit
    #     @message = Message.find(params[:id])
    #     render :edit
    # end

    # def destroy
    #     @message = Message.find(params[:id])
    #     @message.destroy
    #     render 'api/messages/show'
    # end

    def message_params
        params.require(:message).permit(:body)
    end
end