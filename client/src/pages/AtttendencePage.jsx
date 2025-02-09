import React from "react";
import QRCode from "react-qr-code";
import Card from "../components/ui/Card";
import Progress from "../components/ui/Progress";
import Button from "../components/ui/Button";

const AttendancePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
      {/* Daily Attendance QR Code */}
      <Card className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">Daily Attendance</h2>
        <QRCode value="https://your-qr-code-link.com" size={150} />
        <Button className="mt-4" onClick={() => alert("Attendance Marked!")}>
          Mark Attendance
        </Button>
      </Card>

      {/* Attendance Progress */}
      <Card>
        <h2 className="text-lg font-semibold mb-2">Overall Attendance</h2>
        <Progress value={80} />
        <p className="text-sm text-gray-600 mt-1">80% attendance this month</p>
      </Card>

      {/* Fees Dues & Complaints */}
      <Card>
        <h2 className="text-lg font-semibold mb-2">Fees & Complaints</h2>
        <p className="text-sm text-gray-700">Fees Due: ₹2000</p>
        <p className="text-sm text-gray-700">Complaints: 1 Pending</p>
        <Button className="mt-4" onClick={() => alert("Complaint Submitted!")}>
          Submit Complaint
        </Button>
      </Card>
    </div>
  );
};

export default AttendancePage;
