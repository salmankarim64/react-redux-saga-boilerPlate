const loginURL = "";

export function getLogin(params) {
  return fetch(loginURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json();
    })
    .catch((error) => {
      throw error;
    });
}
