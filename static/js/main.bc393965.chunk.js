(this["webpackJsonplets-cook"]=this["webpackJsonplets-cook"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),c=s(20),n=s.n(c),r=(s(27),s(28),s(29),s(21)),o=s(9),l=s(10),d=s(4),h=s(12),j=s(11),m=s(0),p=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e.automatic=e.automatic.bind(Object(d.a)(e)),e.state={index:0,arr:["https://upload.wikimedia.org/wikipedia/commons/4/41/Amul_official_logo.svg","https://www.nicepng.com/png/detail/284-2843617_britannia-india-logo-design-png-transparent-images-britannia.png","https://www.pinclipart.com/picdir/middle/536-5361134_transparent-background-nestle-logo-png-nestl-philippines-clipart.png","https://www.clipartkey.com/mpngs/m/149-1495186_transparent-dabur-logo.png","https://pngimg.com/uploads/snickers/snickers_PNG13920.png","https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/08/attachment_46139698-e1502844606588.png?auto=format&q=60&fit=max&w=930","https://content.jdmagicbox.com/comp/dholpur/t1/9999p5642.5642.190315075010.g4t1/catalogue/cream-bell-ice-cream-rajasthan-dholpur-ice-cream-parlours-8kistobl13.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kwality_Walls_logo.svg/1280px-Kwality_Walls_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/e/e4/Vadilal_Group_Logo.png"]},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({image:this.state.image=this.state.arr[0]}),setTimeout(this.automatic,1500)}},{key:"automatic",value:function(){this.state.index+1===7?this.setState({index:0}):this.setState({index:this.state.index+1}),setTimeout(this.automatic,1500)}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"our_client",children:[Object(m.jsx)("h1",{className:"client_so",children:"Our Clients so far"}),Object(m.jsxs)("div",{className:"client_flex",children:[Object(m.jsx)("img",{className:"box",src:this.state.arr[this.state.index],width:"150px",height:"150px",alt:"Loading..."}),Object(m.jsx)("img",{className:"box",src:this.state.arr[this.state.index+1],width:"150px",height:"150px",alt:"Loading..."}),Object(m.jsx)("img",{className:"box",src:this.state.arr[this.state.index+2],width:"150px",height:"150px",alt:"Loading..."})]})]})})}}]),s}(i.Component),b=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).onClickForward=e.onClickForward.bind(Object(d.a)(e)),e.onClickBack=e.onClickBack.bind(Object(d.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e.automatic=e.automatic.bind(Object(d.a)(e)),e.state={index:1,arr:["Frozen World is the right place to store the foods. They have good infrastructure to take care of every bag and good service motto. This type of facilities will add value and improve the Indian agro industry visibility. Thank you for letting me visit the Frozen World.","Thank you for the excellent service from your company regarding the Cold Storage. The unit was in excellent condition both clean and fit for purpose. Delivery and collection was on time as agreed. The unit was ideal for this type of event and we hope to use it again. Thank you for letting me visit the Frozen World.","Very nice rack storage system and articulated forklift for narrow aisles. Safety observation was a very well kept and clean warehouse. A Real World Class facility for storage of seeds Online Monitoring of Temperature and Humidity is quite useful. Thank you for letting me visit the Frozen World."],text:""},setTimeout(e.automatic,1300),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({text:this.state.text=this.state.arr[0]})}},{key:"onClickForward",value:function(){this.state.index+1===this.state.arr.length?this.setState({index:0,text:this.state.arr[this.state.index]}):this.setState({index:this.state.index+1,text:this.state.arr[this.state.index]})}},{key:"onClickBack",value:function(){this.state.index-1===-1?this.setState({index:this.state.arr.length-1,text:this.state.arr[this.state.index]}):this.setState({index:this.state.index-1,text:this.state.arr[this.state.index]})}},{key:"automatic",value:function(){this.state.index+1===this.state.arr.length?this.setState({index:0,text:this.state.arr[this.state.index]}):this.setState({index:this.state.index+1,text:this.state.arr[this.state.index]}),setTimeout(this.automatic,1300)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"review",children:[Object(m.jsx)("h1",{className:"client",children:"\u2501 Client's Good Words \u2501"}),Object(m.jsxs)("p",{className:"rev",children:['"',this.state.text,'"']}),Object(m.jsx)("button",{className:"prev1",onClick:this.onClickBack,children:"\u2039"}),Object(m.jsx)("button",{className:"next1",onClick:this.onClickForward,children:"\u203a"})]}),Object(m.jsx)(p,{})]})}}]),s}(i.Component),x=s.p+"static/media/logo.d8ce161c.gif",g=s(8),u=function(){return Object(m.jsxs)("nav",{className:"App",children:[Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsx)(g.b,{to:"/Frozen-World",children:Object(m.jsx)("img",{src:x,className:"logo",width:"110px",height:"100px"})}),Object(m.jsx)("h3",{className:"lets",children:"Frozen World"}),Object(m.jsx)("h5",{className:"sub-head",children:"Cold Storage"})]}),Object(m.jsxs)("div",{className:"flex_container",children:[Object(m.jsx)(g.b,{to:"/Frozen-World",children:Object(m.jsx)("button",{className:"nav_i home button1",children:"Home"})}),Object(m.jsx)(g.b,{to:"/contact",children:Object(m.jsx)("button",{className:"nav_i contact button1",children:"Contact us"})}),Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsx)("button",{className:"nav_i gallery button1",children:"Gallery\u25be "}),Object(m.jsxs)("div",{class:"dropdown-content",children:[Object(m.jsx)(g.b,{to:"/machine",children:Object(m.jsx)("a",{href:"#",children:"Machinery"})}),Object(m.jsx)(g.b,{to:"/warehouse",children:Object(m.jsx)("a",{href:"#",children:"Warehouse"})})]})]}),Object(m.jsx)(g.b,{to:"/about",children:Object(m.jsx)("button",{className:"nav_i who button1",children:"Who we are"})}),Object(m.jsx)(g.b,{to:"/login",children:Object(m.jsx)("button",{className:"nav_i log button1",children:"Log in"})})]})]})},O=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s),(e=t.call(this)).onClickForward=e.onClickForward.bind(Object(d.a)(e)),e.onClickBack=e.onClickBack.bind(Object(d.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e.automatic=e.automatic.bind(Object(d.a)(e));return e.state={index:0,image:"",Text:"Reap the benefits\nof our frozen foods.",arr:["https://www.cantekgroup.com/Content/images/300620201158-endraf5.jpg","http://www.fastwmssoftware.com/images/cold-storage-wms1.jpg","https://www.cantekgroup.com/Content/images/300620201157-endraf2.jpg"]},setTimeout(e.automatic,2e3),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.setState({image:this.state.image=this.state.arr[2]})}},{key:"onClickForward",value:function(){this.state.index+1===this.state.arr.length?this.setState({index:0,image:this.state.arr[this.state.index]}):this.setState({index:this.state.index+1,image:this.state.arr[this.state.index]})}},{key:"onClickBack",value:function(){this.state.index-1===-1?this.setState({index:this.state.arr.length-1,image:this.state.arr[this.state.index]}):this.setState({index:this.state.index-1,image:this.state.arr[this.state.index]})}},{key:"automatic",value:function(){this.state.index+1===this.state.arr.length?this.setState({index:0,image:this.state.arr[this.state.index]}):this.setState({index:this.state.index+1,image:this.state.arr[this.state.index]}),setTimeout(this.automatic,1500)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",Object(r.a)({className:"mySlides",src:this.state.image,width:"100%",height:"500px"},"className","slide")),Object(m.jsx)("div",{className:"head",children:Object(m.jsx)("div",{children:this.state.Text})}),Object(m.jsx)("button",{className:"prev",onClick:this.onClickBack,children:"\u2039"}),Object(m.jsx)("button",{className:"next",onClick:this.onClickForward,children:"\u203a"})]}),Object(m.jsxs)("div",{className:"main_about",id:"aboutSection",children:[Object(m.jsx)("h4",{className:"about",children:"About Frozen World"}),Object(m.jsxs)("div",{className:"about_p",children:[Object(m.jsxs)("p",{className:"first_p",children:["Frozen World has engaged attempt in trading for last Five Generations. In 1987 frozen world started",Object(m.jsx)("br",{}),"First Cold Storage in Uttar Pradesh that was beginning of it and It was expanded in year of 1992."]}),Object(m.jsxs)("p",{children:["We design innovative storage systems to help owners and operators distribution centers realize their",Object(m.jsx)("br",{}),"best return on investment. Hammerhead delivers and installs your equipment on schedule and on",Object(m.jsx)("br",{}),"budget. Then, we assist in protecting your employees, building property through ongoing safety surveys,",Object(m.jsx)("br",{}),"pallet rack repairs and pallet rack protection. Our pallet rack installation, repair, maintenance team",Object(m.jsx)("br",{}),"can solve any issues that you might be facing with your warehouse storage and conveyor systems. "]})]}),Object(m.jsxs)("div",{className:"container_2",children:[Object(m.jsx)("img",{src:"https://www.kalabiotech.com/wp-content/uploads/2019/10/huge-storage-space.jpg",width:"1519px",height:"930px"}),Object(m.jsxs)("div",{className:"activity",children:[Object(m.jsx)("h1",{className:"sub_act",children:"Our Facilities"}),Object(m.jsx)("p",{className:"activity_p",children:"New technologies have made it possible to get fresh, perishable foods from one side of the world to the other without putting the integrity of the foods at risk. Similarly, state-of-the-art temperature controlled containers and trailers make it possible to get valuable, perishable biopharmaceuticals to areas of need. But as much as we talk about refrigerated transportation, we often forget to talk about one of the aspects of cold chain logistics that makes it possible: cold storage and refrigerated warehousing. After reading this post, you will know about how cold storage is used, the different types of cold storage, and how refrigerated warehousing makes the entire cold chain possible."})]}),Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsxs)("div",{className:"grid-item 1",children:[Object(m.jsx)("img",{className:"item",src:"https://qtxasset.com/styles/breakpoint_xl_880px_w/s3/sensorsmag/1553710841/SENSOR_2.jpg?8VBkPidfMmLo8IjpDy_XqJSP8m1OmKjX&itok=L4L76-KP",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Food Cold Storage"})]}),Object(m.jsxs)("div",{class:"grid-item 2",children:[Object(m.jsx)("img",{className:"item",src:"https://www.hpcismart.com/images/website/ManChemNews/DIR_20/F_45767.jpg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Cryogenic Storage",Object(m.jsx)("br",{}),"Services"]})]}),Object(m.jsxs)("div",{class:"grid-item 3",children:[Object(m.jsx)("img",{className:"item",src:"https://5.imimg.com/data5/RT/JJ/MY-1116849/cold-storage-services-500x500.jpg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Mild Steel Cold",Object(m.jsx)("br",{}),"Storage"]})]}),Object(m.jsxs)("div",{class:"grid-item 4",children:[Object(m.jsx)("img",{className:"item",src:"https://4.imimg.com/data4/OU/FH/ANDROID-17113495/product-250x250.jpeg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Cold Storage",Object(m.jsx)("br",{}),"Servicing"]})]}),Object(m.jsxs)("div",{class:"grid-item 5",children:[Object(m.jsx)("img",{className:"item",src:"https://www.astroteck.in/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-18-at-09.10.42-1-min-1030x773.jpeg",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Dairy Cold Storage"})]}),Object(m.jsxs)("div",{class:"grid-item 6",children:[Object(m.jsx)("img",{className:"item",src:"http://www.patkol.com/wp-content/uploads/2019/06/Ice-Storage02.jpg",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Ice Cold Storage"})]})]})]})]}),Object(m.jsx)(b,{}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsxs)("p",{children:["Cold Storage Resources \u2502 Servicing \u2502 Privacy Policy",Object(m.jsx)("br",{}),"Copyright \xa9 2020 Frozen World Cold Storage Ltd, All Rights Reserved"]})})]})}}]),s}(i.Component),w=s(2),f=s.p+"static/media/mail.eb1eed46.png",v=s.p+"static/media/linked.3a130dea.png",y=s.p+"static/media/phone.74abf791.png",N=s.p+"static/media/map.c475cf1a.png",k=function(){return Object(m.jsxs)("div",{id:"contactSection",children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"grid_contact",children:[Object(m.jsx)("div",{className:"grid_item",children:Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)("h3",{className:"query",children:"Any queries? Let us serve you"}),Object(m.jsx)("label",{htmlFor:"fname",children:"*First Name:"}),Object(m.jsx)("input",{type:"text",id:"fname",className:"con_form",name:"firstname",placeholder:"Your first name..",required:!0}),Object(m.jsx)("label",{htmlFor:"lname",children:"*Last Name:"}),Object(m.jsx)("input",{type:"text",id:"lname",name:"lastname",className:"con_form",placeholder:"Your last name..",required:!0}),Object(m.jsx)("label",{htmlFor:"Email",children:"*Email-Id: "}),Object(m.jsx)("input",{type:"text",name:"Email",className:"con_form",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",placeholder:"Email Id",title:"Not in proper format",required:!0}),Object(m.jsx)("label",{htmlFor:"contact",children:"*Contact Number:"}),Object(m.jsx)("input",{type:"text",id:"contact",className:"con_form",name:"contact",placeholder:"Your mobile number..",pattern:"[1-9]{1}[0-9]{9}",required:!0}),Object(m.jsx)("input",{type:"submit",value:"Submit",className:"query_sub"})]})}),Object(m.jsxs)("div",{className:"grid_item contact2",children:[Object(m.jsx)("h2",{className:"info",children:"Contact us at:"}),Object(m.jsxs)("div",{className:"insta",children:[Object(m.jsx)("img",{src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",width:"50px",height:"50px"}),Object(m.jsx)("p",{className:"tag",children:"https://instagram.com/akansh2000"})]}),Object(m.jsxs)("div",{className:"linked",children:[Object(m.jsx)("img",{src:v,width:"50px",height:"50px"}),Object(m.jsx)("p",{className:"tag",children:"https://linkedin.com/Akansh-Mittal"})]}),Object(m.jsxs)("div",{className:"mail",children:[Object(m.jsx)("img",{src:f,width:"50px",height:"40px"}),Object(m.jsx)("p",{className:"tag",children:"akanshmittal9045@gmail.com"})]}),Object(m.jsxs)("div",{className:"phone",children:[Object(m.jsx)("img",{src:y,width:"70px",height:"40px"}),Object(m.jsx)("p",{className:"tag",children:"+91-9119013425"})]})]}),Object(m.jsxs)("div",{className:"grid_item office",children:[Object(m.jsx)("h2",{className:"reach",children:"How to reach us:"}),Object(m.jsx)("a",{href:"https://www.google.com/maps/place/Mohan+Meakin,+Mohan+Nagar,+Ghaziabad,+Uttar+Pradesh+201007/@28.6712482,77.3823982,16z/data=!4m5!3m4!1s0x390cf079dfc4e1ff:0x1dc092e3a9bd5fcf!8m2!3d28.6727994!4d77.3834011",target:"_blank",children:Object(m.jsx)("img",{className:"map",src:N,width:"400px",height:"400px"})})]})]}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsxs)("p",{children:["Cold Storage Resources \u2502 Servicing \u2502 Privacy Policy",Object(m.jsx)("br",{}),"Copyright \xa9 2020 Frozen World Cold Storage Ltd, All Rights Reserved"]})})]})},_=s.p+"static/media/machinery.9fe03220.jpg",S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsx)("img",{src:_,width:"1520px",height:"200px"}),Object(m.jsx)("p",{className:"tool",children:"Our Tools"}),Object(m.jsxs)("div",{className:"machine",children:[Object(m.jsxs)("div",{className:"warehouse",children:[Object(m.jsx)("img",{className:"mac_grid1",src:"https://www.nsspl.in/wp-content/uploads/2020/02/Controlled-Atmosphere-cold-Storage-project-Machine-Room-area.jpg",width:"400px",height:"400px"}),Object(m.jsxs)("div",{className:"flex1",children:[Object(m.jsx)("h1",{className:"tech",children:"Warehousing Technology"}),Object(m.jsxs)("ul",{className:"summary",children:[" ",Object(m.jsx)("li",{children:"Wicket Doors."}),Object(m.jsx)("li",{children:"Roof Top Solar Panels."}),Object(m.jsx)("li",{children:"Rain Water Harvesting."}),Object(m.jsx)("li",{children:"Automated Cold Room Doors."}),Object(m.jsx)("li",{children:"Battery operated Reach Trucks."}),Object(m.jsx)("li",{children:"Double Deep Palletized Racking."}),Object(m.jsx)("li",{children:"Real Time Monitoring of Refrigeration System."}),Object(m.jsx)("li",{children:"Door Operations Monitoring Counter Sensors."})]})]})]}),Object(m.jsxs)("div",{className:"blast",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"freezer",children:"Blast Freezer"}),Object(m.jsxs)("ul",{className:"summary2",children:[" ",Object(m.jsx)("li",{children:"Energy Efficient & high class technology."}),Object(m.jsx)("li",{children:"Automated Holding mode for desired temperature."}),Object(m.jsx)("li",{children:"Programmable settings for optimal product quality."}),Object(m.jsx)("li",{children:"Blast Freezing technology to pull down the temperature of a product at desired temperature within short span of time."}),Object(m.jsx)("li",{children:"To minimize the energy & temperature losses, use of High speed Roll."}),Object(m.jsx)("li",{children:"Made of high tear tensile strength Imported PVC material."})]})]}),Object(m.jsx)("img",{className:"mac_grid2",src:"https://5.imimg.com/data5/BH/SE/EO/SELLER-2468937/plastic-pyrolysis-machine-500x500.jpg",width:"400px",height:"400px"})]})]})]})},C=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={index:0,arr:["https://static8.depositphotos.com/1003580/1042/i/950/depositphotos_10421356-stock-photo-white-boxes-warehouse.jpg","https://www.loading-systems.com/sites/default/files/2018-10/8874.jpg","https://www.williams-shipping.co.uk/wp-content/uploads/2020/12/Image-3-small.jpg","https://www.loading-systems.com/sites/default/files/2018-12/So-10.jpg","https://m.economictimes.com/thumb/msid-80409452,width-1200,height-900,resizemode-4,imgsize-74008/cold-storage.jpg","https://stellarfoodforthought.net/wp-content/uploads/2018/08/IMG_2007.jpg"],image:""},e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e.automatic=e.automatic.bind(Object(d.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){setTimeout(this.automatic,2e3)}},{key:"automatic",value:function(){this.state.index+1===3?this.setState({index:0}):this.setState({index:this.state.index+1}),setTimeout(this.automatic,2e3)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"ware_head",children:[Object(m.jsx)("img",{className:"ware_img",src:"http://i2.wp.com/coldstarlogistics.com/blog/wp-content/uploads/2015/01/IMG_5848.jpg?zoom=1.25&fit=5472%2C3648",width:"1520px",height:"200px"}),Object(m.jsx)("p",{className:"ware_txt",children:"Our Warehouse"})]}),Object(m.jsxs)("div",{className:"ware_cont",children:[Object(m.jsx)("img",{className:"img_grid apple",src:this.state.arr[this.state.index],width:"700px",height:"450px"}),Object(m.jsx)("img",{className:"img_grid b",src:this.state.arr[this.state.index+1],width:"700px",height:"450px"}),Object(m.jsx)("img",{className:"img_grid c",src:this.state.arr[this.state.index+2],width:"700px",height:"450px"}),Object(m.jsx)("img",{className:"img_grid d",src:this.state.arr[this.state.index+3],width:"700px",height:"450px"})]})]})}}]),s}(i.Component),F=function(){return Object(m.jsxs)("div",{className:"main_about",id:"aboutSection",children:[Object(m.jsx)(u,{}),Object(m.jsx)("h4",{className:"about",children:"About Frozen World"}),Object(m.jsxs)("div",{className:"about_p",children:[Object(m.jsxs)("p",{className:"first_p",children:["Frozen World has engaged attempt in trading for last Five Generations. In 1987 frozen world started",Object(m.jsx)("br",{}),"First Cold Storage in Uttar Pradesh that was beginning of it and It was expanded in year of 1992."]}),Object(m.jsxs)("p",{children:["We design innovative storage systems to help owners and operators distribution centers realize their",Object(m.jsx)("br",{}),"best return on investment. Hammerhead delivers and installs your equipment on schedule and on",Object(m.jsx)("br",{}),"budget. Then, we assist in protecting your employees, building property through ongoing safety surveys,",Object(m.jsx)("br",{}),"pallet rack repairs and pallet rack protection. Our pallet rack installation, repair, maintenance team",Object(m.jsx)("br",{}),"can solve any issues that you might be facing with your warehouse storage and conveyor systems. "]})]}),Object(m.jsxs)("div",{className:"container_2",children:[Object(m.jsx)("img",{src:"https://www.kalabiotech.com/wp-content/uploads/2019/10/huge-storage-space.jpg",width:"1519px",height:"930px"}),Object(m.jsxs)("div",{className:"activity",children:[Object(m.jsx)("h1",{className:"sub_act",children:"Our Facilities"}),Object(m.jsx)("p",{className:"activity_p",children:"New technologies have made it possible to get fresh, perishable foods from one side of the world to the other without putting the integrity of the foods at risk. Similarly, state-of-the-art temperature controlled containers and trailers make it possible to get valuable, perishable biopharmaceuticals to areas of need. But as much as we talk about refrigerated transportation, we often forget to talk about one of the aspects of cold chain logistics that makes it possible: cold storage and refrigerated warehousing. After reading this post, you will know about how cold storage is used, the different types of cold storage, and how refrigerated warehousing makes the entire cold chain possible."})]}),Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsxs)("div",{className:"grid-item 1",children:[Object(m.jsx)("img",{className:"item",src:"https://qtxasset.com/styles/breakpoint_xl_880px_w/s3/sensorsmag/1553710841/SENSOR_2.jpg?8VBkPidfMmLo8IjpDy_XqJSP8m1OmKjX&itok=L4L76-KP",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Food Cold Storage"})]}),Object(m.jsxs)("div",{class:"grid-item 2",children:[Object(m.jsx)("img",{className:"item",src:"https://www.hpcismart.com/images/website/ManChemNews/DIR_20/F_45767.jpg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Cryogenic Storage",Object(m.jsx)("br",{}),"Services"]})]}),Object(m.jsxs)("div",{class:"grid-item 3",children:[Object(m.jsx)("img",{className:"item",src:"https://5.imimg.com/data5/RT/JJ/MY-1116849/cold-storage-services-500x500.jpg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Mild Steel Cold",Object(m.jsx)("br",{}),"Storage"]})]}),Object(m.jsxs)("div",{class:"grid-item 4",children:[Object(m.jsx)("img",{className:"item",src:"https://4.imimg.com/data4/OU/FH/ANDROID-17113495/product-250x250.jpeg",width:"212px",height:"190px"}),Object(m.jsxs)("h2",{children:["Cold Storage",Object(m.jsx)("br",{}),"Servicing"]})]}),Object(m.jsxs)("div",{class:"grid-item 5",children:[Object(m.jsx)("img",{className:"item",src:"https://www.astroteck.in/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-18-at-09.10.42-1-min-1030x773.jpeg",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Dairy Cold Storage"})]}),Object(m.jsxs)("div",{class:"grid-item 6",children:[Object(m.jsx)("img",{className:"item",src:"http://www.patkol.com/wp-content/uploads/2019/06/Ice-Storage02.jpg",width:"212px",height:"190px"}),Object(m.jsx)("h2",{children:"Ice Cold Storage"})]})]})]})]})},z=function(){return Object(m.jsx)("div",{className:"log_main",children:Object(m.jsxs)("form",{className:"login",children:[Object(m.jsx)("h2",{className:"enter",children:"Log in"}),Object(m.jsx)("h3",{className:"power",children:"Powered by Frozen World Ltd."}),Object(m.jsx)("input",{type:"text",className:"log_field up",placeholder:"Username"}),Object(m.jsx)("input",{type:"password",className:"log_field down",placeholder:"Password"}),Object(m.jsx)("input",{type:"submit",className:"log_submit",value:"Log in"}),Object(m.jsx)("p",{className:"temp",children:"Copyright \xa9 2020 Frozen World Cold Storage Ltd, All Rights Reserved"})]})})};var M=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(g.a,{children:Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/Frozen-World",component:O}),Object(m.jsx)(w.a,{exact:!0,path:"/contact",component:k}),Object(m.jsx)(w.a,{exact:!0,path:"/machine",component:S}),Object(m.jsx)(w.a,{exact:!0,path:"/warehouse",component:C}),Object(m.jsx)(w.a,{exact:!0,path:"/about",component:F}),Object(m.jsx)(w.a,{exact:!0,path:"/login",component:z})]})})})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.bc393965.chunk.js.map