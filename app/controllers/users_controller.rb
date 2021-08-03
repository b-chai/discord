class UsersController < ApplicationController

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
        @user = User.find(params[:id])

    end

    def show
        @user 
    end

    def destroy
    end

    private
    def user_params
        params.require(:user).permits(:username, :email, :password)
    end
end
