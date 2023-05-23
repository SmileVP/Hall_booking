
Hi Welcome to my Hall Booking API Task.

I have deployed this in Render.
https://hall-booking-l4ak.onrender.com

1. We can create a room with https://hall-booking-l4ak.onrender.com/create_room
Sample request for Creating API:
{
    "roomID":"01",
    "capacity":"60",
    "amenities":["Security","AC","Reception","Speakers","Generator"],
    "price":"Rs. 1000"
}

A success message will be returned as response. {"message": "Room created successfully"}

2. To get the all room Details I have written a get request in https://hall-booking-l4ak.onrender.com/room_details

3. Booking a room with a post request in https://hall-booking-l4ak.onrender.com/room_booking

Sample Body for Booking a room:
{       
    "roomID":"01",
    "customerName":"Vishnu",
    "date":"23-05-2023",
    "startTime":"11:00 AM",
    "endTime":"11:00 PM"
 
}

After Successfull booking {"message": "Booking Successful"} response will be returned. 

In case we try to book a room which doesnt exist or already booked the following response will be returned

{
    "message": "Booking Failed",
    "instruction": "Check room exist or not and check the availability"
}

4. We can get the Booked Room details using a get request in https://hall-booking-l4ak.onrender.com/booked-room-details

5. We can get the Booked Customer details using a get request in https://hall-booking-l4ak.onrender.com/booked-customer-details


