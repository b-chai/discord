class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all
        render 'api/channels/index'
    end

    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages, status:422
        end
    end

    def show
        @channel = Channel.find(params[:id])
        render 'api/channels/show'
    end

    def update
        @channel = Channel.find(params[:id])

        if @channel.update
            render 'api/channels/show'
        end
    end
    
    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
        render 'api/channels/index'
    end

    private
    def channel_params
        params.require(:channel).permit(:channel_name)
    end
end
