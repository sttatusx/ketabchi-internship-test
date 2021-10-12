<template>
  <div class="container">
    <!-- Navagation -->
    <div class="navigation-bar">
      <a href="#" class="navigation-link">
        <svg
          viewBox="0 0 24 24"
          class="navigation-link__icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>

      <span class="navigation-title">نقد و بررسی شما</span>
    </div>

    <!-- Book -->
    <div class="book">
      <div class="book-image-box">
        <img
          src="https://cdn.ketabchi.com/products/5907/images/ketab-general-book-oo2m.jpg"
          alt="زنان نامرئی چگونه دنیارا برای مردان طراحی کردند"
          class="book-image-box__image"
        />
      </div>

      <div class="book-content-box">
        <a href="#" class="book-content-box__title">
          زنان نامرئی چگونه دنیارا برای مردان طراحی کردند
        </a>

        <span class="book-content-box__author">
          استیو تولتز / پیمان خاکسار / نشر چشمه
        </span>
      </div>
    </div>

    <!-- Rating -->
    <div class="shared-section">
      <span class="shared-section__title">ثبت امتیاز</span>

      <fieldset class="rating">
        <template v-for="step in reviewSteps" :key="step">
          <input
            type="radio"
            :id="`star-${step}`"
            v-model="reviewStar"
            class="rating__input"
            name="linear-rating"
            :value="step"
          />

          <label
            :for="`star-${step}`"
            :class="[
              'rating__label',
              {
                'rating__label--first': step === '-',
                'rating__label--last': step === '5',
              },
            ]"
            :title="step"
          />
        </template>
      </fieldset>

      <span class="rating-text">{{ generateReviewFeedback(reviewStar) }}</span>
    </div>

    <!-- Text Box -->
    <div class="shared-section">
      <span class="shared-section__title">متن نقد و بررسی شما</span>
      <span class="shared-section__description">
        نقد و بررسی خود در رابطه با این کتاب را می‌توانید به اشتراک بگذارید.
      </span>

      <div class="text-box">
        <span class="text-box__title">متن نقد و بررسی</span>
        <textarea
          class="text-box__textarea"
          v-model="reviewText"
          :maxlength="characterLimit"
        >
          عنوان ورودی متن
        </textarea>
      </div>

      <span class="remaining-characters">
        {{ reviewLength }} از {{ characterLimit }}
      </span>
    </div>

    <!-- Action Button -->
    <div class="action-container">
      <button
        :disabled="loading"
        @click="sendReviewToTheServer({ text: reviewText, star: reviewStar })"
        :class="['action-button', { 'action-button--disabled': loading }]"
      >
        ثبت نقد و بررسی
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      loading: false,
      reviewStar: "-",
      characterLimit: 1500,
      reviewText: "عنوان ورودی متن",
      reviewSteps: ["5", "4", "3", "2", "1", "-"],
    };
  },

  computed: {
    reviewLength() {
      return this.reviewText.length;
    },
  },

  methods: {
    async sendReviewToTheServer(review) {
      this.loading = true;

      try {
        // Of course, we use axios for production!
        const result = await fetch("https://fake-request.com/review", {
          method: "POST",
          body: JSON.stringify(review),
        });

        if (result) {
          // Do somthing ...
        }
      } catch (error) {
        console.error("[sendReviewToTheServer] Error:", error);
      } finally {
        // To become more real!
        setTimeout(() => (this.loading = false), 1000);
      }
    },

    generateReviewFeedback(reviewStar) {
      switch (reviewStar) {
        case "5":
          return "عالی";
        case "4":
          return "خوب";
        case "3":
          return "معمولی";
        case "2":
          return "نسبتا بد";
        case "1":
          return "بد";
      }
    },
  },
};
</script>

<style src="@/resources/styles/app.css" />
