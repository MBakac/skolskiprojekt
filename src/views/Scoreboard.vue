<template>
    <div>
        <b-table :data="data" :columns="columns"></b-table>
        <section class="hero is-success" style="margin-top: 1rem;">
                <div class="hero-body">
                    <div class="container"> 
                        <b-button class="centered" @click="restart()">Probaj ponovo!</b-button>
                    </div>
                </div>	
		</section>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        methods: {
            restart() {
                this.$router.push("/quiz")
            }
        },
        created: function () {
            fetch("https://safe-dusk-39986.herokuapp.com/quiz")
                .then(data => data.json())
                .then(data => {
                    data = data.sort((a, b) => (a.value >= b.value) ? -1 : 1)

                    data = data.map((item, index) => ({
                        rank: index + 1,
                        nickname: item.key,
                        points: item.value,
                        date: new Date(item.date).toLocaleString("hr-HR")
                    }))

                    this.data = data
                })
        },
        data() {
            return {
                data: [],
                columns: [
                    {
                        field: 'rank',
                        label: 'Mjesto',
                        numeric: true,
                        centered: true,
                    },
                    {
                        field: 'nickname',
                        label: 'Nadimak',
                        centered: true,
                    },
                    {
                        field: 'points',
                        label: 'Bodovi',
                        centered: true,
                    },
                    {
                        field: 'date',
                        label: 'Datum',
                        centered: true
                    },
                ]
            }
        }
    }
</script>