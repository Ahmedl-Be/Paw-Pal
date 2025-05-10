import React from "react";

const BookingSection = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-fit">
      <h3 className="text-lg font-semibold ">Book Sarah Johnson</h3>
      <p className="mb-4 text-sm text-gray-400">
        Select a service, date and time
      </p>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-sm">Service Type</label>
          <select className="w-full border border-[#cee4e3] bg-[#fcfcf8] rounded-md p-2">
            <option>Dog Walking - $25/hr</option>
            <option>Dog Walking - $50/hr</option>
            <option>Dog Walking - $75/hr</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="w-full border rounded-md p-2 border-[#cee4e3] bg-[#fcfcf8] "
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Time</label>
          <select className="w-full border rounded-md p-2 border-[#cee4e3] bg-[#fcfcf8] ">
            <option>9:00 AM</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Duration</label>
          <select className="w-full border rounded-md p-2 border-[#cee4e3] bg-[#fcfcf8] ">
            <option>1 hour</option>
          </select>
        </div>

        <div className="border-t border-gray-300 pt-4 text-sm">
          <p className="flex justify-between pb-2">
            <span>Service Rate:</span> <span>$25.00</span>
          </p>
          <p className="flex justify-between">
            <span>Duration:</span> <span>1 hour</span>
          </p>
          <p className="flex justify-between text-lg font-semibold border-t border-gray-300 mt-4 pt-2">
            <span>Total:</span> <span className="text-[#3aafa9]">$25.00</span>
          </p>
        </div>

        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md">
          Book Now
        </button>

        <p className="text-xs text-gray-500 text-center">
          You won’t be charged until your booking is confirmed.
        </p>
      </div>
    </div>
  );
};

export default BookingSection;
