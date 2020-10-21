<template>
  <div id="app">
    <h1>Hotel Bookings</h1>
    <booking-form></booking-form>
    <booking-grid :bookings="bookings"></booking-grid>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingForm from './components/BookingForm.vue';
import BookingGrid from './components/BookingGrid.vue';
import BookingService from './services/BookingService.js';


export default {
  name: 'App',
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)  
    })
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
    eventBus.$on('check-in', (id, status) => {
      let booking_item = this.bookings.find(booking => booking._id === id)
      this.booking_item.checked_in = status
    })
      eventBus.$on('check-out', (id) => {
      let booking = this.bookings.find(booking => booking._id === id)
      this.booking.checked_in = status
    })

  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings)
    }
  },
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
