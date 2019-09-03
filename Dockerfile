FROM nginx
COPY public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/letsencrypt/live/apptracker.club
COPY fullchain.pem /etc/letsencrypt/live/apptracker.club/fullchain.pem
COPY privkey.pem /etc/letsencrypt/live/apptracker.club/privkey.pem
