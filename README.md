# leafapi

1.clone both leafapi and leafjobs repository 
2.run npm install in both
3.Install mongo and rabbitmq in your system

#leafapi
Responsible for all the crud applications which are to be perform 
All the database scheme can be found in models_schema/model_schema.js


#leafjobs
Responsible for cron operations and other sending notifications(like confirm or cancellation order mail and in future
other promortion mail).

For getting mail fill auth and pass in emailService in leafjobs.

#on buying order
Notification is sent to user that order has been recieved and cron runs for every hour to assign a job to the agent


  



