<template>
  <v-app id="inspire">
    <v-navigation-drawer
		v-model="drawer"
		app
	>
		<div class="green lighten-3">

			<v-list-item>
				<v-list-item-content>
					<v-avatar
						size="150"
						>
						<img
							src="anastacia.jpg"
							alt="Anastácia"
						
						>
					</v-avatar>
				<v-list-item-title class="text-h6">
					Anastácia Canto
				</v-list-item-title>
				<v-list-item-subtitle>
					anaanestesia@gmail.com
				</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</div>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
		  :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      dark
      prominent
      src="mountains.jpg"
	  app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Personal Agenda</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
		<router-view></router-view>
	</v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
		drawer: null,
		items: [
		  { title: 'Todo', icon: 'mdi-format-list-checks', to:'/todo' },
		  { title: 'Calendar', icon: 'mdi-calendar-month', to:'/calendar' },
          { title: 'About', icon: 'mdi-help-box', to:'/about' }
        ]
	}),
  }
</script>