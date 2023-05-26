<script>
export default {
    data() {
        return {
            num: 0,
            today: new Date()
        }
    },
    methods: {
        routerToGithub() {
            this.$router.push('/github')
        },
        routerToTodo() {
            this.$router.push('/')
        },
        routerToQQ() {
            this.$router.push('/qq')
        },
        routerToOptions() {
            this.$router.push('/options')
        }
    },
    mounted() {
        let year = this.today.getFullYear();
        let month = this.today.getMonth() + 1;
        let day = this.today.getDate();
        let key = `${year}-${month}-${day}`

        console.log(localStorage.getItem(key), key)

        this.num = localStorage.getItem(key) || 0;

        console.log(this.num)

        if (localStorage.getItem('List') != undefined) {
            this.todoList = JSON.parse(localStorage.getItem('List'))
        }

        let i = document.getElementsByClassName('meumIcon')

        i.forEach = Array.prototype.forEach

        i.forEach((item) => {
            item.addEventListener('click', function () {
                console.log("click")
                i.forEach((e) => {
                    e.style.color = '#000000'
                })
                item.style.color = '#3502df'
            })
        })



        let musicI = document.getElementsByClassName('musicI')
        let flag = 0;
        let mus = document.getElementById('music')
        musicI[1].onclick = () => {
            if (flag == 0) {
                musicI[1].innerHTML = '&#xe541'
                flag = 1;
                mus.play()
            }
            else {
                musicI[1].innerHTML = '&#xe525'
                flag = 0;
                mus.pause()
            }
        }

        const container = document.querySelector('.container');
        const tbody = container.querySelector('tbody');
        const today = new Date();
        const pastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        for (let date = pastMonth; date <= today; date.setDate(date.getDate() + 1)) {
            const cell = document.createElement('td');
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let key = `${year}-${month}-${day}`
            let activity = parseInt(localStorage.getItem(key));

            // const activity = Math.floor(Math.random() * 4);
            if (activity > 0) {
                switch (activity) {
                    case 0:
                        cell.className = 'inactive';
                        break;
                    case 1:
                        cell.className = 'low';
                        break;
                    case 2:
                        cell.className = 'medium';
                        break;
                    case 3:
                        cell.className = 'high';
                        break;
                    default:
                        cell.className = 'very-high';
                        break;
                }
            }
            cell.addEventListener('click', () => {
                console.log(key);
                console.log(activity)
            })
            tbody.appendChild(cell);
        }
    }
}
</script>

<template>
    <div class="body">
        <div class="filter">
            <div id="box">
                <div class="aside-left">
                    <div class="av">
                        <i class="iconfont">&#xe8ba</i>
                    </div>
                    <div class="meum">
                        <i class="iconfont meumIcon" style="color: #3502df" @click="routerToTodo">&#xe516</i>
                        <i class="iconfont meumIcon" @click="routerToGithub">&#xe547</i>
                        <i class="iconfont meumIcon" @click="routerToQQ">&#xe546</i>
                        <i class="iconfont meumIcon" @click="routerToOptions">&#xe681</i>
                        <i class="iconfont meumIcon" @click="routerToQQ">&#xe680</i>
                    </div>
                </div>
                <div class="main">
                    <router-view></router-view>
                </div>
                <div class="aside-right">
                    <div class="title">
                        <i class="iconfont">&#xe513</i>
                        MORE
                    </div>
                    <div class="music">
                        <div class="introMusic"><i class="iconfont">&#xe50f </i> MUSIC白噪音</div>
                        <div class="replay">
                            <i class="iconfont musicI">&#xe53a</i>
                            <i class="iconfont musicI">&#xe525</i>
                            <i class="iconfont musicI">&#xe53b</i>
                            <audio controls id="music">
                                <source src="../../public/music1.mp3" />
                            </audio>
                        </div>
                    </div>
                    <div class="title">
                        <i class="iconfont">&#xe528</i>
                        DATA
                    </div>
                    <div class="data">
                        <h3>CONTRIBUTION</h3>
                        <div class="container">
                            <table>
                                <thead>
                                </thead>
                                <tbody>
                                    <!-- contribution cells will be generated by JavaScript -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="today">
                        <h3>今天您已完成件{{ this.num }}任务~</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

