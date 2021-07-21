import logo from "./images/logo.gif";
import { Component } from "react";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import About from "./About";


class Home extends Component {
    constructor() {
        super();

        this.onClickForward = this.onClickForward.bind(this);
        this.onClickBack = this.onClickBack.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.automatic = this.automatic.bind(this);

        const text = 'Reap the benefits\nof our frozen foods.'
                                                                    
        this.state = {                                          //   State variables that can be used throughout our program
            index: 0,
            image: '',
            Text: text,
            arr: ['https://www.cantekgroup.com/Content/images/300620201158-endraf5.jpg',
                'http://www.fastwmssoftware.com/images/cold-storage-wms1.jpg',
                'https://www.cantekgroup.com/Content/images/300620201157-endraf2.jpg'
            ]

        }
        setTimeout(this.automatic,2000)

    }

    componentDidMount() {                                    //this function is rendered only once so used for giving image its value
        this.setState({
            image: this.state.image = this.state.arr[2]
        })
    }

    onClickForward() {                                                 //forward button pressed method
        if (this.state.index + 1 === this.state.arr.length) {
            this.setState({
                index: 0,
                image: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                image: this.state.arr[this.state.index]
            })
        }
    }

    onClickBack() {                                                    //backward button pressed method
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.arr.length - 1,
                image: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index - 1,
                image: this.state.arr[this.state.index]
            })
        }
    }

    automatic(){                                                        //recursive method for slideshow
        if (this.state.index + 1 === this.state.arr.length) {
            this.setState({
                index: 0,
                image: this.state.arr[this.state.index]
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                image: this.state.arr[this.state.index]
            })
        }
        setTimeout(this.automatic,1500)

    }


    render() {

        return (                                             //JSX has been written here, all this would be displayed
            <div>
                <nav className="App">
                    <div className='flex'>
                        <a href='#'>
                        <img src={logo} className='logo' width='110px' height='100px' />
                        </a>
                        <h3 className='lets'>Frozen World</h3>
                        <h5 className='sub-head'>Cold Storage</h5>
                    </div>
                    <div className='flex_container'>
                        <a href='#'>
                        <button className='nav_i home'>Home</button>
                        </a>
                        <a href='#contactSection' >
                        <button className='nav_i contact'>Contact us</button>
                        </a>
                        <div className='dropdown'>
                        <button className='nav_i gallery'>Gallery&#x25BE; </button>
                        <div class="dropdown-content">
                        <Link to='/machine'>
                         <a href="#">Machinery</a>
                         </Link>
                         <Link to='/warehouse'>
                         <a href="#">Warehouse</a>
                         </Link>
                       </div>
                       </div>
                       <a href='#aboutSection'>
                        <button className='nav_i who'>Who we are</button>
                        </a>
                        <button className='nav_i log'>Log in</button>
                    </div>
                </nav>
                <div className='container'>
                    <img src={this.state.image} width='1519px' height='500px' className='slide' />
                    <div className='head'>{this.state.Text}</div>
                    <button className='prev' onClick={this.onClickBack} >&#8249;</button>
                    <button className='next' onClick={this.onClickForward} >&#8250;</button>
                </div>
                <About />                                                                      
                <Reviews />
            </div>
        )
    }
}

export default Home;