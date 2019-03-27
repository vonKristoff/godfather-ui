import template from '../../templates/side-dashboard.html'
import EmployeeLite from '../employee-lite/vm'

export default {
    name: "side-dashboard",
    template,
    components: { EmployeeLite },
    props: ["collection", "view"],
    data() {
        return {}
    },
    methods: {
    	handleClick(key) {
    		this.$emit("set-view", key)
    	}
    }
}
