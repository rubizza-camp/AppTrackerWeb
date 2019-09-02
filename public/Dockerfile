FROM nginx
COPY --chown=777: / /usr/share/nginx/html
COPY --chown=777: default.conf /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club
WORKDIR /etc/letsencrypt/live/v1.apptracker.club/
COPY --chown=777: / /etc/letsencrypt/live/v1.apptracker.club