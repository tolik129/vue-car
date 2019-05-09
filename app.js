const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+75455493', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Vlad', 2014, '+52365236', 'images/mondeu.jpg'),
    car('Yaguar', 'Panamera', 'Ilya', 2015, '+4585459', 'images/panamera.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs:[],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods:{
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder(){
          this.modalVisibility = false
            this.logs.push(
                log('Success order: ${this.car.name} - ${this.car.model}', 'ok')
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log('Cancelled order: ${this.car.name} - ${this.car.model}', 'cnl')
            )
        }
    },
    computed:{
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value){
            return value.toLocaleString()
        }
    }
})