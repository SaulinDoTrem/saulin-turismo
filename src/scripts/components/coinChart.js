export async function CoinChart() {
    const responseData = await request();

    const [labels, data] = handleWithData(responseData);

    const chart = buildChart(labels, data);

    $(".chart-form").submit(function (event) {
        event.preventDefault();
        const target = event.target;

        const days = target["chart-form__input"].value;

        $.ajax({
            url: `https://economia.awesomeapi.com.br/daily/BRL-MXN/${days}`,
            success: function (responseData) {
                removeData(chart);

                const [labels, data] = handleWithData(responseData);

                addData(chart, labels, data);
            },
        });
    });

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    function handleWithData(responseData) {
        const labels = [],
            data = [];

        responseData.forEach((e) => {
            const price = e.bid;
            const timestamp = adaptTimestamp(e.timestamp);

            labels.push(timestamp);
            data.push(price);
        });

        labels.reverse();
        data.reverse();

        return [labels, data];
    }

    function adaptTimestamp(timestamp) {
        const date = new Date(timestamp * 1000).toString().split(" ");

        const hour = date[4].split(":");

        const newDate = `${date[2]} ${date[1]}. ${hour[0]}:${hour[1]}`;

        return newDate;
    }

    function buildChart(labels, data) {
        const config = {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Variação do Peso Mexicano",
                        data: data,
                    },
                ],
            },
        };

        const ctx = $("#myChart")[0].getContext("2d");

        return new Chart(ctx, config);
    }

    async function request() {
        const response = await fetch("https://economia.awesomeapi.com.br/daily/BRL-MXN/15", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });

        const responseData = await response.json();

        return responseData;
    }
}
