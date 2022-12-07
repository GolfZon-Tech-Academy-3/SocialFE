<template>
    <div>
        <h2 style="width: 980px;margin: 0.5em auto;">MyPage</h2>
        <div style="width: 980px;height: 650px;margin: 0 auto;display: flex;">
            <div style="width: 140px;height: 120px;background-color: white;margin-right: 15px;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;text-align: center;font-size: 0.9em;cursor: pointer;">
                <div :class="[link === '/mypage/members' ? 'menuSelected' : 'menu']" @click="moveTo('Members')">
                    <div style="display:inline;vertical-align:middle;">
                        모임원
                    </div>
                </div>
                <div :class="[link === '/mypage/modify' ? 'menuSelected' : 'menu']" @click="moveTo('Modify')">
                    <div style="display:inline;vertical-align:middle;">
                        회원정보 수정
                    </div>
                </div>
                <div :class="[link === '/mypage/myclub' ? 'menuSelected' : 'menu']" @click="moveTo('Myclub')">
                    <div style="display:inline;vertical-align:middle;">
                        내 모임
                    </div>
                </div>
                <div :class="[link === '/mypage/myactivity' ? 'menuSelected' : 'menu']" @click="moveTo('Myactivity')">
                    <div style="display:inline;vertical-align:middle;">
                        내 액티비티 / 라운드
                    </div>
                </div>
            </div>

            <div style="width: 140px;height: 120px;background-color: white;margin-right: 15px;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;">

            </div>

            <div style="width: 360px;height: 100%;background-color: white;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;">
                <table>
                    <thead>
                        <th>권한</th>
                        <th>닉네임</th>
                        <th>성별</th>
                        <th>나이</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const link = window.location.pathname;
        console.log(link);
        const moveTo = (name) => {
            router.push({
                name: name,
            })
        }
        return {
            link,
            moveTo,
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
th {
    padding: 0.5em 0 0.5em 0;
    border-bottom: 1px solid #B8B8B8;
}
.menu {
    width: 100%;
    height: 25%;
}
.menu:hover {
    width: 100%;
    height: 25%;
    background-color: #EEEEEE;
}
.menuSelected {
    width: 100%;
    height: 25%;
    background-color: #D9D9D9;
    font-weight: bold;
}
</style>