import tornado.ioloop
import tornado.web

def make_app():
    return tornado.web.Application([
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./frontend/build", "default_filename": "index.html"})
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()