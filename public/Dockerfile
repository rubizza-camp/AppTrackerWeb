FROM nginx
COPY --chown=ubuntu: / /usr/share/nginx/html
COPY --chown=ubuntu: default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
WORKDIR /etc/letsencrypt/live/v1.apptracker.club/
COPY --chown=ubuntu: / /etc/letsencrypt/live/v1.apptracker.club