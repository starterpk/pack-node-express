async function postSomething(event, payload) {
  event.preventDefault();
  try {
    const response = await axios.post("/", {
      payload,
    });
    if (response.status === 200) {
      console.log("Success!");
    }
    return response.data;
  } catch (error) {
    console.log("There was an error", error);
  }
}
