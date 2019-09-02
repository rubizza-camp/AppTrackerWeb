*FROM nginx
COPY public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
COPY fullchain.pem /etc/letsencrypt/live/v1.apptracker.club/fullchain.pem
COPY privkey.pem /etc/letsencrypt/live/v1.apptracker.club/privkey.pem
