<template>
    <div class="login">
        <div style="width: 100%;height: 20%; font-family: 'Bebas Neue';font-size: 2em;">
            SOCIAL
        </div>
        <input type="text" style="width: 80%;border: none;padding: 1em; border-radius: 1em;box-shadow: 0 0 5px 0 gray;margin-bottom: 2em;" placeholder="아이디" />
        <input type="text" style="width: 80%;border: none;padding: 1em; border-radius: 1em;box-shadow: 0 0 5px 0 gray;margin-bottom: 2em;" placeholder="비밀번호" />
        <button style="width: 90%;border: none;padding: 1em; border-radius: 1em;box-shadow: 0 0 5px 0 gray;margin-bottom: 2em; background-color: #A6A6A6;color: white;cursor: pointer;">로그인</button>
        <div style="width: 20%; margin: 0 auto;font-size: 0.8em; color: #A5A5A5; cursor: pointer;" @click="moveToSignup">회원가입</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const moveToSignup = () => {
            router.push({
                name: 'Signup',
            })
        }

        return {
            moveToSignup,
        }
    }
}
</script>

<style scoped>
.login {
    width: 300px;
    height: 300px;
    margin: 20vh auto;
    text-align: center;
}
</style>