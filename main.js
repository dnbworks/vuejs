const app = Vue.createApp({
    data() {
        return {
          cart: 0,
           product: 'Socks',
           brand: 'Chanel',
           image: './assets/images/socks_green.jpg',
           inStock: false,
           inventory: 0,
           details: ['50% cotton', '30% wool', '20% polyester'],
           sizes: ['S', 'M', 'L', 'XL'],
           variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          ]
        }
    },
    methods: {
      addToCart(){
        this.cart += 1;
      },
      removeFromCart() {
        if (this.cart >= 1) {
            this.cart -= 1
        }
      },
      updateImage(variantImage){
        this.image = variantImage;
      }
    },
    computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].image
      }
  }
});
