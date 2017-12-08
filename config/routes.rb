Rails.application.routes.draw do
  resources :messages
  get 'messages/index'

  get 'messages/create'

  mount ActionCable.server, at: '/cable'

end
