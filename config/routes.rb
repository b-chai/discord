 Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index,:show, :create, :edit, :destroy]
    resources :messages, only: [:index,:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :servers, except: [:edit, :new]
    resources :channels
  end

  mount ActionCable.server, at: '/cable'
  root to: 'static_pages#root'
    
end
