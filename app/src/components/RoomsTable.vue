<template>
  <v-card
    class="pa-4"
    width="500"
  >
  <h2>Rooms</h2>
  <div v-for="(room, index) in bookedRooms">
    <div class="d-flex justify-space-between py-4">
      <span><strong>{{ index }}</strong></span>
      <span>{{ room.length || 0 }}</span>
    </div>
  </div>
  </v-card>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'RoomsTable',
  props: ['bookedRooms'],
};
</script>

<style scoped>

</style>
