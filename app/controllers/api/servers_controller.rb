class Api::ServersController < ApplicationController

    def index
        @servers = Servers.all
    end

    def create
        @server = Server.new(server_params)

        if @server.save
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages, status:422
        end
    end

    def show
        @server = Server.find(params[:id])
        render 'api/servers/show'
    end

    def update
        @server = Server.find(params[:id])

        if @server.update
            render 'api/servers/show'
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render 'api/servers/index'
    end

    def server_params
        params.require(:server).permit(:server_name, :server_icon, :owner_id)
    end
end
