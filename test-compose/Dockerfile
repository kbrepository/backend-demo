FROM amazonlinux:2

RUN yum update -y
RUN yum install -y git
RUN yum install -y curl
RUN curl -fsSL https://rpm.nodesource.com/setup_16.x | bash -
RUN  yum -y install nodejs

# Create app directory
WORKDIR /usr/src/app

RUN git clone https://github.com/kbrepository/backend-demo.git
RUN pwd
RUN ls -la

WORKDIR /usr/src/app/backend-demo

RUN npm install package.json

EXPOSE 51005
CMD [ "node", "/usr/src/app/backend-demo/index.js" ]
