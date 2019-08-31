import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
    en: {
        messages: {
            required(field) {
                return field + ' foo'
            },
            min() {
                return 'xxxx'
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
