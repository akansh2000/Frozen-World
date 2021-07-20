import { Component } from "react";

class  Warehouse extends Component{
    constructor(){
        super();

        this.state={
            index:0,
            arr:['https://static8.depositphotos.com/1003580/1042/i/950/depositphotos_10421356-stock-photo-white-boxes-warehouse.jpg',
                'https://www.loading-systems.com/sites/default/files/2018-10/8874.jpg',
                'https://www.williams-shipping.co.uk/wp-content/uploads/2020/12/Image-3-small.jpg',
                'https://www.loading-systems.com/sites/default/files/2018-12/So-10.jpg',
                'https://m.economictimes.com/thumb/msid-80409452,width-1200,height-900,resizemode-4,imgsize-74008/cold-storage.jpg',
                'https://stellarfoodforthought.net/wp-content/uploads/2018/08/IMG_2007.jpg'],
            image:''       
        }
        
        this.componentDidMount=this.componentDidMount.bind(this);
        this.automatic=this.automatic.bind(this);
    }

    componentDidMount(){

        setTimeout(this.automatic,2000);
}

automatic()
{
    if (this.state.index + 1 === 3) {
        this.setState({
            index: 0
        })
    } else {
        this.setState({
            index: this.state.index + 1
        })
    }
    setTimeout(this.automatic,2000)
}

render(){
    return(

        <div>
            <div>
            <img className='ware_img' src='http://i2.wp.com/coldstarlogistics.com/blog/wp-content/uploads/2015/01/IMG_5848.jpg?zoom=1.25&fit=5472%2C3648' width='1520px' height='200px' />
            <p className='ware_txt' >Our Warehouse</p>
            </div>
        <div className='ware_cont'>
            <img className='img_grid apple' src={this.state.arr[this.state.index]} width='700px' height='450px' />
            <img className='img_grid b' src={this.state.arr[this.state.index+1]} width='700px' height='450px' />
            <img className='img_grid c' src={this.state.arr[this.state.index+2]} width='700px' height='450px' />
            <img className='img_grid d' src={this.state.arr[this.state.index+3]} width='700px' height='450px' />
        </div>
        </div>
    )
}
}

export default Warehouse;