import template from '../../templates/slider.html'
import classes from './computed-classes'
export default {
    name: "slider",
    template,
    props: ["value", "name", "min", "max"],
    data() {
        return {
        	model: this.value
        }
    },
    computed: {
    	nameAsLabel() {
    		return capitalise(this.name.toString())
    	}
    },
    methods: {
    	update() {
    		this.$emit("update-value", this.model)
    	}
    }
}
function capitalise(word) {
	const CapitalLetter = word.charAt(0).toUpperCase()
	const rest = word.toString().slice(1)
	return `${CapitalLetter}${rest}`
}