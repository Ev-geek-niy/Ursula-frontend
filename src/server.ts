import * as http from "http"
import * as path from "path"
import * as fs from "fs"

import { Server, IServerParams, LobbyRoom, Router, RelayRoom,  } from "magx"
import { monitor } from "magx-monitor"

// Import demo room handlers
import {
  MosxChatRoom,
  GameRoom
} from "./rooms"

let dir = path.join(__dirname,"/../public");

let mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

export const createServer = (params?: IServerParams<any>) => {

  const server = http.createServer(function (req, res) {
      let reqpath = req.url.split('?')[0];
      if (req.method !== 'GET') {
          res.statusCode = 501;
          res.writeHead(501,{'Content-Type' : 'text/plain'});
          return res.end('Method not implemented');
      }
      let file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
      if (file.indexOf(dir + path.sep) !== 0) {
          res.statusCode = 403;
          res.setHeader('Content-Type', 'text/plain');
          return res.end('Forbidden');
      }
      let type = mime[path.extname(file).slice(1)] || 'text/plain';
      let s = fs.createReadStream(file);
      s.on('open', function () {
          res.writeHead(200, {'Content-Type' : type});
          s.pipe(res);
      });
      s.on('error', function () {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 404;
          res.end('Not found');
      });
  });

  const magx = new Server(server, params)
    .define("mosx-chat", MosxChatRoom)
    .define("lobby", LobbyRoom, { watch: ["game"] })
    .define("relay", RelayRoom)
    .define("game",GameRoom)

  monitor(magx)

  // attach public dir routes
  magx.router.attach(Router.static(__dirname + "/../public/index.html"))

  return server; 
}
