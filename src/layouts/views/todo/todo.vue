<script>
export default {
    data() {
        return {
            num: 0,
            todoList: [],
            affair: '',
            today: new Date()
        }
    },
    methods: {
        joinList() {
            if (this.affair != '') {
                let todo = {}
                // todo.id = ++this.num;
                todo.thing = this.affair;
                this.todoList.push(todo)
                this.affair = '';
            }
            // this.$store.state.List = this.todoList;
            // console.log(this.todoList)
            localStorage.setItem('List', JSON.stringify(this.todoList))
        },
        remove(list) {
            this.todoList = this.todoList.filter((t) => t !== list) //为什么这里加花括号会报错？
            // this.$store.state.List = this.todoList;
            localStorage.setItem('List', JSON.stringify(this.todoList))
        },
        success(list) {
            this.num++;
            this.remove(list)
            let year = this.today.getFullYear();
            let month = this.today.getMonth() + 1;
            let day = this.today.getDate();
            let key = `${year}-${month}-${day}`
            localStorage.setItem(key, this.num);
            console.log(this.today)
        },
    },
    mounted() {
        let year = this.today.getFullYear();
        let month = this.today.getMonth() + 1;
        let day = this.today.getDate();
        let key = `${year}-${month}-${day}`
        this.num = localStorage.getItem(key);
        if (localStorage.getItem('List') != undefined) {
            this.todoList = JSON.parse(localStorage.getItem('List'))
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="user">
            <i class="iconfont" style="color: blue;" @click="changeColor">&#xe67e</i>
            Have A Good Day! lovely User
        </div>
        <div class="input-box" @click="joinList" @keydown.enter="joinList">
            <input class="input" v-model="affair" />
            <button class="add">
                <i class="iconfont" style="color:#455c7c">&#xe529</i>
            </button>
        </div>
        <div class="list">
            <div v-for="list in todoList">
                <span class="thing">{{ list.thing }}</span>
                <span>
                    <button @click="success(list)" class="checked">
                        <i class="iconfont" style="color: white;">&#xe65b</i>
                    </button>
                    <button @click="remove(list)" class="remove">
                        <i class="iconfont" style="color: white;">&#xe65c</i>
                    </button>
                </span>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style></style>

