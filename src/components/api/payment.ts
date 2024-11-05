import axios from 'axios'

export const makePaymentRequest = axios.create({
    baseURL: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    headers: {
       Authorization: "bearer" + import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    }
})