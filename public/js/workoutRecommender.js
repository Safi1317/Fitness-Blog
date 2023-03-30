const recommendWorkout = async () => {
  const enteredMuscle = document.querySelector("#muscle-suggestion").value;
  const response = fetch(`/api/get-workouts?muscle=${enteredMuscle}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((resAsJson) => {
    //   console.log("resAsJson = ", resAsJson);

      //   TODO: show some element on the screen with the data from resAsJson
      const data = JSON.parse(resAsJson);

      const container = document.getElementById('data-container');

      data.forEach(item => {
        const paragraph = document.createElement('p');
        paragraph.textContent = item.name, item.type;
        container.appendChild(paragraph);
      });
      
      alert(resAsJson[0].name);
    });
};

document
  .querySelector("#muscle-suggestion-btn")
  .addEventListener("click", recommendWorkout);
