<template lang='html'>
  <div id="bookingsGrid">
      <booking-item v-for="(booking, index) in bookings" :booking="booking" :key="index"></booking-item>
    </div>
</template>

<script>
import BookingItem from './Booking.vue';

export default {
    name: 'booking-grid',
    props: ['bookings'],
    components: {
        'booking-item':BookingItem
    },
    
   
}
</script>

<style lang="css" scoped>
#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}

</style>