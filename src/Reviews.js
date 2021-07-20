import { Component } from "react";
import Clients from "./Clients";

class Reviews extends Component {
    constructor() {
        super();

        this.onClickForward = this.onClickForward.bind(this);
        this.onClickBack = this.onClickBack.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.automatic = this.automatic.bind(this);

        this.state = {
            index: 1,
            arr: ['Frozen World is the right place to store the foods. They have good infrastructure to take care of every bag and good service motto. This type of facilities will add value and improve the Indian agro industry visibility. Thank you for letting me visit the Frozen World.',
                'Thank you for the excellent service from your company regarding the Cold Storage. The unit was in excellent condition both clean and fit for purpose. Delivery and collection was on time as agreed. The unit was ideal for this type of event and we hope to use it again. Thank you for letting me visit the Frozen World.',
                'Very nice rack storage system and articulated forklift for narrow aisles. Safety observation was a very well kept and clean warehouse. A Real World Class facility for storage of seeds Online Monitoring of Temperature and Humidity is quite useful. Thank you for letting me visit the Frozen World.'
            ],
            text: ''

        }
        setTimeout(this.automatic,1300)

    }

    componentDidMount() {
        this.setState({
            text: this.state.text = this.state.arr[0]
        })
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.arr.length) {
            this.setState({
                index: 0,
                text: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                text: this.state.arr[this.state.index]
            })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.arr.length - 1,
                text: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index - 1,
                text: this.state.arr[this.state.index]
            })
        }
    }

    automatic(){
        if (this.state.index + 1 === this.state.arr.length) {
            this.setState({
                index: 0,
                text: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                text: this.state.arr[this.state.index]
            })
        }
        setTimeout(this.automatic,1300)
    }


    render() {
        return (
            <div>
            <div className='review'>
                <h1 className='client'>&#x2501; Client's Good Words &#x2501;</h1>
                <p className='rev'>"{this.state.text}"</p>
                <button className='prev1' onClick={this.onClickBack} >&#8249;</button>
                <button className='next1' onClick={this.onClickForward} >&#8250;</button>
            </div>
            <Clients />
            
            </div>
        )
    }


}


export default Reviews;