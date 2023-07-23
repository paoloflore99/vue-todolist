// const { CreateApp } = Vue 

// const app = createApp ({
//     data () {
//         return {
//         message : "hello Vue!"

//         }
//     },
//     methods: {

//     }
// }).mount('#app')





const app = Vue.createApp({
    data() {     //todo todos

        return {

            todos: [
                { id: 1, text: ' saluatare il prof', done: false },
                { id: 2, text: 'poi la classe', done: true },
                { id: 3, text: ' e studiare JavaScript', done: false },

            ],
            newTodoText: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim() !== '') {  //stinga vuota per prendere il testo nuovo da aggiungere 

                const newTodo = {

                    id: this.todos.length + 1,           //+! id
                    text: this.newTodoText,
                    done: false,
                };

                this.todos.push(newTodo);
                this.newTodoText = '';
            }
        },
        removeTodo(todoId) {

            this.todos = this.todos.filter((todo) => todo.id !== todoId);
        },
    },
});

app.mount('#app');

