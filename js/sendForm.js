document.querySelector("form").addEventListener("submit", (event) => {
	event.preventDefault();
	const data = new FormData(event.target);

	document.getElementById("sent-email").innerHTML = data.get("email");

	document.getElementById("home").style.display = "none";
	document.getElementById("success").style.display = "";
});
