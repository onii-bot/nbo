import Aos from "aos"
import "aos/dist/aos.css"
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/global.css"

const app = createApp(App)
app.AOS = Aos.init()

app.mount("#app")
