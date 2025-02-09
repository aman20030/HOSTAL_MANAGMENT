import React, { useState } from "react";
import axios from "axios";

const RoomBooking = () => {
  const [year, setYear] = useState(1);
  const [hostel, setHostel] = useState("");
  const [lotteryNumber, setLotteryNumber] = useState(null);
  const [formData, setFormData] = useState({
    floor: "",
    roomType: "",
    roommate: "",
  });
  const [roomAllocated, setRoomAllocated] = useState(null);

  // Determine Hostel Based on Year
  const determineHostel = () => {
    if (year === 1) return "BH4";
    if (year === 2) return "BH3";
    return year === 3 || year === 4 ? "BH1 or BH2" : "";
  };

  // Generate Lottery Number (Only Once)
  const generateLottery = () => {
    if (!lotteryNumber) {
      setLotteryNumber(Math.floor(Math.random() * 10000));
    }
  };

  // Handle Form Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Room Booking Request
  const submitForm = async () => {
    try {
      const response = await axios.post("/api/roomBooking/book", {
        year,
        hostel,
        lotteryNumber,
        ...formData,
      });
      setRoomAllocated(response.data.room);
    } catch (error) {
      console.error("Booking Failed", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
      <h2 className="text-xl font-bold">Hostel Room Booking</h2>

      {/* Year Selection */}
      <div>
        <label>Enter Your Year:</label>
        <select
          value={year}
          onChange={(e) => {
            setYear(Number(e.target.value));
            setHostel(determineHostel());
          }}
        >
          <option value={1}>1st Year</option>
          <option value={2}>2nd Year</option>
          <option value={3}>3rd Year</option>
          <option value={4}>4th Year</option>
        </select>
      </div>

      {/* Display Assigned Hostel */}
      <div>
        <p><strong>Assigned Hostel:</strong> {hostel}</p>
      </div>

      {/* Lottery Number Generation */}
      {!lotteryNumber ? (
        <button onClick={generateLottery} className="bg-blue-500 text-white px-4 py-2">
          Generate Lottery Number
        </button>
      ) : (
        <p><strong>Lottery Number:</strong> {lotteryNumber}</p>
      )}

      {/* Room Preferences Form */}
      {lotteryNumber && (
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Fill Your Room Preferences</h3>
          <label>Floor Preference:</label>
          <select name="floor" onChange={handleChange}>
            <option value="Ground">Ground Floor</option>
            <option value="1st">1st Floor</option>
            <option value="2nd">2nd Floor</option>
            <option value="3rd">3rd Floor</option>
          </select>

          <label>Room Type:</label>
          <select name="roomType" onChange={handleChange}>
            <option value="Fan/Common">Fan + Common Washroom</option>
            <option value="AC/Attached">AC + Attached Washroom</option>
          </select>

          <label>Preferred Roommate (Optional):</label>
          <input type="text" name="roommate" onChange={handleChange} />

          <button onClick={submitForm} className="bg-green-500 text-white px-4 py-2 mt-4">
            Submit Booking
          </button>
        </div>
      )}

      {/* Display Allocated Room */}
      {roomAllocated && (
        <div className="p-4 border rounded-lg bg-green-100">
          <h3 className="text-lg font-semibold">Room Allocated 🎉</h3>
          <p><strong>Room No:</strong> {roomAllocated.roomNumber}</p>
          <p><strong>Floor:</strong> {roomAllocated.floor}</p>
          <p><strong>Room Type:</strong> {roomAllocated.roomType}</p>
        </div>
      )}
    </div>
  );
};

export default RoomBooking;
