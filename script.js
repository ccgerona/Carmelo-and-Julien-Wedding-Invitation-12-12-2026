const form = document.getElementById("rsvpForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", async (event) => {
  // Prevent sending to the example endpoint before the couple configures it.
  if (form.action.includes("YOUR_FORM_ID")) {
    event.preventDefault();
    note.textContent = "The RSVP form is designed and ready, but online submissions are not active yet. Please connect a Formspree form using the README instructions.";
    note.classList.add("form-warning");
    return;
  }

  event.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.textContent = "SENDING...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });
    if (response.ok) {
      form.reset();
      note.textContent = "Thank you! Your RSVP has been received.";
      note.classList.remove("form-warning");
    } else {
      note.textContent = "We couldn't submit your RSVP. Please try again in a moment.";
    }
  } catch {
    note.textContent = "Something went wrong. Please check your connection and try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalText;
  }
});
