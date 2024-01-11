new Vue({
  el: "#page3",
  data: {
    imgsrc: "",
  },
  methods: {
    fetchCatImage() {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((json) => {
          this.imgsrc = json[0].url;
        })
        //handle error
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
