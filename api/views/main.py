from flask import Blueprint, jsonify, request
from api.core import create_response, serialize_list, logger
from datetime import datetime
from uuid import uuid1

main = Blueprint("main", __name__)


class TodoItem:
    def __init__(self, text):
        self.id = uuid1()
        self.text = text
        self.time = datetime.now()

    def to_dict(self):
        return {"id": self.id, "text": self.text, "time": self.time}


class Database:
    def __init__(self):
        self.items = []

    def get_items(self):
        return self.items


db = Database()


def find_item(items, id):
    print(type(id))
    for index in range(len(items)):
        print(type(items[index].id))
        if str(id) == str(items[index].id):
            return index
    return -1


# success code message result
# function that is called when you visit /
@main.route("/api/", methods=["GET"])
def get_all_items():
    print("HERE")
    return create_response(data={"items": serialize_list(db.get_items())})


@main.route("/api/<id>", methods=["GET"])
def get_item(id):
    # in-class tutorial
    print("Hello!")
    return create_response(data={"id": id})
    pass


@main.route("/api/", methods=["POST"])
def add_item():
    """
    request Object:
    {
        'text': __
    }
    """
    # in-class tutorial
    pass


@main.route("/api/", methods=["DELETE"])
def remove_item():
    # in-class tutorial
    pass


@main.route("/api/<id>", methods=["PUT"])
def edit_item(id):
    index = find_item(db.get_items(), id)
    valid = index >= 0
    if valid:
        item = db.get_items()[index]
        request_json = request.get_json()
        item.text = request_json["text"]
    return create_response(
        data={"item": item.to_dict()} if valid else {},
        status=200 if valid else 404,
        message="" if valid else "Item doesn't exist",
    )
