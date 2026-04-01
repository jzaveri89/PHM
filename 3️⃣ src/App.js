import React, { useState } from "react";

export default function MaintenanceApp() {
const [role, setRole] = useState("maintenance");

const [rooms, setRooms] = useState([
{ number: "101", lastCheck: "2026-01-01", status: "green" },
{ number: "102", lastCheck: "2025-11-01", status: "red" },
{ number: "103", lastCheck: "2026-02-01", status: "yellow" },
]);

const [selectedRoom, setSelectedRoom] = useState(null);
const [tasks, setTasks] = useState({});
const [note, setNote] = useState("");

const checklist = ["Entry", "Bathroom", "Bedroom", "HVAC", "Lighting"];

const handleCheck = (item) => {
setTasks({ ...tasks, [item]: !tasks[item] });
};

const completeRoom = () => {
alert("Inspection Complete ✅ Email Sent to Management");
};

const reportIssue = () => {
alert("Issue Reported ⚠️ Ticket Created");
};

return (
<div style={{ padding: 20 }}>
{/* ROLE SELECT */}
<div style={{ marginBottom: 20 }}>
<label style={{ marginRight: 10, fontWeight: "bold" }}>Role:</label>
<select value={role} onChange={(e) => setRole(e.target.value)}> <option value="maintenance">Maintenance</option> <option value="housekeeping">Housekeeping</option> <option value="frontdesk">Front Desk</option> <option value="management">Management</option> </select> </div>

```
  <div style={{ display: "flex", gap: 20 }}>
    {/* ROOM LIST */}
    <div style={{ width: "30%" }}>
      <h2>Rooms</h2>
      {rooms.map((room) => (
        <div
          key={room.number}
          onClick={() => setSelectedRoom(room)}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Room {room.number}</span>
            <span>
              {room.status === "green" && "🟢"}
              {room.status === "yellow" && "🟡"}
              {room.status === "red" && "🔴"}
            </span>
          </div>
          <p style={{ fontSize: 12 }}>
            Last Check: {room.lastCheck}
          </p>
        </div>
      ))}
    </div>

    {/* MAIN PANEL */}
    <div style={{ width: "70%" }}>
      {!selectedRoom && <p>Select a room or scan QR</p>}

      {selectedRoom && (
        <div style={{ border: "1px solid #ccc", padding: 20 }}>
          <h2>Room {selectedRoom.number}</h2>

          {/* MAINTENANCE */}
          {role === "maintenance" && (
            <>
              {checklist.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span>{item}</span>
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(item)}
                  />
                </div>
              ))}

              <input
                style={{ width: "100%", marginTop: 10 }}
                placeholder="Add notes or issues..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />

              <button style={{ marginTop: 10 }} onClick={completeRoom}>
                Complete Inspection
              </button>
            </>
          )}

          {/* HOUSEKEEPING */}
          {role === "housekeeping" && (
            <>
              <p>Report an issue quickly:</p>
              <input placeholder="Describe issue..." />
              <button style={{ marginTop: 10 }} onClick={reportIssue}>
                Submit Issue
              </button>
            </>
          )}

          {/* FRONT DESK */}
          {role === "frontdesk" && (
            <>
              <p>Guest Issue / Alert:</p>
              <input placeholder="Enter guest complaint..." />
              <button style={{ marginTop: 10 }} onClick={reportIssue}>
                Send to Maintenance
              </button>
            </>
          )}

          {/* MANAGEMENT */}
          {role === "management" && (
            <>
              <h3>Performance Snapshot</h3>
              <p>✔ 80% Rooms Completed</p>
              <p>⚠ 5 Rooms Near Deadline</p>
              <p>❌ 3 Rooms Overdue</p>
            </>
          )}
        </div>
      )}
    </div>
  </div>

  {/* QR NOTE */}
  <div style={{ marginTop: 30 }}>
    <h3>QR Code System (Coming Next)</h3>
    <p>
      Each room will have a QR code — scan to open that room instantly.
    </p>
  </div>
</div>
```

);
}
