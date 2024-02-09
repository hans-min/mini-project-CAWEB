new Vue({
  el: "#appPage2",
  data: {
    snackbarMessage: "",
    showSnackbar: false,
  },
  methods: {
    copyCode(refName) {
      const code = this.$refs[refName].innerText;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          this.snackbarMessage = "Text copied to clipboard !";
          this.showSnackbar = true;
        })
        .catch((err) => {
          this.snackbarMessage = "Failed to copy text: " + err;
          this.showSnackbar = true;
        });
      setTimeout(() => {
        this.showSnackbar = false;
        console.log("Timeout");
      }, 2900);
    },
  },
});
