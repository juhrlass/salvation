# infrastructure

apt update
apt upgrade
apt install nginx certbot

certbot certonly -n --agree-tos --standalone --preferred-challenges http -d laboratory.treibstoff21.de -m joachim.uhrlass@treibstoff21.de --pre-hook "service nginx stop" --post-hook "service nginx start"

