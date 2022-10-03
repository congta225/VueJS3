const app = Vue.createApp({
    template: `<h1>Hello Friend {{ teamName }} and {{ isHello ? firstName + " " + lastName : ""}}</h1>
    <button v-on:click="onChangeName">Change Name</button>
    <button @click="onChangeName">Change Name But Shorter</button>
    <!-- v-if: nếu thỏa mãn điều kiện thì h1 mới hiển thị-->
    <div class="modal" v-if="isShowModal">
        <h1>Modal Content </h1>
    </div>`,
    
    data(){
        return{
            teamName:"Katachi",
            firstName: "Công",
            lastName: "Tạ",
            isHello: true,
            isShowModal: false 
        };
    },

    methods: {
        onChangeName(){
            this.firstName = "Hương"
            this.lastName = "Mai";
            this.isShowModal = !this.isShowModal;
        },
    },
});

app.mount("#mount"); 