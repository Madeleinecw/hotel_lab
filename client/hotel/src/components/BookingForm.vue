<template lang="'html">
  <form id="booking-form" v-on:submit="addBooking" method="post">
      <h3>Add A Booking</h3>
     <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required></input>
      </div>
      <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required></input>
      </div>
      <input type="submit" value="save" id="save">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
    name: 'booking-form',
    data() {
        return{
            name: null,
            email: null,
            checked_in: false
        }
    },
    methods: {
        addBooking(e){
            e.preventDefault()
            const booking = {
                name: this.name,
                email: this.email, 
                checked_in: this.checked_in    
            }
        BookingService.postBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        }
    }

}
</script>

<style>
#booking-form {
    background-color: lightblue;
}

</style>