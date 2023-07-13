<template>
    <div>
        <h1>DataBindingHtml</h1>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
        <h1>DataBindingInputText</h1>
        <div>
            <input type="text" v-model="valueModel" />
        </div>
        <div>
            <input type="number" v-model.number="numberModel"/>
        </div>
        <div>
            <textarea v-model="message"></textarea>
        </div>
        <div>
            <select v-model="city">
                <option>선택해주세요</option>
                <option value="02">서울</option>
                <option value="051">부산</option>
                <option value="064">제주</option>
            </select>
        </div>
        <div><label><input type="checkbox" v-model="checked_test" true-value="Yes" false-value="No" />{{ checked_test }}</label></div>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked"/>서울</label>
            <label><input type="checkbox" value="부산" v-model="checked"/>부산</label>
            <label><input type="checkbox" value="제주" v-model="checked"/>제주</label>
            <div><span>체크한 지역 :  {{ checked }}</span></div>
        </div>
        <h1>DataBindingAttribue</h1>
        <div><img v-bind:src="imgSrc" /></div>
        <h2>DataBindingButton</h2>
        <div>
            <input type="text" v-model="textValue"/>
            <button type="button" v-bind:disabled="textValue==''" >Click</button>
        </div>
        <h2>DataBindingClass</h2>
        <div>
            <div class="container" v-bind:class="{'active': isActive, 'text-red':hasError}" > Class Binding</div>
            <div class="container" v-bind:class="[  errorClass]" > Class Object Binding</div>
            <div class="container" v-bind:style="styleClass" > Class inline style Binding</div>
            <div class="container" v-bind:style="[styleClass1, styleClass2 ]" > Class inline style Binding</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            htmlString: '<p style="color:red;">This is red string</p>',
            valueModel: 'South Korea',
            numberModel: 3,
            message: '여러줄 입력 가능한 text \n두번째 줄',
            city: '064',
            checked_test: [],
            checked: [],
            imgSrc: 'https://kr.vuejs.org/images/logo.png',
            textValue: 'test',
            isActive: true,
            hasError: true,
            activeClass: 'active',
            errorClass: 'text-red',
            styleClass: { color: 'orange', 'background-color': 'lightblue' },
            styleClass1: 'color:blue;height:30px;',
            styleClass2: 'background-color:orange;padding-bottom:40px;'
        }
    }
}
</script>

<style scoped>
container {
    width : 100%;
    height: 200px;
}
.active {
    background-color: blue;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
