from mongoengine import *

class Project(Document):
    name = StringField(required=True, max_length=200)
    description = StringField(required=True, max_length=200)
    status = StringField(required=True, max_length=20)
    students = ListField(StringField(max_length=50))
    meta = {'allow_inheritance': True}
