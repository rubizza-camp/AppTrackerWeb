FROM nginx
COPY --chown=sudo: / /usr/share/nginx/html
COPY --chown=sudo: default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
WORKDIR /etc/letsencrypt/live/v1.apptracker.club/
COPY --chown=sudo: / /etc/letsencrypt/live/v1.apptracker.club