const { createApp } = Vue;

createApp({
    data() {
        return {
            items: []
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch('../data/data.json')
                .then(response => response.json())
                .then(data => {
                    this.items = data;
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }
}).mount('#app');
