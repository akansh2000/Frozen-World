import machine from './images/machinery.jpg'
const Machine=()=>{

    return(
        <div>
            <img src={machine} width='1520px' height='200px' /> 
            <p className='tool' >Our Tools</p>
        <div className="machine">
            <div className='warehouse'>
            <img className='mac_grid1' src='https://www.nsspl.in/wp-content/uploads/2020/02/Controlled-Atmosphere-cold-Storage-project-Machine-Room-area.jpg' width='400px' height='400px' />
            <div>
            <h1 className='tech'>Warehousing Technology</h1> 
            <p className='summary'> &#x2022;Wicket Doors.<br/>
               &nbsp;&nbsp;&nbsp;&#x2022;Roof Top Solar Panels.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Rain Water Harvesting.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Automated Cold Room Doors.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2022;Battery operated Reach Trucks.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Double Deep Palletized Racking.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Real Time Monitoring of Refrigeration System.<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Door Operations Monitoring Counter Sensors.<br/></p>
                </div> 
            </div>
            <div className='blast'>
            <img className='mac_grid2' src='https://5.imimg.com/data5/BH/SE/EO/SELLER-2468937/plastic-pyrolysis-machine-500x500.jpg' width='400px' height='400px' />
             <div>
                 <h1 className='freezer'>Blast Freezer</h1>
                 <p className='summary2'> &#x2022;Energy Efficient &amp; high class technology.<br/>
                 &nbsp;&nbsp;&nbsp;&#x2022;Automated Holding mode for desired temperature.<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Programmable settings for optimal product quality.<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Blast Freezing technology to pull down the temperature<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of a product at desired temperature within short span of time.<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;To minimize the energy & temperature losses, use of High speed Roll.
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;Made of high tear tensile strength Imported PVC material.
                 </p>
             </div>
            </div>
        </div>
        </div>
    )
}

export default Machine;