Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  constraints formmat: :json do
    resources :users, only: [:show, :create, :edit, :destroy]
    resources :sessions, only: [:create, :destroy]
  end
    
  root to: 'static_pages#root'
end
