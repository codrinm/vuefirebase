<template>
  <v-data-table :headers="headers" :items="bookingsList">
    <template #top>
      <v-toolbar flat dense>
        <v-spacer/>
        <v-btn rounded color="primary" @click="add"><v-icon>mdi-plus</v-icon></v-btn>
      </v-toolbar>
    </template>
    <template #item.fromTime="{value}">
      {{ formatDate(value) }}
    </template>
    <template #item.toTime="{value}">
      {{ formatDate(value) }}
    </template>
  </v-data-table>
</template>

<script>
import {mapState} from 'vuex';
import {newBooking} from '@/components/mock';
import {send} from '@/api';

export default {
  name: 'BookingsTable',
  computed: {
    ...mapState('bookings', ['bookings']),
    bookingsList() {
      return Object.values(this.bookings);
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
    add() {
      send({
        type: 'set-document',
        ref: {path: 'bookings'},
        document: newBooking()
      });
    },
    formatDate(str) {
      const d = new Date(str);
      return d.toLocaleTimeString();
    }
  }
};
</script>

<style scoped>

</style>
