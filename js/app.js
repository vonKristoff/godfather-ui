import EmployeeData from './data/employees'
import SideDashboard from './components/side-dashboard/vm'
import PageContent from './components/page-content/vm'

export default {
	el: "#root",
	components: { SideDashboard, PageContent },
	data: {
		employees: [],
		view: null
	},
	created() {
		this.employees = EmployeeData.map(addKeys)
	},
	computed: {
		dashboardCollection() {
			return this.employees.map(basicEmployeeData)
		},
		getCurrentTarget() {
			return this.view ? this.employees.filter(child => child.key === this.view).pop() : null
		},
		showPageContent() {
			return this.view !== null
		}
	},
	methods: {
		setPageView(key) {
			this.view = key
		},
		updatePopularity({ key, value }) {
			this.employees.map(employee => {
				if(employee.key === key) employee.popularity = value
				return employee
			})
		}
	}
}
const addKeys = child => {
	const key = child.name.toLowerCase().split(" ").join("-")
	return { ...child, key }
}
const basicEmployeeData = child => { 
	return { key: child.key, label: child.name, popularity: child.popularity } 
}
