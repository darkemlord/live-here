Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :performances, only: %i[index show new create] do
    resources :tips, only: %i[new create]
  end

  resources :artists, only: %i[new create] do
    resources :performances, only: %i[index show]
  end
end