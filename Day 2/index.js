const{ createApp, ref } = Vue;

const app = createApp({
    setup() {
        const url ="https://randomuser.me/api/ ";
        const profileUser = ref("");
        const nameUser = ref ("");
        const nameLast = ref ("");
        const image = ref ("");

        const generateUser = async () => {
            const resUser = await axios.get(url);
            image.value = resUser.data.results[0].picture.large;
            nameUser.value = resUser.data.results[0].name.first;
            lastName.value = resUser.data.results[0].name.last;
            profileUser.value = resUser.data.results[0].picture.large;
        };

        return{
            generateUser,
            profileUser,
            nameUser,
            nameLast,
            image,
        };
    },
});
    app.mount("#app");