<template>
    <nav class="nav">
        <div style="font-size: 3em; font-family: 'Bebas Neue'; margin-left: 1em;margin-right: 50%; cursor: pointer;" @click="moveTo('Main')">Social</div>
        <div class="mypage" v-if="logined">
            <div>
                MyPage
            </div>
            <div class="menus">
                <div style="width: 100%;" @click="moveTo('Members')">모임원</div>
                <div style="width: 100%;" @click="moveTo('Modify')">회원정보 수정</div>
                <div style="width: 100%;" @click="moveTo('Mymeeting')">내 모임</div>
                <div style="width: 100%;" @click="moveTo('Myactivity')">내 액티비티 / 라운드</div>
            </div>
        </div>
        
        <div v-if="!logined" style="margin-right: 2em;cursor: pointer;" @click="moveTo('Login')">Login</div>
        <div v-if="logined" style="cursor: pointer;" @click="logout">Logout</div>

        <div v-if="(logined && !showNotification)" class="material-symbols-outlined" @click="controlNotification">
            notifications
        </div>

        <div v-if="(logined && showNotification)" class="material-symbols-outlined" style="font-variation-settings:'FILL' 1" @click="controlNotification">
            notifications
            <NotificationModal />
        </div>
        <img v-if="logined" style="width:1.5em; height: 1.5em;margin-right: 2em;border-radius: 50%;" src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14_logo__dsjqlhotvrma_large_2x.png" />
    </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NotificationModal from '@/components/NotificationModal.vue';

export default {
    components: {
        NotificationModal,
    },
    setup() {
        const router = useRouter();
        const logined = ref(false);
        const showNotification = ref(false);
        const fill = ref("font-variation-settings:'FILL' 1");
        const moveTo = (name) => {
            router.push({
                name: name,
            })
        }

        const logout = () => {
            logined.value = false;
        }

        const controlNotification = () => {
            showNotification.value = !showNotification.value;
        }

        return {
            moveTo,
            logined,
            logout,
            controlNotification,
            showNotification,
            fill,
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
.material-symbols-outlined:hover {
    cursor: pointer;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.mypage {
    cursor: pointer;
}
.menus {
    width: 150px;
    height: 120px;
    position: absolute;
    background-color:white;
    box-shadow: 0 0 5px 0 gray;
    border-radius: 0.3em;
    transform: translate(-3.1em, 0);
    display: none;
    text-align: center;
    font-size: 0.9em;
}
.mypage:hover .menus {
    display: flex;flex-direction: row;flex-wrap: wrap;align-items: center;justify-content: center;
}
.notification {
    width: 150px;
    height: 120px;
    position: absolute;
    background-color:white;
    box-shadow: 0 0 5px 0 gray;
    border-radius: 0.3em;
    transform: translate(-3.1em, 0);
    display: flex;
    text-align: center;
    font-size: 0.9em;
}
</style>