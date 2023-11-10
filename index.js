var http = require('http');
http.createServer(function (req, res) {
    res.write('hello world, hello nodejs');
    res.end();
}).listen(process.env.PORT || 3000);

/*
const { spawn } = require('child_process');
//const server = spawn("/bash", ["ls && pwd && whoami"]);
const server = spawn("bash", ["start.sh"]);

server.stdout.on("data", data => {
  //console.log(data.toString());
  // 使用该访问可以避免多打印console.log添加的换行符
  process.stdout.write(`${data}`);
});

server.stderr.on("data", data => {
  process.stderr.write(`${data}`);
});

server.on("error", err => {
  process.stderr.write(`${err}`);
});

server.on("close", code => {
  process.stdout.write(`child process exited with code ${code}`);
});
*/

