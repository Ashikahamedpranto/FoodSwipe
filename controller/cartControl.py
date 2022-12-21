#cart info
TotalPrice=dict()
@app.route('/cart',methods=['POST'])

def cart():
  
  
  TotalPrice={
    'totalPrice':request.json['totalPrice']
  }
  db.cartPrice.insert_one(TotalPrice)
  price=TotalPrice['totalPrice']
#   print(price)
  return "ok",200

# payment gateway
@app.route('/create-checkout-session/<string:totalPrice>', methods=['POST'])


def create_checkout_session(totalPrice):
    # print(totalPrice)
    app.config['STRIPE_PUBLIC_KEY']='pk_test_51KrNyDEYl23s23aNkwOsrUaOMRChU9HJ6xvYclcgFTC94S8HgEbxof7wyqSwq1CiwE1c2plnxnwmAsgxWFWXIlwc00q8Gu6Zwt'
    app.config['STRIPE_SECRET_KEY']='sk_test_51KrNyDEYl23s23aN2Jk8BKn6GUttvsAyejKiseY1BQvFkykrg7eUUw4aCRqBtL48DTzmBRecuWUmx8c3hVrSkuNW00hm3iWY1H'
    stripe.api_key = app.config['STRIPE_SECRET_KEY']
    YOUR_DOMAIN = 'http://localhost:3000'

   
    # cursor=db.cartPrice.find_one({})
    # cursor=json.loads(json_util.dumps(cursor))
    # print(cursor[0].totatPrice)
    # print(price)
    # print(TotalPrice)

    try:
      
         
          
          checkout_session = stripe.checkout.Session.create(
       
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    # 'price': 'price_1LbqGaEYl23s23aNyz0dIjzE',
                    # 'quantity': 1,
                    "name": "Total Price",
                    "quantity": 1,
                    "currency": "usd",
                    "amount": "100000",
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )

    except Exception as e:
        return str(e)
     
    return redirect(checkout_session.url, code=303)