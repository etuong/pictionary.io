<template>
    <div id="app" class="app">
        <audio id="audio" src="https://www.soundjay.com/human/sounds/fart-03.mp3" autostart="false"></audio>
        <navigation @openCreator="openRoomCreator"/>
        <div class="main">
            <router-view @openRoomCreator="openRoomCreator"/>
        </div>
        <room-creator
                :isVisible="isModalVisible"
                @closeRoomCreator="closeRoomCreator">
        </room-creator>
        <footer-component></footer-component>
    </div>
</template>

<script>
  import Nav from "./components/Nav";
  import RoomCreator from "./components/RoomCreator.vue";
  import Footer from "./components/Footer";

  export default {
    name: "App",
    data() {
      return {
        isModalVisible: false,
      };
    },
    components: {
      navigation: Nav,
      "room-creator": RoomCreator,
      "footer-component": Footer,
    },
    methods: {
      openRoomCreator() {
        this.$data.isModalVisible = true;
      },
      closeRoomCreator() {
        this.$data.isModalVisible = false;
      },
    },
    sockets: {
      room_created(id) {
        this.$router.push({
          name: "room",
          params: {id: id}
        });
      },
      play_audio() {
        const sound = document.getElementById("audio");
        sound.play()
      }
    },
    watch: {
      async $route(to, from) {
        if (from.name == "room") {
          this.$socket.emit("leave_room");
        }
      },
    },
  };
</script>

<style lang="scss">
    @import "./styles/variables.scss";

    .app {
        margin: 0;
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .subtitle {
        a {
            color: $link;
        }
    }

    .main {
        flex: 1;
    }

    .section-xs {
        @media screen and (max-width: 670px) {
            padding: 1.5rem;
        }
    }
</style>
