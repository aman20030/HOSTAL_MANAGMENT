import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Complaint() {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    roomNo: "",
    complaintCategory: "",
    complaintType: "",
    description: "",
    file: null,
  });

  const infrastructureComplaints = [
    "Tubelight not working",
    "Fan not working",
    "Table/Chair issue",
    "Washroom/Cleaning issue",
    "Water leakage",
    "Other",
  ];

  const behavioralComplaints = [
    "Fights/Quarrels",
    "Noise disturbance",
    "Misconduct by students",
    "Harassment/Bullying",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Complaint Submitted Successfully!");
    console.log("Complaint Data:", formData);
    setFormData({ name: "", studentId: "", roomNo: "", complaintCategory: "", complaintType: "", description: "", file: null });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">📢 Hostel Complaint Form</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Student Id</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Room No.</label>
            <input
              type="text"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Complaint Category</label>
            <select
              name="complaintCategory"
              value={formData.complaintCategory}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Category</option>
              <option value="Infrastructure">Infrastructure Issue</option>
              <option value="Behavioral">Behavioral Issue</option>
            </select>
          </div>
          {formData.complaintCategory && (
            <div>
              <label className="block font-medium">Complaint Type</label>
              <select
                name="complaintType"
                value={formData.complaintType}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Complaint Type</option>
                {formData.complaintCategory === "Infrastructure" &&
                  infrastructureComplaints.map((issue) => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
                {formData.complaintCategory === "Behavioral" &&
                  behavioralComplaints.map((issue) => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
              </select>
            </div>
          )}
          <div>
            <label className="block font-medium">Complaint Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>
          <div>
            <label className="block font-medium">Upload Supporting File</label>
            <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}
