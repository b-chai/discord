class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render 'api/users/index'
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def update
        @user = User.find(params[:id])

        updatedUser = {rooms: user_params['rooms']}

        puts '-------------------------------'
        puts params
        puts user_params
        puts '-------------------------------'
        if @user.update(updatedUser)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])

        if @user
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private
    def user_params
        # rooms = [], otherwise rooms will always be null after update
        params.require(:user).permit(:id, :username, :email, :password, rooms:[])
    end
    
end