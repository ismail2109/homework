export function createProductCard(product) {
  return `
    <article class="product-card">
      <img
        class="product-card__image"
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="product-card__content">
        <h2 class="product-card__title">
          ${product.name}
        </h2>

        <p class="product-card__description">
          ${product.description}
        </p>

        <p class="product-card__category">
          Категория: ${product.category}
        </p>

        <p class="product-card__brand">
          Бренд: ${product.brand}
        </p>

        <p class="product-card__color">
          Цвет: ${product.color}
        </p>

        <p class="product-card__weight">
          Вес: ${product.weight}
        </p>

        <p class="product-card__price">
          ${product.price.toLocaleString("ru-RU")} ₽
        </p>
      </div>
    </article>
  `;
}