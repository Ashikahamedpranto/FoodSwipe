from mongokit import Document
from rex import app, db
import validators



class foods(Document):
    __collection__ = 'foods'

    structure = {
       
    'foodRestId':int,
      'foodName':unicode,
      'foodPrice':unicode,  
      'foodRating':unicode,
      'foodStock':int,
      'foodCategory':unicode,

      'foodImg':unicode,
      'foodDescription':unicode
     
    }
   
db.register([foods])