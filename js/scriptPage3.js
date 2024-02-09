new Vue({
  el: "#page3",
  data: {
    statuscodes: [
      "100",
      "102",
      "200",
      "201",
      "202",
      "204",
      "205",
      "206",
      "208",
      "226",
      "300",
      "301",
      "302",
      "304",
      "305",
      "400",
      "401",
      "402",
      "403",
      "404",
      "405",
      "418",
      "450",
      "451",
      "500",
      "501",
      "502",
      "503",
      "504",
      "505",
    ],
    randomIndex: 0,
    imgsrc: "",
    counter: 0, //show when click > 4 times
  },
  methods: {
    // Get a random cat status code image
    randomize() {
      do {
        var randomIndex = Math.floor(Math.random() * this.statuscodes.length);
      } while (randomIndex == this.randomIndex);
      this.randomIndex = randomIndex;
      this.counter++;
      let statuscode = this.statuscodes[this.randomIndex];
      this.imgsrc = `https://http.cat/${statuscode}.jpg`;
    },
  },
});
