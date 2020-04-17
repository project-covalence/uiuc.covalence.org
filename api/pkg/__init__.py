import os
import logging
from dotenv import load_dotenv

from flask import Flask, request
from flask_cors import CORS

from api.pkg.core import all_exception_handler
from mongoengine import connect


class RequestFormatter(logging.Formatter):
    def format(self, record):
        record.url = request.url
        record.remote_addr = request.remote_addr
        return super().format(record)


def create_app(test_config=None):
    app = Flask(__name__)
    load_dotenv()
    connect('project', host=os.getenv("COVALENCE_DB_URL"))
    CORS(app)  # add CORS

    # logging
    formatter = RequestFormatter(
        "%(asctime)s %(remote_addr)s: requested %(url)s: %(levelname)s in [%(module)s: %(lineno)d]: %(message)s"
    )
    if app.config.get("LOG_FILE"):
        fh = logging.FileHandler(app.config.get("LOG_FILE"))
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(formatter)
        app.logger.addHandler(fh)

    strm = logging.StreamHandler()
    strm.setLevel(logging.DEBUG)
    strm.setFormatter(formatter)

    app.logger.addHandler(strm)
    app.logger.setLevel(logging.DEBUG)

    # import and register blueprints
    from api.pkg.views import main

    app.register_blueprint(main.main, url_prefix="/api")

    # register error Handler
    app.register_error_handler(Exception, all_exception_handler)

    return app
