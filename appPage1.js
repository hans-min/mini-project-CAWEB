new Vue({
  el: "#appPage1",
  data: {
    showCatImage: false,
    shouldApplyCursor: false,
    accordionsNoCode: [
      {
        title: "Synchronous vs. Asynchronous Code",
        content: `In synchronous programming, code is run one after another, 
          meaning each task must finish before the next one starts.
          This can lead to problems, especially when dealing with operations
          that take a significant amount of time. Asynchronous programming
          overcomes this by allowing tasks to be performed concurrently,
          improving responsiveness and efficiency.`,
        isOpen: false,
      },
      {
        title: "Asynchronous Patterns in JavaScript",
        content: `JavaScript has many ways to handle asynchronous operations. One
          of the simplest is the <code>setTimeout</code> function.`,
        isOpen: false,
      },
    ],
    accordionsWithCode: [
      {
        title: "Example: Using <code>setTimeout</code>",
        content: `<p>
                Click F12 on your keyboard.
                Go to the console tab.
                Type in the following code and press enter.
            </p>
            <pre>
                <code>
    console.log('Start');
    setTimeout(() => {
        console.log('This is an asynchronous message');
    }, 2000);
    console.log('End');
                </code>
            </pre>
            <p>
                In this example, <code>setTimeout</code> is used to delay a function's
                execution. The console will first log 'Start' and 'End', and after 2
                seconds, it will log the asynchronous message, demonstrating the
                non-blocking nature of asynchronous code.
            </p>`,
        isOpen: false,
      },
      {
        title: "Example: Without <code>setTimeout</code>",
        content: `<p style="margin-top: 100px;">
        If you repeat the same thing but remove the setTimeout you will have the message <strong>'This is an asynchronous message'</strong> logged second.

        <pre>
            <code>
        console.log('Start');
            console.log('This is an asynchronous message');
        console.log('End');
            </code>
        </pre>
      </p>`,
        isOpen: false,
      },
    ],
  },
  methods: {
    toggleAccordion(index) {
      this.accordionsNoCode[index].isOpen =
        !this.accordionsNoCode[index].isOpen;
    },
    toggleAccordionWithCode(index) {
      this.accordionsWithCode[index].isOpen =
        !this.accordionsWithCode[index].isOpen;
    },
    toggleCursor() {
      console.log("toggling cursor");
      this.shouldApplyCursor = !this.shouldApplyCursor;
    },
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
    fetchCatImageSync() {
      const seconds = new Date().getTime() / 1000;
      while (true) {
        if (new Date().getTime() / 1000 - seconds >= 3) {
          console.log("Lag for 3 seconds");
          break;
        }
      }
      this.showCatImage = !this.showCatImage;
    },
  },
});
