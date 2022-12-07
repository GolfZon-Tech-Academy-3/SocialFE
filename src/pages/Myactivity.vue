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

            <div style="width: 140px;height: 120px;background-color: white;margin-right: 15px;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;text-align: center;font-size: 0.9em;cursor: pointer;">
                <div :class="[status === 'all' ? 'menuSelected' : 'menu']" @click="changeStatus('all')">
                    <div style="display:inline;vertical-align:middle;">
                        전체
                    </div>
                </div>
                <div :class="[status === 'before' ? 'menuSelected' : 'menu']" @click="changeStatus('before')">
                    <div style="display:inline;vertical-align:middle;">
                        활동 전
                    </div>
                </div>
                <div :class="[status === 'progress' ? 'menuSelected' : 'menu']" @click="changeStatus('progress')">
                    <div style="display:inline;vertical-align:middle;">
                        활동 중
                    </div>
                </div>
                <div :class="[status === 'complete' ? 'menuSelected' : 'menu']" @click="changeStatus('complete')">
                    <div style="display:inline;vertical-align:middle;">
                        활동 완료
                    </div>
                </div>
            </div>

            <div style="display: inline;">
                <div style="width: 360px;height: 48%;background-color: white;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;margin-bottom: 4%;">
                    <div style="width: 90%;height:8%;padding: 3% 0 3% 3%;font-size: 1.2em;font-weight: bold;">
                        내 액티비티
                    </div>
                    <div style="width: 100%;height: 86%;">
                    </div>
                </div>
                <div style="width: 360px;height: 48%;background-color: white;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;">
                    <div style="width: 90%;height:8%;padding: 3% 0 3% 3%;font-size: 1.2em;font-weight: bold;">
                        내 라운드
                    </div>
                    <div style="width: 100%;height: 86%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const link = window.location.pathname;
        const status = ref('all');
        const moveTo = (name) => {
            router.push({
                name: name,
            })
        }
        const changeStatus = (newStatus) => {
            status.value = newStatus;
        }
        return {
            link,
            moveTo,
            status,
            changeStatus,
        }
    }
}
</script>

<style scoped>
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