const userLogout = async () => {
  const userResponse = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "" },
  });

  if (userResponse.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", userLogout);
