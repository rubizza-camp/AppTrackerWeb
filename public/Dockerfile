FROM nginx

COPY --chown=27:27 / /usr/share/nginx/html
COPY --chown=27:27 default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/letsencrypt/live/v1.apptracker.club

COPY --chown=27:27 /etc/letsencrypt/live/v1.apptracker.club/fullchain.pem /etc/letsencrypt/live/v1.apptracker.club/fullchain.pem
COPY --chown=27:27 /etc/letsencrypt/live/v1.apptracker.club/privkey.pem /etc/letsencrypt/live/v1.apptracker.club/privkey.pem