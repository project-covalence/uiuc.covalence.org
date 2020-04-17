from api import create_app
from flask.wrappers import Response
# print(create_app)
app = create_app()

# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return Response("<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")