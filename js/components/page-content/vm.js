import template from '../../templates/page-content.html'
import classes from './computed-classes'
import Slider from '../slider/vm'
import config from '../../data/config'
const IMG_URL = config.paths.employees
export default {
    name: "page-content",
    template,
    components: { Slider },
    props: ["model"],
    data() {
        return {
            modelUpdated: false 
        }
    },
    mounted() {
        this.modelUpdated = this.model.key
    },
    computed: {
        inlineBackgroundImage() {
            return {
                backgroundImage: `url("${IMG_URL}/${this.model.image}")`
            }
        }
    },
    methods: {
    	updatePopularity(value) {
    		this.$emit("update-popularity", { key: this.model.key, value })
    	}
    },
    watch: {
        'model.key': function(prev, next) {
            if(prev !== next) {
                this.modelUpdated = false
                this.$nextTick(() => {
                    this.modelUpdated = true
                })
            }
        }
    }
}
