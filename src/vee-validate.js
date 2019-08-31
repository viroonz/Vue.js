import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
    en: {
        messages: {
            required(fieldName) {
                return fieldName + ' foo'
            },
            min() {
                return 'ต้องยาวขั้นต่ำ 3 ตัวอักษร '
            }
        },

        attributes: {
            username: 'รหัสผู้ใช้'
        }
    },
    th: {
        messages: {}
    }
}

Vue.use(VeeValidate, {
    locale: 'en',
    dictionary: dictionary
})
