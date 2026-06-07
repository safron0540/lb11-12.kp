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
      if (this.items.length > 0) return

      try {
        const res1 = await fetch('https://dummyjson.com/products/category/sports-accessories')
        const res2 = await fetch('https://dummyjson.com/products/category/mens-athletic-shoes')

        const d1 = await res1.json()
        const d2 = await res2.json()

        const all = [...d1.products, ...d2.products]

        this.items = all.map((p) => {
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
        console.error('Ошибка загрузки API:', err)
      }
    },

    async sendmessage() {
      const ContactForm = {
        title: this.email,
        body: this.msg,
        subscribe: this.sub,
        userId: 1
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({ ContactForm }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

        await response.json()

        this.status = 'Успешно'
        this.email = ''
        this.msg = ''
        this.sub = false
      } catch (err) {
        console.error('Ошибка отправки формы:', err)
        this.status = ''
      }
    },

    async sendOrder() {
      const orderForm = {
        customer: {
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          address: {
            street: this.user.address.street,
            city: this.user.address.city,
            country: this.user.address.country
          }
        },
        items: this.cart.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: item.price
          }
        }),
        total: this.cart.reduce((sum, item) => sum + Number(item.price), 0),
        userId: 1
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({ orderForm }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

        await response.json()
        this.cart = []
        return true
      } catch (err) {
        console.error('Ошибка отправки заказа:', err)
        return false
      }
    }
  }
})
