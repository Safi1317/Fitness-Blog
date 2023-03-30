async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#workout_name").value;
  const description = document.querySelector("#workout_benefits").value;
  const reps = document.querySelector("#workout_reps").value;
  const difficulty_level = document.querySelector("#workout_difficulty").value;
  const equipment = document.querySelector("#workout_equipment").value;
  const username = document.querySelector("#workout_username").value;

  // Send fetch request to add a new workout
  const response = await fetch(`/activity/:id`, {
    method: "POST",
    body: JSON.stringify({
      workout_name,
      benefits_workout,
      reps,
      difficulty_level,
      equipment,
      username,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the workout is added, the 'workout' template will be rerendered

  if (response.ok) {
    console.log(response);
    document.location.replace("workout");
  } else {
    alert("Failed to add activity");
  }
}

document
  .querySelector(".new-workout-form")
  .addEventListener("submit", newFormHandler);
