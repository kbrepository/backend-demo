NOTE: I have performed this assignmet using EC2 instance as host server.

1. Updated config/default.json - replaced 'localhost' with server's IP.
                               - replaced mysql password.

2. Created a folder named 'test-compose'. This folder consists of Dockerfile for 'Nodejs' application. 
Also this folder consists of 'docker-compose' file for multiple containers i.e., nodejs app and mongo, mysql databases.

3. Was able to create multiple containers using docker-compose and execute the API's as well.

3. I tried creating one nginx container and created self-signed certificate. Also tried redirecting HTTP to HTTPS the custom configuration.
  But was not able to complete this subtask.
  
4. I have uploaded the screenshots for the running environments using docker-compose.
