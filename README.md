# leafapi

1.clone both leafapi and leafjobs repository 
2.run npm install in both
3.Install mongo and rabbitmq in your system
4 For running project command in node server.js

#leafapi
Responsible for all the crud applications which are to be perform 
All the database scheme can be found in models_schema/model_schema.js


#leafjobs
Responsible for cron operations and other sending notifications(like confirm or cancellation order mail and in future
other promortion mail).

For getting mail fill auth and pass in emailService in leafjobs.

#on buying order
Notification is sent to user that order has been recieved and cron runs for every hour to assign a job to the agent.


#sending request for cart
For now I am assumig that we will get only confirmed order

example json should be like

{
    "userId" =====> from users collection
    "totalAmount" ======> Total purchase amount
    "addToCart" : [    =================> products from cart table
        {
            "productId" ======> from product table,
            "quantity" ========> No. of quantity bought for particular products
            "price":=========>total price of particular product
        },
        {
            "productId" ======> from product table,
            "quantity" ========> No. of quantity bought for particular products
            "price":=========>total price of particular product
        }
    ]
}


#creating a user json would be like 

{
    "name":"sushant",
    "email":"tsushant1996@gmail.com",
    "password:"12345"
}

#For database

I have used mlab cloud database as mongodb,you don't have to change anything in mongodb connection for crud operations in database.But for running locally just change the string of function mongoose.connect in server.js

#Product category

For now I have send the product category direct in string in products collection but in later statge it would be from category table.



  



