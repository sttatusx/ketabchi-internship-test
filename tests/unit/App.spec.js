import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("Generate Currect Review Feedback", () => {
    const feedback = "معمولی";
    const wrapper = shallowMount(App, {});

    expect(wrapper.componentVM.generateReviewFeedback("3")).toMatch(feedback);
  });
});

// describe("App.vue", () => {
//   it("Send Review To The Server", async () => {
//     const review = { text: "تست", star: "5" };
//     const serverResponseStatus = 201;
//     const wrapper = shallowMount(App, {});

//     expect(await wrapper.componentVM.sendReviewToTheServer(review)).toMatch(
//       serverResponseStatus
//     );
//   });
// });
