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
db.get_items().append(TodoItem("Megha is a god"))


def find_item(items, id):
    for index in range(len(items)):
        if id == items[index].id:
            return index
    return -1


# success code message result
# function that is called when you visit /
@main.route("/", methods=["GET"])
def get_all_items():
    return create_response(data={"items": serialize_list(db.get_items())})


@main.route("/:index", methods=["GET"])
def get_item(index):
    return create_response()


@main.route("/", methods=["POST"])
def add_item():
    return create_response()


@main.route("/", methods=["DELETE"])
def remove_item():
    request_json = request.get_json()
    index = find_item(db.get_items(), request_json["id"])
    if index != -1:
        del db.get_items()[index]
    valid = index >= 0
    return create_response(
        status=200 if valid else 404, message="" if valid else "Item doesn't exist"
    )


@main.route("/:index", methods=["PUT"])
def edit_item(index):
    return create_response()
