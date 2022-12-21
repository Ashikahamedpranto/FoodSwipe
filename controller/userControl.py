#user profile registration,login,update
@app.route('/registration',methods=['POST'])   
def reg():
    d=dict()
    d={
     'name':request.json['name'],
     'email':request.json['email'],
     'password':request.json['password'],
     'confirm_password':request.json['confirm_password'],
     'phone':request.json['phone'],
     'role':0
    }

    statusMsg= registerControl(d)

    if(statusMsg=="ok"): 
        db.users.insert_one(d)
        return "success",200 
    else:
        return  statusMsg,400    
   
@app.route('/login',methods=['POST'])   
def login():
    d=dict()
    d={
    
     'email':request.json['email'],
     'password':request.json['password']

    }

    statusMsg= loginControl(d)

    if(statusMsg=="ok"): 
        cursor=db.users.find_one({"email":d['email']})
        cursor=json.loads(json_util.dumps(cursor))
    # print(cursor)
        return jsonify(cursor)
    else:
        return  statusMsg,400  

@app.route('/userProfile/<string:userId>',methods=['PUT'])   

def userProfile(userId):
    # print(userId)
    d=dict()
    d={
     'name':request.json['name'],
     'email':request.json['email'],
     'phone':request.json['phone']

    }
    # print(d)
    id=ObjectId(userId)
    prev_cursor={"_id":id};
  
    new_cursor={ "$set":d};


    db.users.update_one(prev_cursor,new_cursor)
    

    return "update success",200



#Restaurant list and foods
@app.route('/getAllRest',methods=['GET'])
def getALLRest():
    l=list(db.restaurants.find({},{'_id':0}))
    # print(l)
    # for x in range(len(l)):
    #     print(l[x])
    return jsonify(l)
    # return "ok"

#food and items data 
@app.route('/getAllFoods/<string:foodRestId>/',methods=['GET'])
def getAllFoods(foodRestId):
    foodRestId=str(foodRestId)
    cursor=db.foods.find({'foodRestId':foodRestId})
    cursor=json.loads(json_util.dumps(cursor))
    # print(cursor)


    return jsonify(cursor)


@app.route('/getSortFoods/<string:foodRestId>/<string:sortTag>/',methods=['GET'])
def getSortFoods(foodRestId,sortTag):
    foodRestId=str(foodRestId)
    sortTag=str(sortTag)
    cursor=db.foods.find({'foodRestId':foodRestId})
 
    if(sortTag=='asc'):
       
       cursor=cursor.sort('foodPrice')# by default .sort('foodPrice',1)
       cursor=json.loads(json_util.dumps(cursor))
       l=list(cursor)
    #    print(l)
    
    
    elif(sortTag=='desc'):
       cursor=cursor.sort('foodPrice',-1)# by default .sort('foodPrice',1)
       cursor=json.loads(json_util.dumps(cursor))
       l=list(cursor)
    else:
        cursor=json.loads(json_util.dumps(cursor))
        l=list(cursor)  

    return jsonify(l)    

@app.route('/getRatingFoods/<string:foodRestId>/<string:rating>/',methods=['GET'])
def getRatingFoods(foodRestId,rating):
    foodRestId=str(foodRestId)
    if(rating):
       rating=int(rating)

       cursor=db.foods.find({'foodRestId':foodRestId,'foodRating':rating})
       cursor=json.loads(json_util.dumps(cursor))
       l=list(cursor)  
  
    return jsonify(l)   


@app.route('/getSearchFood/<string:foodRestId>/<string:foodName>/',methods=['GET'])
def getSearchFood(foodRestId,foodName):
    foodRestId=str(foodRestId)
    foodName=str(foodName)
  
    cursor=db.foods.find({'foodRestId':foodRestId,'foodName':foodName})
    cursor=json.loads(json_util.dumps(cursor))
    l=list(cursor)  
  
    return jsonify(l)   

# const res=await axios.get(`/getSingleFood/${id}`,config)    

@app.route('/getSingleFood/<string:id>/',methods=['GET'])

def getSingleFood(id):
    
    id=ObjectId(id)
    # print(id)
    # print(type(id))
    cursor=db.foods.find_one({'_id':id});
    cursor=json.loads(json_util.dumps(cursor))
    # print(cursor)

    return cursor