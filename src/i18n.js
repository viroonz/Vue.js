import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {
        hello: 'Hello',
        months: {
            1 : 'January',
            2 : 'February'
        },
        apple: 'an apple | apples'
    },
    th: {
        hello: 'สวัสดี',
        months: {
            1 : 'มกราคม',
            2 : 'กุมภาพันธ์'
        },
        apple: 'an apple | apples'
        
    }
}

const i18n = new VueI18n({
    messages: messages,
    locale: 'th'
})

export default i18n