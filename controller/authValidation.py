
from pickle import NONE
from app import db
import re
import bcrypt
def registerControl(d):

    checkMail=db.users.find_one({"email":d['email']})
    if(checkMail):
        return "email already exist"
   
    
   
    # for email validation
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

    password= d["password"] 

    confirm_password=d["confirm_password"]
    for x in d:
        if(len(d['name'])==0 & len(d['email'])==0 & len(d['password'])==0 & len(d['confirm_password'])==0):
            return "field cannot empty"

        if  (len(d['name'])<5):
            return "Name at least 5 character long"
        if(not re.fullmatch(regex,d['email'])):
            return "email is not valid"
        if(len(d['password'])<6):
            return "password at least 6 character long"
        if(len(d['confirm_password'])<6):
            return "password at least 6 character long"  

        if(len(d['phone'])!=11):
            return "Phone number must be 11 digits"      

        if  (password != confirm_password):
            return "password is not match"  

        if  ( password == confirm_password):
            #hashpassword

             hash_pass=bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(8)) 
             hash_confirm_pass=bcrypt.hashpw(confirm_password.encode('utf-8'), bcrypt.gensalt(8))   

             d['password']=hash_pass
             d['confirm_password']=hash_confirm_pass
         
            
       
            
    return "ok"
   
def loginControl(d):
    user={}
    user=db.users.find_one({"email":d['email']})
  
    password=d["password"]
    if user is None:
        return "Invalid mail or password"
      # print(user["password"])
    hash_pass=user["password"]
    # print(d["password"])
    flag=bcrypt.checkpw(password.encode('utf8'), hash_pass)
    if(flag==False):
        return "Invalid mail or password"
   
            
    return "ok"
   
