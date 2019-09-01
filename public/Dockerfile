FROM nginx
COPY / /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
COPY /etc/letsencrypt/live/v1.apptracker.club /etc/letsencrypt/live/v1.apptracker.club
