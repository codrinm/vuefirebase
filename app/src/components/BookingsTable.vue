<template>
  <div>
    <v-data-table :headers="headers" :items="bookingsList">
      <template #top>
        <v-toolbar flat dense>
          <v-spacer/>
          <booking-form/>
        </v-toolbar>
      </template>
      <template #item.fromTime="{value}">
        {{ formatDate(value) }}
      </template>
      <template #item.toTime="{value}">
        {{ formatDate(value) }}
      </template>
    </v-data-table>
    <v-spacer class="pa-4" />
    <rooms-table :booked-rooms="bookedRooms" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import BookingForm from '@/components/BookingForm.vue';
import RoomsTable from '@/components/RoomsTable.vue';

export default {
  name: 'BookingsTable',
  components: {BookingForm, RoomsTable},
  computed: {
    ...mapState('bookings', ['bookings']),
    ...mapState('rooms', ['rooms']),
    bookingsList() {
      return Object.values(this.bookings);
    },
    bookedRooms() {
      const bookings = Object.groupBy(Object.values(this.bookings), ({ room }) => room.ref.path);
      return { ...this.rooms, ...bookings };
    },
    headers() {
      return [
        {text: 'Room', value: 'room.title'},
        {text: 'Subject', value: 'title'},
        {text: 'From', value: 'fromTime'},
        {text: 'To', value: 'toTime'}
      ];
    }
  },
  methods: {
    formatDate(str) {
      const d = new Date(str);
      return d.toLocaleTimeString();
    }
  }
};
</script>

<style scoped>

</style>
