commentData = {
  name: "niconeko",
  data: "test",
};
this.comment = "";
request = new Request("https://api.restful-api.dev/objects", {
  method: "POST",
  body: JSON.stringify(commentData),
  headers: new Headers({
    "Content-Type": "application/json",
  }),
});
fetch(request)
  .then((response) => {
    if (!response.ok) {
      console.error(response);
      throw Error(`HTTP code: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    var formattedData = JSON.stringify(json, null, 2);
    console.log(formattedData);
  });
