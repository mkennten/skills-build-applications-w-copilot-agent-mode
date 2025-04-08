import React, { useEffect, useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(
      "https://potential-space-goggles-x94r6v5v4j6c6jg4-8000.app.github.dev/api/activities/"
    )
      .then((response) => response.json())
      .then((data) => {
        // Map the user field to a readable format
        const formattedData = data.map((activity) => ({
          ...activity,
          user: activity.user.split(" ")[2], // Extract the user ID from the string
        }));
        setActivities(formattedData);
      })
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity._id}>
              <td>{activity.user}</td>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
