<template>
  <div>
    <h1>Chart</h1>
    <div ref="headline" id="chart"></div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import history from "@/mock/OhlcvBtcUsd4Mth.json";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
export default {
  name: "MonthlyChart",
  setup() {
    const headline = ref();

    onMounted(() => {
      const labels: Array<string> = history.map((e) => {
        return dayjs(e.time_period_start).format("MMM YYYY");
      });

      const historyData: Array<number> = history.map((e) => {
        return e.price_close;
      });

      const data = {
        labels: labels.reverse(),
        datasets: [
          {
            label: "Bitcoin",
            data: historyData.reverse(),
            fill: false,
            borderColor: "rgb(100,100,100)",
            tension: 0.3,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
      };

      try {
        const chart: Chart = new Chart(
          document.getElementById("myChart") as HTMLCanvasElement,
          config
        );
      } catch (error) {
        console.warn(error);
      }
    });

    return {
      headline,
      //chart,
      //lineSeries,
    };
  },
};
</script>

<style scoped></style>
