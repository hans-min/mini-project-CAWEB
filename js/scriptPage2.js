new Vue({
  el: "#appPage2",
  data: {
    message: "",
    showSnackbar: false,
  },
  methods: {
    copyCode() {
      const code = this.$refs.codeBlockText.innerText;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          this.message = "Text copied to clipboard !";
          this.showSnackbar = true;
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          this.message = "Failed to copy text: " + err;
          this.showSnackbar = true;
        });
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        this.showSnackbar = false;
      }, 3000);
    },
  },
});
