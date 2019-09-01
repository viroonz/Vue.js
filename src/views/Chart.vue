<template>
    <div>
        <h1 class="title">Chart</h1>
     <button @click="type=t" class="btn btn-dark" style="margin:3px;" v-for="t in types" :key="t">{{ t }}</button>
       <hr>
        <apexcharts :type="type" :series="series" :options="options" />
    </div>
</template>

<script>
export default {
    data (){ 

        return{
            type:'line'
        }
    },
    computed: {
        types() {
            return ['line', 'bar', 'histogram', 'area', 'scatter', 'heatmap']
        },

        series() {
            return [
                {
                    name: '2019',
                    data: [3, 2, 1, 4, 10]
                },
                {
                    name: '2018',
                    data: [3, 4, 3, 7, 1]
                }
            ]
        },

        options() {
            return {
                xaxis: {
                    categories: ['Apple', 'Orange', 'Lemon', 'Mango', 'Cherry']
                }
            }
        }
    }
}
</script>