apt update
apt install -y sudo curl wget net-tools iproute2 openssh-server
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | tee /etc/apt/sources.list.d/ngrok.list && apt update && apt install ngrok
ngrok config add-authtoken 2XqmDuOQfm7OGY5niuahFPfKBQt_2M7Xd4Z372wbUzrfpb71u
echo “root:root” | chpasswd
echo 'PermitRootLogin yes' >>  /etc/ssh/sshd_config
service ssh start
ngrok tcp 22 --log stdout
