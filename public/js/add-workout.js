async function newFormHandler(event) {
  event.preventDefault();
  const workout_name = document.querySelector('#workout_name').value;
  const workout_benefits = document.querySelector('#workout_benefits').value;
  const workout_reps = document.querySelector('#workout_reps').value;
  const workout_difficulty = document.querySelector('#workout_difficulty').value;
  const workout_equipment = document.querySelector('#workout_equipment').value;
  const workout_username = document.querySelector('#workout_username').value;

  // Send fetch request to add a new workout
  const response = await fetch(`/api/activity/:id`, {
    method: 'POST',
    body: JSON.stringify({
      workout_name,
      workout_benefits,
      workout_reps,
      workout_difficulty,
      workout_equipment,
      workout_username
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the workout is added, the 'workout' template will be rerendered
  if (response.ok) {
    document.location.replace('workout');
  } else {
    alert('Failed to add activity');
  }
}

document.querySelector('.new-activity-form').addEventListener('submit', newFormHandler);
