import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      items: [], 
      cart: [], 
      email: '',
      msg: '',   
      sub: false, 
      status: '',
      user: {
      name: 'Safron',
        email: 'safron@email.com',
        phone: '+7 (111) 111-1111',
        joined: 'июнь 2026',
        address: {
          street: 'Вершинина 39А',
          city: 'Томск',
          country: 'Россия'
      } 
    }
  }
  },
  
  getters: {
    cartCnt: (state) => state.cart.length
  },

  actions: {
    async getApidata() {
      if (this.items.length > 0) return;

      try {
        const res1 = await fetch('https://dummyjson.com/products/category/sports-accessories')
        const res2 = await fetch('https://dummyjson.com/products/category/mens-athletic-shoes')
        
        const d1 = await res1.json()
        const d2 = await res2.json()

        const all = [...d1.products, ...d2.products]

        this.items = all.map(p => {
          return {
            id: p.id,
            title: p.title,
            desc: p.description,
            cat: p.category,
            price: p.price, 
            img: p.thumbnail
          }
        })
      } catch (err) {
        console.error('ошибка загрузки апи:', err)
      }
    }
  }
})