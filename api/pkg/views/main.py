from flask import Blueprint, jsonify, request
from api.pkg.core import create_response, serialize_list, logger
from datetime import datetime
from uuid import uuid1
from api.pkg.models.project import Project

main = Blueprint("main", __name__)

def to_dict(items):
   # Convert from QuerySet to list of mongo objects
   items_to_mongo = list(map(lambda x: x.to_mongo(), items))
   for item in items_to_mongo: 
       # Stringify the object id from type ObjectId
       item["_id"] = str(item["_id"])
   return items_to_mongo


# success code message result
# function that is called when you visit /
@main.route("/", methods=["GET"])
def get_all_items():
    return create_response(data={"items": to_dict(Project.objects.all())})


@main.route("/<id>", methods=["GET"])
def get_item(id):
    # in-class tutorial
    pass


@main.route("/", methods=["POST"])
def add_item():
    """
    request Object:
    {
        'text': __
    }
    """
    # in-class tutorial
    pass


@main.route("/", methods=["DELETE"])
def remove_item():
    # in-class tutorial
    pass


@main.route("/<id>", methods=["PUT"])
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
