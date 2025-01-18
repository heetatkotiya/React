import * as React from "react";

class Table1 extends React.Component {
    render() {
        const tableStyle = {
            width: "80%",
            margin: "20px auto",
            borderCollapse: "collapse",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
        };

        const thTdStyle = {
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
        };

        const thStyle = {
            ...thTdStyle,
            backgroundColor: "#f4f4f4",
            fontWeight: "bold",
            color: "#333",
        };

        const trEvenStyle = {
            backgroundColor: "#f9f9f9",
        };

        // Timetable data
        const timetable = [
            { day: "Monday", subject: "React", time: "8:00 AM - 9:45 AM", faculty: "Dr. Kamal" },
            { day: "Monday", subject: ".Net", time: "10:00 AM - 11:45 AM", faculty: "Dr. Mehta" },
            { day: "Tuesday", subject: "React", time: "8:00 AM - 9:45 AM", faculty: "Dr. Sharma" },
            { day: "Tuesday", subject: ".Net", time: "10:00 AM - 11:45 AM", faculty: "Dr. Mahmoud" },
            { day: "Wednesday", subject: "AI/ML", time: "8:00 AM - 9:45 AM", faculty: "Dr. Ahmed" },
            { day: "Wednesday", subject: "TOC", time: "10:00 AM - 11:45 AM", faculty: "Dr. Patel" },
            { day: "Thursday", subject: "React", time: "8:00 AM - 9:45 AM", faculty: "Dr. Khan" },
            { day: "Thursday", subject: "AI/ML", time: "10:00 AM - 11:45 AM", faculty: "Dr. Gupta" },
            { day: "Friday", subject: "Library", time: "8:00 AM - 9:45 AM", faculty: "Dr. Bose" },
            { day: "Friday", subject: "TOC", time: "10:00 AM - 11:45 AM", faculty: "Dr. Lee" },
        ];

        return (
            <div style={{ textAlign: "center" }}>
                <h1>Weekly Timetable</h1>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Day</th>
                            <th style={thStyle}>Subject</th>
                            <th style={thStyle}>Time</th>
                            <th style={thStyle}>Faculty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetable.map((entry, index) => (
                            <tr key={index} style={index % 2 === 0 ? trEvenStyle : null}>
                                <td style={thTdStyle}>{entry.day}</td>
                                <td style={thTdStyle}>{entry.subject}</td>
                                <td style={thTdStyle}>{entry.time}</td>
                                <td style={thTdStyle}>{entry.faculty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table1;
