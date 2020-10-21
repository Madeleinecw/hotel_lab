<template>
  <div v-if="booking" class="booking">
      <p>{{booking.name}}</p>
      <p>{{booking.email}}</p>
      <button id="checkIn" v-if="!booking.checked_in" v-on:click="updateStatusCheckIn" >Check In</button>
      <button id="checkOut" v-if="booking.checked_in" v-on:click="updateStatusCheckOut">Check Out</button>
      <button id="deleteBook" v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js'
import {eventBus} from '../main.js'

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },
        updateStatusCheckIn(){
            BookingService.updateStatus(this.booking._id, true)
            .then(() => eventBus.$emit('check-in', this.booking._id))
        },
        updateStatusCheckOut(){
            BookingService.updateStatus(this.booking._id, false)
            .then(() => eventBus.$emit('check-out', this.booking._id))
        }
    }
    
}
</script>

<style>
.booking{
    padding: 3px;
    border: 1px #869FAC solid
}

#checkIn {
  background-color: dodgerblue;
}

#checkOut {
  background-color: green;
}

#deleteBook {
  background-color: red;
}

</style>