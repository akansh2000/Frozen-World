import { Component } from "react";
import Contact from './Contact';

class Clients extends Component{
    constructor(){
        super();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.automatic = this.automatic.bind(this);

        this.state = {
            index: 0,
            arr: ['https://upload.wikimedia.org/wikipedia/commons/4/41/Amul_official_logo.svg',
                'https://www.nicepng.com/png/detail/284-2843617_britannia-india-logo-design-png-transparent-images-britannia.png',
                'http://assets.stickpng.com/thumbs/5a5a739c14d8c4188e0b08b6.png',
                'https://www.clipartkey.com/mpngs/m/149-1495186_transparent-dabur-logo.png',
                'https://pngimg.com/uploads/snickers/snickers_PNG13920.png',
                'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/attachment_46139698-e1502844606588.png?auto=format&q=60&fit=max&w=930',
                'https://content.jdmagicbox.com/comp/dholpur/t1/9999p5642.5642.190315075010.g4t1/catalogue/cream-bell-ice-cream-rajasthan-dholpur-ice-cream-parlours-8kistobl13.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kwality_Walls_logo.svg/1280px-Kwality_Walls_logo.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/e/e4/Vadilal_Group_Logo.png'
            ],
            image: ''

        }

    }

    componentDidMount() {
        this.setState({
            image: this.state.image = this.state.arr[0]
        })

        setTimeout(this.automatic,1500)
    }

    automatic(){
        if (this.state.index + 1 === 7) {
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


render(){
    return(
        <div>
        <div className='our_client'>
            <h1 className='client_so'>Our Clients so far</h1>
            <div className='client_flex'>
                <img className='box' src={this.state.arr[this.state.index]} width='150px' height='150px' />
                <img className='box' src={this.state.arr[this.state.index+1]} width='150px' height='150px' />
                <img className='box' src={this.state.arr[this.state.index+2]} width='150px' height='150px' />
            </div>
        </div>
           <Contact />
        </div>
    )
}

}

export default Clients;