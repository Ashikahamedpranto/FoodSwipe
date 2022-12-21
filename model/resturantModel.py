from mongokit import Document
from rex import app, db
import validators




class restaurant(Document):
    __collection__ = 'restaurants'

    structure = {
       
    '_id':int,
      'RestID':int,
      'RestName':unicode,  
      'RestEmail':unicode,
      'RestLocation':unicode,
      'RestDescription':unicode,
       'RestRating':int,
      'RestImg':unicode,
  
     
    }
   
db.register([restaurants])