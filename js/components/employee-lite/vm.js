import template from '../../templates/employee-lite.html'
import config from '../../data/config'
const CSS = config.CSS
export default {
    name: "employee-lite",
    template,
    props: ["model", "active"],
    data() {
        return {}
    },
    computed: {
        isActive() {
            return this.active === this.model.key ? "is-active" : ""
        },
        inlineFontSize() {
        	const size = (CSS.MAX_FONT_SIZE / CSS.MAX_RANGE) * this.model.popularity 
        	return {
        		fontSize: `${ size }em`
        	}
        }
    },
    methods: {
    	handleClick() {
    		this.$emit("inspect-item", this.model.key)
    	}
    }
}
