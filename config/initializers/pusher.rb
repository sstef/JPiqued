# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = '422221'
Pusher.key = '42f263e7995cb789dd4a'
Pusher.secret = '895243c4cf6ac0bf5f1a'
Pusher.cluster = 'us2'
Pusher.logger = Rails.logger
Pusher.encrypted = true
