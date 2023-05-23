Deployment of the app in heroukuapp was removed due to the limitation in number of free apps we can have. Try the same app with your localhost. Inconvenience regretted. 

Hi Welcome to my Hall Booking API Task. Consider this as a complete guide for the same.


1. We can create a room with https://raj-hall-booking.herokuapp.com/create
Sample Body for Creating API:
{
    "roomID":104,
    "capacity":100,
    "amenities":["Security","AC","Reception","Speakers","Generator"],
    "price":"Rs. 1000"
}

A success message will be returned as response. {"message": "Booking Successfull"}

2. To get the all room Details I have written a get request in https://raj-hall-booking.herokuapp.com/room

3. Booking a room made easy with a post request in https://raj-hall-booking.herokuapp.com/newbooking

Sample Body for Booking a room:
{
    "customerName":"Nagarajan",
    "date":"14-06-2021",
    "startTime":"11:00 AM",
    "endTime":"11:00 PM",
    "roomID":102
}

After Successfull bokking {"message": "Booking Successfull"} response will be returned. 

In case we try to book a room which is not exist or already booked the following response will be returned

{
    "message": "Booking Failed",
    "instruction": "Check room exist or not and check the availability"
}

4. We can get the Booked Room details using a get request in https://raj-hall-booking.herokuapp.com/booked-room-details

5. We can get the Booked Customer details using a get request in https://raj-hall-booking.herokuapp.com/booked-customer-details

Thanks for your visit!
