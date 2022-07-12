import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

Vue.use(VueToast)

/*
* ## guide for plugin ##
*
* message: your message,
* type: success, info, warning, error, default,
* position: top, bottom, top-right, bottom-right,top-left, bottom-left,
* duration: milliseconds,
* dismissible: default true -> Allow user dismiss by clicking,
* queue: default false,
* pauseOnHover: default true -> Pause the timer when mouse on over a toast
* */
