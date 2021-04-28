FROM nginx

# WORKDIR /root
RUN cat /etc/os-release
RUN apt-get install openssl
# RUN apt-get install libssl-dev
# RUN yum install openssl
RUN openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
    -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com" \
    -keyout www.example.com.key  -out www.example.com.crt

RUN cp www.example.com.key /etc/ssl/www.example.com.key
RUN cp www.example.com.crt /etc/ssl/www.example.com.crt
RUN touch self-signed.conf
RUN echo "ssl_certificate /etc/ssl/www.example.com.crt;" >> self-signed.conf
RUN echo "ssl_certificate_key /etc/ssl/www.example.com.key;" >> self-signed.conf
RUN ls -la
RUN find / -name self-signed.conf
RUN cat self-signed.conf
RUN touch /etc/nginx/nginx.conf
RUN echo "events {" >> /etc/nginx/nginx.conf
RUN echo "worker_connections  4096;" >> /etc/nginx/nginx.conf
RUN echo "}" >> /etc/nginx/nginx.conf
RUN echo " http {" > /etc/nginx/nginx.conf
# RUN echo "include self-signed.conf;" >> /etc/nginx/nginx.conf    
RUN echo "server {" >> /etc/nginx/nginx.conf
RUN echo " listen 80 default_server; " >> /etc/nginx/nginx.conf
RUN echo "server_name _;" >> /etc/nginx/nginx.conf
RUN echo "return 301 https://$host$request_uri;" >> /etc/nginx/nginx.conf

RUN echo "}" >> /etc/nginx/nginx.conf
RUN echo "}" >> /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/nginx.conf
RUN service nginx status
RUN service nginx start
RUN systemctl start nginx 
RUN service nginx status