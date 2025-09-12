import React, { useState } from "react";
import eventsData from "../../../Data/events.json"; // Make sure the path is correct
import { toast } from "react-hot-toast";

const AdminEvents = () => {
  const [events, setEvents] = useState(eventsData);
  const [newEvent, setNewEvent] = useState({ name: "", date: "" });

  // Add a new event
  const handleAddEvent = () => {
    if (!newEvent.name || !newEvent.date) {
      toast.error("Please fill in all fields");
      return;
    }

    const id = events.length ? events[events.length - 1].id + 1 : 1;
    setEvents([
      ...events,
      { id, name: newEvent.name, date: newEvent.date, enrolled: [] },
    ]);
    toast.success("Event added successfully!");
    setNewEvent({ name: "", date: "" });
  };

  // Delete an event
  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    toast.success("Event deleted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">Manage Events</h2>

      <div className="card p-3 mb-4">
        <h5>Add New Event</h5>
        <div className="d-flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Event Name"
            className="form-control"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          />
          <input
            type="date"
            className="form-control"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <button className="btn btn-success" onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Enrolled Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.enrolled.length}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {events.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No events available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEvents;
