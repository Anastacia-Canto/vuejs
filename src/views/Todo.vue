<template>
    <div class="Home">
		<v-text-field
			class="pa-3"
            v-model="newTaskTitle"
			@click:append="addTask"
			@keyup.enter="addTask"
            outlined
            label="Add task"
            clearable
			append-icon="mdi-playlist-plus"
			hide-details
          ></v-text-field>
		<v-list class="pt-0"
		flat>
			<div
			v-for="task in tasks"
			:key="task.id">
				<v-list-item
				  @click="doneTask(task.id)"
				  :class="{ 'green lighten-2': task.done }">
					<template v-slot:default>
						<v-list-item-action>
							<v-checkbox
							:input-value="task.done"
							color="primary"
							></v-checkbox>
						</v-list-item-action>

						<v-list-item-content >
							<v-list-item-title
							:class="{ 'text-decoration-line-through': task.done}">
							{{ task.title }}
						</v-list-item-title>
						</v-list-item-content>
						<v-btn
							icon
							color="green"
							:class="{ 'white': task.done}"
							@click.stop="deleteTask(task.id)">
              				<v-icon>mdi-delete-outline</v-icon>
            			</v-btn>
					</template>
				</v-list-item>
				<v-divider></v-divider>
			</div>
		</v-list>
    </div>
</template>

<script>
  
  export default {
	name: 'Home',
    data() {
		return {
			newTaskTitle: '',
			tasks: [
				
			]
		}
	},
	methods: {
		doneTask(id) {
			let task = this.tasks.find(task => task.id === id)
			task.done = !task.done
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter(task => task.id !== id)
		},
		addTask() {
			let newTask = {
				id: Date.now(),
				title: this.newTaskTitle,
				done: false
			}
			this.tasks.push(newTask)
			this.newTaskTitle = ''
		}
	} 
  }

</script>
