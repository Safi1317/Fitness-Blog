async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const description = document.querySelector("#description").value;
  const reps = document.querySelector("#reps").value;
  const difficulty_level = document.querySelector("#difficulty_level").value;
  const equipment = document.querySelector("#equipment").value;
  const username = document.querySelector("#username").value;

  // Send fetch request to add a new workout
  const response = await fetch(`/activity/`, {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
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
    document.location.reload();
  } else {
    alert("Failed to add activity");
  }
}

document
  .querySelector(".new-workout-form")
  .addEventListener("submit", newFormHandler);
