FROM nginx
COPY / /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
WORKDIR /etc/letsencrypt/live/v1.apptracker.club
ADD / /etc/letsencrypt/live/v1.apptracker.club
