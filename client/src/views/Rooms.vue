<template>
    <div class="container">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">This page displays all the active rooms</h1>
                    <h2 class="subtitle">Choose a room, or create new one and start the game️</h2>
                </div>
            </div>
        </section>
        <section class="section">
            <table class="table is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Players</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="room in rooms" :key="room.id">
                    <td>{{room.name}}</td>
                    <td>{{room.isPrivate ? 'Private' : 'Public'}}</td>
                    <td>{{room.players.length}}/{{room.maxPlayers}}</td>
                    <td class="is-paddingless">
                        <router-link :to="'./room/'+room.id" class="button is-light is-fullwidth">Join</router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
  export default {
    name: "About",
    data() {
      return {
        rooms: []
      };
    },
    sockets: {
      receive_rooms(rooms) {
        this.$data.rooms = rooms;
      }
    },
    mounted() {
      this.$socket.emit("get_rooms");
    }
  };
</script>