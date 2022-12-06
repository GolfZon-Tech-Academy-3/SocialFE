<template>
    <nav class="nav">
        <div style="width: 60%;font-size: 3em; font-family: 'Bebas Neue'; margin-left: 1em; cursor: pointer;" @click="moveToMain">Social</div>
        <div v-if="logined" style="cursor: pointer">MyPage</div>
        <div v-if="logined" class="material-symbols-outlined">notifications</div>
        <div v-if="!logined" style="margin-right: 2em;cursor: pointer;">Login</div>
        <div v-if="logined" style="cursor: pointer;" @click="logout">Logout</div>
        <img v-if="logined" style="width:1.5em; height: 1.5em;margin-right: 2em;border-radius: 50%;" src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14_logo__dsjqlhotvrma_large_2x.png" />
    </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const logined = ref(true);
        const moveToMain = () => {
            router.push({
                name: 'Main',
            })
        }

        const logout = () => {
            logined.value = false;
        }

        return {
            moveToMain,
            logined,
            logout,
        }
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.75em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 gray;
    background-color:white;
}
.material-symbols-outlined {
    cursor: pointer;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>