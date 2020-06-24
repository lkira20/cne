import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faWalking, faUsers, faFileAlt,  faListAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faHome, faWalking, faUsers, faFileAlt,  faListAlt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)