<template>
    <div>
        <h1>DataBindingHtml</h1>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
        <h1>Data Binding List</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>상품명</td>
                        <td>가격</td>
                        <td>카테고리</td>
                        <td>배송료</td>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(product,i) in productList">
                        <td>{{ product.product_name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.delivery_price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2>Event Click</h2>
        <div>
            <button type="button" v-on:click="increaseCount">Add 1</button>
            <p>This count is : {{ count }}</p>
            <button type="button" v-on:click="setCount(5)">Set 5</button>
        </div>
        <h1>DataBindingInputText</h1>
        <div>
            <input type="text" v-model="valueModel"  @keyup.enter="one"/>
            <h3>computed check : {{ fullName }}</h3>
            <input type="text" v-model="firstName" />
            <input type="text" v-model="lastName" />
            <h3>watch check : {{ w_fullName }}</h3>
            <input type="text" v-model="w_first" />
            <input type="text" v-model="w_last" />
        </div>
        <div>
            <input type="number" v-model.number="numberModel"/>
        </div>
        <div>
            <textarea v-model="message"></textarea>
        </div>
        <div>
            <select v-model="city" v-on:change="changeSelect">
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
        <h2>Data Binding Vif</h2>
        <div>
            <h1 v-if="type=='A'">A</h1>
            <h1 v-else-if="type=='B'">B</h1>
            <h1 v-else>C</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 1,
            type: 'B',
            lastName: 'last',
            firstName: 'first',
            productList: [
                { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 },
                { product_name: '테이프 털실', price: 3900, category: '수예용품', delivery_price: 3000 },
                { product_name: '선풍기', price: 9900, category: '생필품', delivery_price: 3000 }
            ],
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
            styleClass2: 'background-color:orange;padding-bottom:40px;',
            w_fullName: '',
            w_first: 'first',
            w_last: 'last'
        }
    },
    methods: {
        increaseCount() {
            this.count = this.count + 1
        },
        setCount(c) {
            this.count = c
        },
        one() {
            alert('one')
        },
        changeSelect() {
            alert(this.city)
        }
    },
    computed: {
        fullName() {
            return this.lastName + '-' + this.firstName
        }
    },
    watch: {
        w_first() {
            this.w_fullName = this.w_first + ' + ' + this.w_last
        },
        w_last() {
            this.w_fullName = this.w_first + '=' + this.w_last
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
