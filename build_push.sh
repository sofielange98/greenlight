aws ecr get-login-password --region us-east-2 | sudo docker login --username AWS --password-stdin 011841690614.dkr.ecr.us-east-2.amazonaws.com
sudo docker build -t greenlight .
sudo docker tag greenlight:latest 011841690614.dkr.ecr.us-east-2.amazonaws.com/greenlight:latest
sudo docker push 011841690614.dkr.ecr.us-east-2.amazonaws.com/greenlight:latest
