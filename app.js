new Vue({
  el: "#app",
  data: {
    accordions: [
      {
        title: "Synchronous vs. Asynchronous Code",
        content:
          "In synchronous programming, code is run one after another, meaning each task must finish before the next one starts. This can lead to problems, especially when dealing with operations that take a significant amount of time. Asynchronous programming overcomes this by allowing tasks to be performed concurrently, improving responsiveness and efficiency.",
        isOpen: false,
      },
      {
        title: "Asynchronous Patterns in JavaScript",
        content:
          "JavaScript has many ways to handle asynchronous operations. One of the simplest is the <code>setTimeout</code> function.",
        isOpen: false,
      },
    ],
  },
  methods: {
    toggleAccordion(index) {
      this.accordions[index].isOpen = !this.accordions[index].isOpen;
    },
  },
});
