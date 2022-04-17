var cluster = require('cluster');  
// var express = require('express');  
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {  
  for (var i = 0; i < numCPUs; i++) {
    // Create a worker
    cluster.fork();
  }
} else {
    const express = require('express')
    const app = express();
    
    app.use(express.json({limit: '10mb'}))
    
    const api = require("./api");
    
    app.get('/api/hello', (req, res) => {
      console.log('requested');
      res.send({ response :'World!'})
    })
    
    app.post('/api/client/records', async (req, res, next) => {
      try {
        await api.postRecords(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/records/:recordId', async (req, res, next) => {
      try {
        await api.getRecord(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/record-views/tomeActive', async (req, res, next) => {
      try {
        await api.tomeActive(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/record-views/allActive', async (req, res, next) => {
      try {
        await api.allActive(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/record-views/allClosed', async (req, res, next) => {
      try {
        await api.allClosed(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/record-views/mineActive', async (req, res, next) => {
      try {
        await api.mineActive(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.put('/api/client/records/:recordId', async (req, res, next) => {
      try {
        await api.updateRecord(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/records/:recordId/comments', async (req, res, next) => {
      try {
        await api.getComments(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.post('/api/client/records/:recordId/comments', async (req, res, next) => {
      try {
        await api.postComments(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/categories', async (req, res, next) => {
      try {
        await api.getCategories(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.post('/api/client/files', async (req, res, next) => {
      try {
        await api.postFiles(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/records/:recordId/files/:itemId', async (req, res, next) => {
      try {
        await api.getRecordItemFile(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    app.get('/api/client/records/:recordId/files/:itemId/thumbnail', async (req, res, next) => {
      try {
        await api.getRecordItemFileThumbnail(req, res);
      } catch(e) {
        console.log(e);
        next(new Error("Unexpect"));
      }
    })
    
    
    app.listen(8000, () => console.log('listening on port 8000...'))
    // Workers share the TCP connection in this server
    // var app = express();

    // app.get('/', function (req, res) {
    //     res.send('Hello World!');
    // });
    
    // // All workers use this port
    // app.listen(8080);
}


