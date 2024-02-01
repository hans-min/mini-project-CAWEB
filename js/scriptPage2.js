new Vue({
  el: "#appPage2",
  methods: {
    copyCode() {
      console.log("copying code");
      const code = this.$refs.codeBlockText.innerText;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    },
  },
});
