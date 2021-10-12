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
        <input
          type="radio"
          id="star-5"
          class="rating__input"
          name="linear-rating"
          value="5"
        />
        <label
          for="star-5"
          class="rating__label rating__label--last"
          title="5"
        ></label>

        <input
          type="radio"
          id="star-4"
          class="rating__input"
          name="linear-rating"
          value="4"
        />
        <label for="star-4" class="rating__label" title="4"></label>

        <input
          type="radio"
          id="star-3"
          class="rating__input"
          name="linear-rating"
          value="3"
        />
        <label for="star-3" class="rating__label" title="3"></label>

        <input
          type="radio"
          id="star-2"
          class="rating__input"
          name="linear-rating"
          value="2"
        />
        <label for="star-2" class="rating__label" title="2"></label>

        <input
          type="radio"
          id="star-1"
          class="rating__input"
          name="linear-rating"
          value="1"
        />
        <label for="star-1" class="rating__label" title="1"></label>

        <input
          type="radio"
          id="nan"
          class="rating__input"
          name="linear-rating"
          value="-"
          checked
        />
        <label
          for="nan"
          class="rating__label rating__label--first"
          title="-"
        ></label>
      </fieldset>

      <span class="rating-text">معمولی</span>
    </div>

    <!-- Text Box -->
    <div class="shared-section">
      <span class="shared-section__title">متن نقد و بررسی شما</span>
      <span class="shared-section__description">
        نقد و بررسی خود در رابطه با این کتاب را می‌توانید به اشتراک بگذارید.
      </span>

      <div class="text-box">
        <span class="text-box__title">متن نقد و بررسی</span>
        <textarea class="text-box__textarea">عنوان ورودی متن</textarea>
      </div>
      
      <span class="remaining-characters">۲۹ از ۱۵۰۰</span>
    </div>

    <!-- Action Button -->
    <div class="action-container">
      <button class="action-button">
        ثبت نقد و بررسی
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style src="@/resources/styles/app.css" />
