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
