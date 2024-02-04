new Vue({
  el: "#appPage2",
  data: {
    message: "",
    showSnackbar: false,
  },
  methods: {
    copyCode(refName) {
        const code = this.$refs[refName].innerText;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          this.message = "Text copied to clipboard !";
          this.showSnackbar = true;
        })
        .catch((err) => {
          this.message = "Failed to copy text: " + err;
          this.showSnackbar = true;
        });
      setTimeout(() => {
        this.showSnackbar = false;
        console.log("Timeout");
      }, 2900);
    },
  },
});
