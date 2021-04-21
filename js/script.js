const app = new Vue({
    el: "#app",
    data: {
        images: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
            './images/image5.jpg',
            './images/image6.jpg'
        ],
        imageIndex: 0,
    },
    created() {
        this.loop();
    },
    methods: {
        next() {
            this.imageIndex++;
            if (this.imageIndex > this.images.length - 1) {
                this.imageIndex = 0;
            }
        },
        prev() {
            this.imageIndex--;
            if (this.imageIndex < 0) {
                this.imageIndex = this.images.length - 1;
            }
        },
        loop() {
            setInterval(() => {
                this.next();
            }, 3000)
        }
    }
})