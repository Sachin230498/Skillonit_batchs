// Function to send token to backend
async function sendTokenToBackend(token, type) {
  try {
    const res = await fetch(`http://localhost:5000/auth/google?type=${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });

    const data = await res.json();
    console.log(`${type} response:`, data);

    if (data.success) {
      const userDiv = document.getElementById("userInfo");
      userDiv.innerHTML = `
          <h3>Welcome, ${data.user.name}</h3>
          <p>Email: ${data.user.email}</p>
          <img src="${data.user.picture}" width="100" alt="Profile Picture">
        `;
    } else {
      alert(`${type} failed: ` + data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

// Callback when Google returns response
function handleGoogleResponse(response, type) {
  const idToken = response.credential;
  console.log(`${type} ID Token:`, idToken);
  sendTokenToBackend(idToken, type);
}

window.onload = () => {
  // ✅ Single initialize call
  window.google.accounts.id.initialize({
    client_id:
      "941109627476-8erithm9i75t65povnjutkh4qj798dnk.apps.googleusercontent.com",
    callback: (response) => {
      // use stored type (login or signup)
      const type = window.currentButtonType || "login";
      handleGoogleResponse(response, type);
    },
  });

  // Render login button inside its div
  window.currentButtonType = "login"; // default type for login button
  window.google.accounts.id.renderButton(
    document.getElementById("googleLoginButton"),
    { theme: "outline", size: "large", text: "signin_with" }
  );

  // Render signup button inside its div
  window.currentButtonType = "signup"; // default type for signup button
  window.google.accounts.id.renderButton(
    document.getElementById("googleSignupButton"),
    { theme: "filled_blue", size: "large", text: "signup_with" }
  );
};
