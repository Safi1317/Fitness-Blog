const recommendWorkout = async () => {
  const enteredMuscle = document.querySelector("#muscle-suggestion").value;
  const response = fetch(`/api/get-workouts?muscle=${enteredMuscle}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((resAsJson) => {
      console.log("resAsJson = ", resAsJson);
      var dataContainer = document.getElementById("data-container");
      dataContainer.innerHTML=""
      for (const workout of resAsJson) {
        var li = document.createElement('li');
        li.textContent = `${workout.name} ... ${workout.type}`;
        dataContainer.appendChild(li);
       }
    });
};
document
  .querySelector("#muscle-suggestion-btn")
  .addEventListener("click", recommendWorkout);
