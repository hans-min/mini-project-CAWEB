new Vue({
  el: "#page4",
  data: {
    console: "",
    imgsrc: "",
  },
  methods: {
    fetchCatImage() {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          if (!response.ok) {
            console.error(response);
            throw Error(`HTTP code: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          var formattedData = JSON.stringify(json, null, 2);
          this.console = formattedData;
          this.imgsrc = json[0].url;
        })
        //handle error
        .catch((error) => {
          this.console = error;
        });
    },
    executeCode() {
      // Get the code from the <code> element
      const code = document.getElementById("code-e").innerText;
      try {
        // Execute the JavaScript code
        console.log("Executing code: ", code);
        eval(code);
      } catch (e) {
        console.error("Error executing code: ", e);
      }
    },
  },
});
