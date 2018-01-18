<template lang="html">
  <div class="container">
    <h2>{{title}}</h2>
    <p>{{infoText}}</p>
    <form>
      <input id="publicKeyInput" v-model="pubKey" v-on:click="resetForm">
      <p class="warning">{{warningText}}</p>
      <router-link to="/miner" class="start-mining">Start Mining</router-link>
      <div class='adblock-warning'>Please note that miner can be blocked by your adblock extension. Deactivate or make an exception for this page from your adblock settings.</div>
    </form>
  </div>
</template>

<script>
import store from "../store";
import _ from "lodash";

export default {
  data() {
    return {
      title: "Heart Miner",
      infoText: "Please enter your wallet address",
      pubKey: _.cloneDeep(this.$store.state.publicKey)
    };
  },
  computed: {
    warningText() {
      if (this.pubKey.length === 0) {
        return "Please enter a valid public key";
      } else if (this.pubKey.length !== 97) {
        return "Invalid Public Key";
      } else {
      }
    }
  },
  watch: {
    pubKey(newValue) {
      this.pubKey = newValue;
      this.$store.commit("updatePubKey", newValue);
    }
  },
  methods: {
    resetForm: function(e) {
      e.preventDefault();
      this.pubKey = "";
    }
  }
};
</script>

<style lang="css">
#publicKeyInput {
  width: 220px;
}
.start-mining {
  font-size: 18px;
}

.adblock-warning {
  width: 220px;
  margin: 10px auto auto auto;
  font-size: 12px;
}

.start-mining:hover {
  text-decoration: none;
}

.warning {
  color: #ff0000;
}
.panel-body {
  font-family: "Lucida Console", "Lucida Sans Typewriter", monaco,
    "Bitstream Vera Sans Mono", monospace;
  font-size: 12px;
  text-align: left;
  color: #2bf22b;
  background-color: #000;
}
</style>
