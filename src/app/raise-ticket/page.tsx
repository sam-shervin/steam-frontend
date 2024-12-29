"use client";
import { useState, useEffect } from "react";
import Layout from "@/app/layout";
import Navbar from "@/components/Navbar2";

export default function RaiseTicketPage() {
  const [ticket, setTicket] = useState({
    ticketNumber: 1,
    email: "example@mail.com", // Replace with dynamic user data if available
    issue: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const url =
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL_PROD}/complaints`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL}/complaints`;

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const tickets = await response.json();
          setTicket((prev) => ({
            ...prev,
            ticketNumber:
              tickets.length === 0
                ? 1
                : tickets[tickets.length - 1].ticketNumber + 1,
          }));
        } else {
          setError("Failed to fetch tickets");
        }
      } catch {
        setError("Error fetching tickets");
      }
    };

    fetchTickets();
  }, [url]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_PROD}/complaint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issue: ticket.issue }), // Send only necessary data
      });

      if (response.ok) {
        setTicket((prev) => ({
          ...prev,
          ticketNumber: prev.ticketNumber + 1,
          issue: "",
        }));
        setSuccess("Ticket submitted successfully!");
        setTimeout(() => setSuccess(""), 5000); // Clear success message after 5 seconds
      } else if (response.status === 401) {
        setError("You are not authenticated. Please log in.");
      } else if (response.status === 403) {
        setError("You are not authorized to raise a ticket.");
      } else {
        setError("Failed to submit ticket.");
      }
    } catch {
      setError("Error submitting ticket.");
    }
  };

  return (
    <>
      <Navbar />
      <Layout>
        <div
          className="container mx-auto px-4 py-10 min-h-screen flex justify-center items-center"
          style={{
            background: "linear-gradient(135deg, #000000 31%, #19277A 71%)",
          }}
        >
          <div className="w-full lg:w-1/2 md:w-3/4 sm:w-full bg-[#3F7596] rounded-2xl shadow-lg border border-gray-300">
            <div
              className="w-full rounded-t-2xl py-6"
              style={{
                background: "linear-gradient(90deg, #3F7596, #19277A)",
              }}
            >
              <h1 className="text-3xl font-semibold text-center text-white">
                Raise a Ticket
              </h1>
            </div>
            <div className="p-8">
              {success && (
                <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4 text-center">
                  {success}
                </div>
              )}
              {error && (
                <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4 text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Ticket Number
                  </label>
                  <input
                    type="text"
                    name="ticketNumber"
                    value={ticket.ticketNumber}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#D4F3FF] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email ID
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={ticket.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#D4F3FF] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Issue
                  </label>
                  <textarea
                    name="issue"
                    value={ticket.issue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#D4F3FF] text-gray-900"
                    rows={5}
                    placeholder="Describe your issue here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-all"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
