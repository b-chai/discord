class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def edit
        # @user = User.find(params[:id])
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
        # @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
    
end
