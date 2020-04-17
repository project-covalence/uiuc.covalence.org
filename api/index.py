from flask import Flask, Response

from api.pkg import create_app
app = create_app()