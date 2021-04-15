<template>
  <div class="m-chart-line">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from "chart.js/auto";
import { HistoryDataInterface } from "@/interfaces/Interface";
import { onMounted } from "vue";
import dayjs from "dayjs";
interface HistoryProp {
  history: Array<HistoryDataInterface>;
}
export default {
  name: "ChartLine",
  props: {
    history: {
      type: Array,
      required: true,
    },
  },
  setup(props: HistoryProp): void {
    // X Axes labels
    const labels: Array<string> = props.history.map(
      (data: HistoryDataInterface) => {
        return dayjs(data.time_period_start).format("MMM YYYY");
      }
    );

    // Data points
    const historyData: Array<number> = props.history.map(
      (data: HistoryDataInterface) => {
        return data.price_close;
      }
    );

    onMounted(() => {
      try {
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
        new Chart(
          document.getElementById("myChart") as HTMLCanvasElement,
          config
        );
      } catch (error) {
        console.warn(error);
      }
    });
  },
};
</script>
