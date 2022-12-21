#admin foods crud

@app.route('/deleteSingleFood/<string:id>/<string:foodRestId>',methods=['GET'])

def deleteSingleFood(id,foodRestId):
    
    id=ObjectId(id)
  
    db.foods.delete_one({'_id':id});

    cursor=db.foods.find({'foodRestId':foodRestId})
    cursor=json.loads(json_util.dumps(cursor))
    l=list(cursor)  
  
    return jsonify(l) 


@app.route('/insertFood/<string:foodRestId>',methods=['POST'])   

def insertFood(foodRestId):
 
    d=dict()
   
    d={
      'foodRestId':foodRestId,
      'foodName':request.json['foodName'].capitalize(),
      'foodPrice':int(request.json['foodPrice']),  
      'foodRating':int(request.json['foodRating']),
      'foodStock':int(request.json['foodStock']),
      'foodCategory':request.json['foodCategory'],

      'foodImg':request.json['foodImg'],
      'foodDescription':'awesome food'
    }
   
    # print(d)
    db.foods.insert_one(d)




    return "insert success",200



@app.route('/updateFood/<string:id>',methods=['PUT'])   

def updateFood(id):
    d=dict()
    d={
      'foodName':request.json['foodName'],
      'foodPrice':int(request.json['foodPrice']),  
      'foodRating':int(request.json['foodRating']),
      'foodStock':int(request.json['foodStock']),
       'foodImg':request.json['foodImg'],
    }
    # print(d)
    id=ObjectId(id)
    prev_cursor={"_id":id};
  
    new_cursor={ "$set": {
         "foodName": d["foodName"].capitalize(),
         "foodPrice": d["foodPrice"],
         "foodRating": d["foodRating"],
         "foodStock": d["foodStock"],
         "foodImg":d["foodImg"]
         
          } };


    db.foods.update_one(prev_cursor,new_cursor)
    

    return "update success",200


#admin panel backend

@app.route('/adminDashboard',methods=['GET'])
def total():
    
    d=dict()
  
    c1=db.users.count_documents({})
    c2=db.foods.count_documents({})
    c3=db.restaurants.count_documents({})
    d['TotalUsers']=c1
    d['TotalFoods']=c2
    d['TotalRest']=c3
  
    return d,200


@app.route('/AdminproductList',methods=['GET'])
def getAllAdminFoods():

    cursor=db.foods.find({})
    cursor=json.loads(json_util.dumps(cursor))
    # print(cursor)


    return jsonify(cursor)