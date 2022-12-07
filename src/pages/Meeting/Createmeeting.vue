<template>
    <div>
        <h2 style="width: 980px;margin: 0.5em auto;">모임 개설</h2>
        <div style="width: 980px;height: 650px;margin: 0 auto;display: flex;">
            <div style="width: 140px;height: 60px;background-color: white;margin-right: 15px;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;text-align: center;font-size: 0.9em;cursor: pointer;">
                <div :class="[type === 'public' ? 'menuSelected' : 'menu']" @click="changeType('public')">
                    <div style="display:inline;vertical-align:middle;">
                        공개형
                    </div>
                </div>
                <div :class="[type === 'private' ? 'menuSelected' : 'menu']" @click="changeType('private')">
                    <div style="display:inline;vertical-align:middle;">
                        비공개형
                    </div>
                </div>
            </div>

            <div style="width: 500px;height: 100%;background-color: white;box-shadow: 0 0 5px 0 gray;border-radius: 0.5em;margin-left: 85px;text-align: center;">
                <div v-if="!inserted" style=" width: 80px; height: 80px; background-color: #d9d9d9; border-radius: 1em; margin: 1em auto 2em auto;box-shadow: 0 0 5px 0 gray" ></div>
                <img v-if="inserted" :src="src" style=" width: 80px; height: 80px; border-radius: 1em; margin: 1em auto; overflow: hidden; object-fit: cover;box-shadow: 0 0 5px 0 gray" />
                <input hidden type="file" id="file" accept="image/*" @change="changeImage($event)" />
                <label for="file">
                <div style=" width: 10%; margin: 1em auto; background-color: #a6a6a6; color: white; cursor: pointer; box-shadow: 0 0 5px 0 gray; padding: 0.2em; border-radius: 1em; " > 선택 </div>
                </label>
                <div>
                <input placeholder="모임명" type="text" style=" width: 84%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray; margin-bottom: 2em; " />
                <textarea style="resize: none;border:none;box-shadow: 0 0 5px 0 gray;padding: 1em;width: 84%;margin-bottom: 1em;border-radius: 1em;" placeholder="모임 설명" />
                    <div style="margin-bottom: 1em">
                        <select style=" width: 26%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray; margin-bottom: 1em; margin-right: 2em;background-color: white;" >
                            <option value="none">최소 나이</option>
                            <option v-for="age in 47" :key="age">{{ age + 13 }} 세</option>
                        </select>
                        <select style=" width: 26%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray; margin-bottom: 1em; margin-right: 2em;background-color: white;" >
                            <option value="none">최대 나이</option>
                            <option v-for="age in 47" :key="age">{{ age + 13 }} 세</option>
                        </select>
                        <select style=" width: 26%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray; margin-bottom: 1em; " >
                            <option value="none">성별</option>
                            <option value="남">남</option>
                            <option value="여">여</option>
                            <option value="상관없음">상관없음</option>
                        </select>
                        <div style="text-align: center; margin-left: 2em; margin-bottom: 1em; font-size: 0.8em; color: #a5a5a5;" >
                            나이 미설정 시 나이 가입 조건이 없습니다
                        </div>
                    </div>
                    <div style="margin-bottom: 1em">
                        <select v-model="selectedCity" style=" width: 42%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray; margin-right: 2em;" >
                            <option value="none">시 / 도</option>
                            <option v-for="city in cities" :key="city">{{ city }}</option>
                        </select>
                        <select :disabled="selectedCity === 'none'" v-model="selectedSi" style=" width: 42%; border: none; padding: 1em; border-radius: 1em; box-shadow: 0 0 5px 0 gray;" >
                            <option value="none">시 / 군 / 구</option>
                            <option v-for="s in si[selectedCity]" :key="s">{{s}}</option>
                        </select>
                    </div>
                </div>
                <div style="width: 90%;height: 5%;margin: 0 auto;display: flex;text-align: center;align-items: center;justify-content: top;">
                    <div v-if="type === 'public'">
                        <input type="checkbox" style="border-color: #a5a5a5;"/>
                        <span style="color: #a5a5a5;font-size: 0.8em;">
                            가입 시 승낙 필요
                        </span>
                    </div>
                </div>
                <button style="width: 20%;border: none;padding: 1em; border-radius: 1em;box-shadow: 0 0 5px 0 gray;margin-bottom: 2em; background-color: #A6A6A6;color: white;cursor: pointer;">개설하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const src = ref('');
        const type = ref('public');
        const inserted = ref(false);
        const file = ref(null);
        const cities = ref([
      '서울특별시',
      '부산광역시',
      '대구광역시',
      '인천광역시',
      '광주광역시',
      '대전광역시',
      '울산광역시',
      '세종특별자치시',
      '경기도',
      '강원도',
      '충청북도',
      '충청남도',
      '전라북도',
      '전라남도',
      '경상북도',
      '경상남도',
      '제주특별자치도'
    ]);
        const si = ref({
        서울특별시: [
            "강남구",
            "강동구",
            "강북구",
            "강서구",
            "관악구",
            "광진구",
            "구로구",
            "금천구",
            "노원구",
            "도봉구",
            "동대문구",
            "동작구",
            "마포구",
            "서대문구",
            "서초구",
            "성동구",
            "성북구",
            "송파구",
            "양천구",
            "영등포구",
            "용산구",
            "은평구",
            "종로구",
            "중구",
            "중랑구",
        ],
        부산광역시: [
            "강서구",
            "금정구",
            "기장군",
            "남구",
            "동구",
            "동래구",
            "부산진구",
            "북구",
            "사상구",
            "사하구",
            "서구",
            "수영구",
            "연제구",
            "영도구",
            "중구",
            "해운대구",
        ],
        대구광역시: [
            "남구",
            "달서구",
            "달성군",
            "동구",
            "북구",
            "서구",
            "수성구",
            "중구",
        ],
        인천광역시: [
            "강화군",
            "계양구",
            "남동구",
            "동구",
            "미추홀구",
            "부평구",
            "서구",
            "연수구",
            "옹진군",
            "중구",
        ],
        광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
        대전광역시: ["대덕구", "동구", "서구", "유성구", "중구"],
        울산광역시: ["남구", "동구", "북구", "울주군", "중구"],
        세종특별자치시: ["세종특별자치시"],
        경기도: [
            "가평군",
            "고양시",
            "과천시",
            "광명시",
            "광주시",
            "구리시",
            "군포시",
            "김포시",
            "남양주시",
            "동두천시",
            "부천시",
            "성남시",
            "수원시",
            "시흥시",
            "안산시",
            "안성시",
            "안양시",
            "양주시",
            "양평군",
            "여주시",
            "연천군",
            "오산시",
            "용인시",
            "의왕시",
            "의정부시",
            "이천시",
            "파주시",
            "평택시",
            "포천시",
            "하남시",
            "화성시",
        ],
        강원도: [
            "강릉시",
            "고성군",
            "동해시",
            "삼척시",
            "속초시",
            "양구군",
            "양양군",
            "영월군",
            "원주시",
            "인제군",
            "정선군",
            "철원군",
            "춘천시",
            "태백시",
            "평창군",
            "홍천군",
            "화천군",
            "횡성군",
        ],
        충청북도: [
            "괴산군",
            "단양군",
            "보은군",
            "영동군",
            "옥천군",
            "음성군",
            "제천시",
            "증평군",
            "진천군",
            "청주시",
            "충주시",
        ],
        충청남도: [
            "계룡시",
            "공주시",
            "금산군",
            "논산시",
            "당진시",
            "보령시",
            "부여군",
            "서산시",
            "서천군",
            "아산시",
            "예산군",
            "천안시",
            "청양군",
            "태안군",
            "홍성군",
        ],
        전라북도: [
            "고창군",
            "군산시",
            "김제시",
            "남원시",
            "무주군",
            "부안군",
            "순창군",
            "완주군",
            "익산시",
            "임실군",
            "장수군",
            "전주시",
            "정읍시",
            "진안군",
        ],
        전라남도: [
            "강진군",
            "고흥군",
            "곡성군",
            "광양시",
            "구례군",
            "나주시",
            "담양군",
            "목포시",
            "무안군",
            "보성군",
            "순천시",
            "신안군",
            "여수시",
            "영광군",
            "영암군",
            "완도군",
            "장성군",
            "장흥군",
            "진도군",
            "함평군",
            "해남군",
            "화순군",
        ],
        경상북도: [
            "경산시",
            "경주시",
            "고령군",
            "구미시",
            "군위군",
            "김천시",
            "문경시",
            "봉화군",
            "상주시",
            "성주군",
            "안동시",
            "영덕군",
            "영양군",
            "영주시",
            "영천시",
            "예천군",
            "울릉군",
            "울진군",
            "의성군",
            "청도군",
            "청송군",
            "칠곡군",
            "포항시",
        ],
        경상남도: [
            "거제시",
            "거창군",
            "고성군",
            "김해시",
            "남해군",
            "밀양시",
            "사천시",
            "산청군",
            "양산시",
            "의령군",
            "진주시",
            "창녕군",
            "창원시",
            "통영시",
            "하동군",
            "함안군",
            "함양군",
            "합천군",
        ],
        제주특별자치도: ["서귀포시", "제주시"],
        });
        const selectedCity = ref('none');
        const selectedSi = ref('');
        const changeType = (newType) => {
            type.value = newType;
        }

        const changeImage = (e) => {
            file.value = e.target.files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                src.value = e.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            inserted.value = true;
        };

        return {
            src,
            type,
            changeType,
            changeImage,
            inserted,
            cities,
            si,
            selectedCity,
            selectedSi,
        }
    }
}
</script>

<style scoped>
.menu {
    width: 100%;
    height: 50%;
}
.menu:hover {
    width: 100%;
    height: 50%;
    background-color: #EEEEEE;
}
.menuSelected {
    width: 100%;
    height: 50%;
    background-color: #D9D9D9;
    font-weight: bold;
}
</style>