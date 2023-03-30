const recommendWorkout = async () => {
  const enteredMuscle = document.querySelector("#muscle-suggestion").value;
  const response = fetch(`/api/get-workouts?muscle=${enteredMuscle}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((resAsJson) => {
      console.log("resAsJson = ", resAsJson);

      //   TODO: show some element on the screen with the data from resAsJson
      alert(resAsJson[0].name);
    });
};

document
  .querySelector("#muscle-suggestion-btn")
  .addEventListener("click", recommendWorkout);
