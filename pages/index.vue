<template>
  <v-container fluid>
    <v-layout row>
      <v-flex sm3 class="pa-2">
        <station-search
          label="Station"
          dense
          outlined
          v-model="station"
          clearable
          @onSelect="station = $event"
          @onClear="station = null"
          placeholder="Search by name"
        >
        </station-search>
      </v-flex>
    </v-layout>

    <v-layout row> </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    station: null,
    bookings: []
  }),
  mounted() {
    this.fetchStations();
  },
  methods: {
    fetchStations() {
      this.loading = true;
      axios
        .get(`stations`)
        .then(response => {
          if (response.data.length > 0) {
            this.bookings = response.data;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
