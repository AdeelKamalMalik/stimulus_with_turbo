// app/javascript/controllers/rules_controller.js
// import { Controller } from "stimulus";
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['results', 'keywords'];

  connect() {
    console.log('---- Connecting ...')
    // this.setupInputListener();
  }

  setupInputListener() {
    console.log('---- setupInputListener ...')
    const form = document.querySelector("#search-form");
    form.addEventListener("keyup", async () => {
      await this.loadResults();
    });
  }

  async loadResults() {
    console.log('---- loadResults ...')

    const frame = document.querySelector("#search-results-frame");
    await fetch('/search?keywords=' + this.keywordsTarget.value, {
      headers: {
        Accept: "text/vnd.turbo-stream.html",
      }
    });
  }
}
