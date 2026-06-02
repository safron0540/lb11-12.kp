import { defineStore } from 'pinia' 

export const useCounterStore = defineStore('counter', {
  state: () => ({

    fetchdata: null,
    
    email: '',
    message: '',
    subscribe: false,
    Status: ''
  }),

  actions: {

    async getApidata() {
      const response = await fetch('https://fakestoreapi.com/products?limit=6')
      const result = await response.json() 
      this.fetchdata = result 
      console.log(this.fetchdata) 
    },

    sendmessage() { 
      let ContactForm = {
        title: this.email, 
        body: this.message, 
        subscribe: this.subscribe,
        userId: 1
      }

      fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST', 
        body: JSON.stringify({ ContactForm }), 
        headers: {
          'Content-type': 'application/json; charset=UTF-8', 
        },
      })
      .then((response) => response.json()) 
      .then((j) => {
        this.Status = `Успешно`

        this.email = ''
        this.message = ''
        this.subscribe = false
      })
    }
  }
})