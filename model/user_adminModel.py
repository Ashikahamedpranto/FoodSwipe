from mongokit import Document
from rex import app, db
import validators



class User(Document):
    __collection__ = 'users'

    structure = {
        '_id': int,
        'name': unicode,
        'email': unicode,
        'username': unicode,
        'password': unicode,
        'confirm_password':unicode,
        'phone':unicode,
        'role': int,
     
    }
    validators = {
        'name': validators.max_length(50),
        'email': validators.max_length(120)
    }
    



db.register([users])