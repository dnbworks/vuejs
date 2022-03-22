
app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template:
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" alt="" srcset="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div 
                v-for="(variant, index) in variants" 
                :key="variant.id" 
                class="color-circle" 
                :style="{backgroundColor: variant.color }"
                @mouseover="updateVariant(index)"></div>
                <button class="button" :class="{disabledButton: !inStock}" @click="addToCart" :disabled="!inStock">Add to Cart</button>
            </div>
        </div>
    </div>`,
    data() {
        return {
           product: 'Socks',
           brand: 'Chanel',
           selectedVariant: 0,
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
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
      },
      removeFromCart() {
        if (this.cart >= 1) {
            this.cart -= 1
        }
      },
      updateVariant(index){
        this.selectedVariant = index;
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
          return this.variants[this.selectedVariant].quantity
      },
      shipping(){
        if(this.premium){
          return 'Free'
        }
        return 2.99
      }
    }
});