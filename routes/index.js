var express = require("express");
var router = express.Router();

var room = [];

//to get all the room details
router.get("/room_details", function (req, res, next) {
  res.send(room);
});

//to create a new room
router.post("/create_room", (req, res) => {
  data = {
    roomID: req.body.roomID,
    capacity: req.body.capacity,
    amenities: req.body.amenities,
    price: req.body.price,
    bookedStatus: "Available",
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
  };
  room.push(data);
  res.json({
    message: "Room created Successfully",
    data,
  });
});

//to book a room
router.post("/room_booking", (req, res) => {
  let booked = false;
  room.map((e) => {
    if (e.roomID === req.body.roomID && e.bookedStatus === "Available") {
      e.customerName = req.body.customerName;
      e.date = req.body.date;
      e.startTime = req.body.startTime;
      e.endTime = req.body.endTime;
      e.bookedStatus = "Occupied";
      booked = true;
    } else {
      booked = false;
    }
  });
  if (booked) {
    console.log("Booking successful");
    res.json({
      message: "Booking Successful",
    });
  } else {
    // show booking failed if the room is already booked
    res.json({
      message: "Booking Failed",
      instruction: "Check room exist or not and check the availability",
    });
  }
});

//to get the booked room details
router.get("/booked-room-details", (req, res) => {
  let data = [];
  room.map((e) => {
    if (e.bookedStatus == "Occupied") {
      data.push({
        roomID: e.roomID,
        bookedStatus: e.bookedStatus,
        customerName: e.customerName,
        date: e.date,
        startTime: e.startTime,
        endTime: e.endTime,
      });
    }
  });
  res.send(data);
});

//to get the booked customer details
router.get("/booked-customer-details", (req, res) => {
  let data = [];
  room.map((e) => {
    if (e.bookedStatus == "Occupied") {
      data.push({
        customerName: e.customerName,
        roomID: e.roomID,
        date: e.date,
        startTime: e.startTime,
        endTime: e.endTime,
      });
    }
  });
  res.send(data);
});

module.exports = router;
