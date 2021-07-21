import Nav from "./Nav";

const About=()=>{

    return(
        <div className='main_about' id="aboutSection">
            <Nav />
        <h4 className='about'>About Frozen World</h4>
                <div className='about_p'>
                    <p className='first_p' >Frozen World has engaged attempt in trading for last Five Generations. In 1987 frozen world started<br />First Cold Storage in Uttar Pradesh that was beginning of it and It was expanded in year of 1992.</p>
                    <p>We design innovative storage systems to help owners and operators distribution centers realize their<br />best return on investment. Hammerhead delivers and installs your equipment on schedule and on<br />budget. Then, we assist in protecting your employees, building property through ongoing safety surveys,<br />pallet rack repairs and pallet rack protection. Our pallet rack installation, repair, maintenance team<br />can solve any issues that you might be facing with your warehouse storage and conveyor systems. </p>
                </div>
                <div className='container_2'>
                    <img src='https://www.kalabiotech.com/wp-content/uploads/2019/10/huge-storage-space.jpg' width='1519px' height='930px' />
                    <div className='activity' >
                        <h1 className='sub_act'>Our Facilities</h1>
                        <p className='activity_p'>New technologies have made it possible to get fresh, perishable foods from one side of the world to the other without putting the integrity of the foods at risk. Similarly, state-of-the-art temperature controlled containers and trailers make it possible to get valuable, perishable biopharmaceuticals to areas of need. But as much as we talk about refrigerated transportation, we often forget to talk about one of the aspects of cold chain logistics that makes it possible: cold storage and refrigerated warehousing. After reading this post, you will know about how cold storage is used, the different types of cold storage, and how refrigerated warehousing makes the entire cold chain possible.</p>
                    </div>

                    <div className="grid-container">
                        <div className='grid-item 1'>
                            <img className='item' src='https://qtxasset.com/styles/breakpoint_xl_880px_w/s3/sensorsmag/1553710841/SENSOR_2.jpg?8VBkPidfMmLo8IjpDy_XqJSP8m1OmKjX&itok=L4L76-KP' width='212px' height='190px' />
                            <h2>Food Cold Storage</h2>
                        </div>

                        <div class="grid-item 2">
                            <img className='item' src='https://www.hpcismart.com/images/website/ManChemNews/DIR_20/F_45767.jpg' width='212px' height='190px' />
                            <h2 >Cryogenic Storage<br />Services</h2>
                        </div>


                        <div class="grid-item 3">
                            <img className='item' src='https://5.imimg.com/data5/RT/JJ/MY-1116849/cold-storage-services-500x500.jpg' width='212px' height='190px' />
                            <h2 >Mild Steel Cold<br />Storage</h2>
                        </div>

                        <div class="grid-item 4">
                            <img className='item' src='https://4.imimg.com/data4/OU/FH/ANDROID-17113495/product-250x250.jpeg' width='212px' height='190px' />
                            <h2 >Cold Storage<br />Servicing</h2>
                        </div>

                        <div class="grid-item 5">
                            <img className='item' src='https://www.astroteck.in/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-18-at-09.10.42-1-min-1030x773.jpeg' width='212px' height='190px' />
                            <h2 >Dairy Cold Storage</h2>
                        </div>

                        <div class="grid-item 6">
                            <img className='item' src='http://www.patkol.com/wp-content/uploads/2019/06/Ice-Storage02.jpg' width='212px' height='190px' />
                            <h2>Ice Cold Storage</h2>
                        </div>

                    </div>
                </div>
                </div>
    )
}

export default About;
