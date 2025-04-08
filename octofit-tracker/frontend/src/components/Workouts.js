import React, { useEffect, useState } from "react";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(
      "https://potential-space-goggles-x94r6v5v4j6c6jg4-8000.app.github.dev/api/workouts/"
    )
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Workout Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
