const newActivity = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="activity-title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};
document
  .querySelector("#new-ctivity-form")
  .addEventListener("submit", newFormHandler);
