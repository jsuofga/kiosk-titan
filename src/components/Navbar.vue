<template>
  <nav>
      <v-app-bar
      app
      color="grey"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="../assets/homeleganceLogoNoCircle.png"
          transition="scale-transition"
          width = "100"
       
        />
         <!-- <v-toolbar-title>Homelegance</v-toolbar-title> -->

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Admin</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
    


</template>

<script>

export default {
  name: 'Navbar',

  data: () => ({
    //
  }),
};
</script>