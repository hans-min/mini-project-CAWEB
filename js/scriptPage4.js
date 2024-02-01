new Vue({
  el: "#page4",
  data: {
    console: "",
    imgsrc: "",
    comment: "",
    console2: "",
    currentUser: {
      username: "niconeko",
      profilePic: "https://i.kym-cdn.com/entries/icons/original/000/032/100/cover4.jpg",
    },
    comments: [
      {
        username: "Meowy",
        profilePic: "https://placekitten.com/200/200",
        content: "Lol.",
        time: "30 minutes ago",
      },
    ],
  },
  methods: {
    fetchCatImage() {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
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
    postComment() {
      this.comments.push({
        username: this.currentUser.username,
        profilePic: this.currentUser.profilePic,
        content: this.comment,
        time: "Just now",
      });
      body = {
        name: this.currentUser.username,
        data: this.comment,
      };
      this.comment = "";
      request = new Request("https://api.restful-api.dev/objects", {
        method: "POST",
        body: JSON.stringify(body),
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
          this.console2 = formattedData;
        })
        //handle error
        .catch((error) => {
          this.console2 = error;
        });
    },
  },
});
