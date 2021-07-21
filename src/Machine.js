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
            <ul  className='summary'> <li>Wicket Doors.</li>
               <li>Roof Top Solar Panels.</li>
               <li>Rain Water Harvesting.</li>
               <li>Automated Cold Room Doors.</li>
               <li>Battery operated Reach Trucks.</li>
               <li>Double Deep Palletized Racking.</li>
               <li>Real Time Monitoring of Refrigeration System.</li>
               <li>Door Operations Monitoring Counter Sensors.</li></ul>
                </div> 
            </div>
            <div className='blast'>
            
             <div>
                 <h1 className='freezer'>Blast Freezer</h1>
                 <ul className='summary2'> <li>Energy Efficient &amp; high class technology.</li>
                 <li>Automated Holding mode for desired temperature.</li>
                 <li>Programmable settings for optimal product quality.</li>
                 <li>Blast Freezing technology to pull down the temperature of a product at desired temperature within short span of time.</li>
                 <li>To minimize the energy & temperature losses, use of High speed Roll.</li>
                 <li>Made of high tear tensile strength Imported PVC material.</li>
                 </ul>
             </div>
             <img className='mac_grid2' src='https://5.imimg.com/data5/BH/SE/EO/SELLER-2468937/plastic-pyrolysis-machine-500x500.jpg' width='400px' height='400px' />
            </div>
        </div>
        </div>
    )
}

export default Machine;