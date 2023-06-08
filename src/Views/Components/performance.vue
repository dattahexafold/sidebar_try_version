<template>
    <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Today's Money"
              value="$53,000"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+55%</span> since yesterday"
              :icon="{
                component: 'ni ni-money-coins',
                background: 'bg-gradient-primary',
                shape: 'rounded-circle'
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Today's Users"
              value="2,300"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> since last week"
              :icon="{
                component: 'ni ni-world',
                background: 'bg-gradient-danger',
                shape: 'rounded-circle'
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="New Clients"
              value="+3,462"
              description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter"
              :icon="{
                component: 'ni ni-paper-diploma',
                background: 'bg-gradient-success',
                shape: 'rounded-circle'
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Sales"
              value="$103,430"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+5%</span> than last month"
              :icon="{
                component: 'ni ni-cart',
                background: 'bg-gradient-warning',
                shape: 'rounded-circle'
              }"
            />
          </div>
          <div class="mt-4 row">
      <div class="col-md-6">
        <bar-chart
          title="Bar Chart"
          height="300"
          :chart="{
            labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
            datasets: {
              label: 'Sales by age',
              data: [15, 20, 12, 60, 20, 15],
            },
          }"
        />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
       <gradient-line-chart
              id="chart-line"
              title="Sales Overview"
              description="<i class='fa fa-arrow-up text-success'></i>
      <span class='font-weight-bold'>4% more</span> in 2021"
              :chart="{
                labels: [
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ],
                datasets: [
                  {
                    label: 'Mobile Apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
                  }
                ]
              }"
            />
      </div>




      <!-- <div class="row"> -->
          <!-- <div class="col-lg-7 mb-lg"> -->
            <!-- <gradient-line-chart
              id="chart-line"
              title="Sales Overview"
              description="<i class='fa fa-arrow-up text-success'></i>
      <span class='font-weight-bold'>4% more</span> in 2021"
              :chart="{
                labels: [
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ],
                datasets: [
                  {
                    label: 'Mobile Apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
                  }
                ]
              }"
            /> -->
          <!-- </div> -->
    </div>
   
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import MiniStatisticsCard from '@/components/cards/MiniStatisticsCard.vue';
import BarChart from '@/components/Charts/BarChart.vue'
import GradientLineChart from '@/components/Charts/GradientLineChart.vue'
    export default {
        name:"PerformanceCompo",
        components:{
            MiniStatisticsCard,
            BarChart,
            GradientLineChart
        }
    }
</script>

<style lang="scss" scoped>

</style>