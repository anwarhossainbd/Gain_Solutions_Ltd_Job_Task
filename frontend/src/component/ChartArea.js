
import React, { Component,Fragment } from 'react'
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from "chart.js" ;
import {Pie} from "react-chartjs-2"
import { BarChart, Bar, XAxis, YAxis, Tooltip as tool } from 'recharts';
import "./Cartarea.css"
ChartJs.register(ArcElement, Tooltip, Legend);




export default class componentName extends Component {

   constructor() {
        super();
        this.state={

            data : [
                {
                    name: 'Laravel',
                    Rating: 90,
                    

                },
                {
                    name: 'Php',
                    Rating: 60,
                     

                },
                {
                    name: 'React',
                    Rating: 80,
                    

                },
                {
                    name: 'Redux',
                    Rating: 40,
                     

                },
                {
                    name: 'C#',
                    Rating: 80, 
                },
               
            ]

        }

    }



  render() {
    return (



      <Fragment>
    
     <div className="row">
    
     <div className="colOne">
      <h3>Sources</h3>
        <div>
          <Pie  data={{

          labels: ['Daraz', 'Bikroy', 'Pickaboo'],


          datasets: [
        {
          label: '# of Votes',
          data: [35, 30, 35],
          backgroundColor: [
            '#84AF27',
            '#FFC239',
            '#0095A0',
            
          ],
          borderColor: [
            '#84AF27',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          
          ],
          borderWidth: 1,
        },
      ],



        }} />
     
        </div>
     </div>


      <div className="colTwo">
      <h3>Conditions</h3>

      <div className="curve2">
        <div className="curve2child1">
              <p>1000</p>
              <p>1000</p>
              <p>1000</p>

              <p>1000</p>
              <p>1000</p>
              <p>1000</p>
        </div>

        <div className="curve2child">   
         <BarChart width={600} height={450} data={this.state.data}>
              <XAxis dataKey="name" />  
              <tool />
              <Bar dataKey="Rating" fill="green" />
          </BarChart>
        </div>
      </div>
      
      
      </div>


     
     </div>
   

    
    </Fragment> 
     
      
    )
  }
}













// import React, { Fragment } from 'react'
// import {Chart as ChartJs,ArcElement,Tooltip,Legend} from "chart.js" ;
// import {Pie} from "react-chartjs-2"
// import Chart from "react-apexcharts"
// import "./Cartarea.css"

// ChartJs.register(ArcElement, Tooltip, Legend);


// const ChartArea = () => {
//   return (
   
//     <Fragment>
    
//      <div className="row">
    
//      <div className="colOne">
//       <h3>Sources</h3>
//         <div>
//           <Pie  data={{

//           labels: ['Daraz', 'Bikroy', 'Pickaboo'],


//           datasets: [
//         {
//           label: '# of Votes',
//           data: [35, 30, 35],
//           backgroundColor: [
//             '#84AF27',
//             '#FFC239',
//             '#0095A0',
            
//           ],
//           borderColor: [
//             '#84AF27',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
          
//           ],
//           borderWidth: 1,
//         },
//       ],



//         }} />
     
//         </div>
//      </div>


//       <div className="colTwo">
//       <h3>Conditions</h3>
//         <div>
          
//          <Chart type="bar" width={1200} height={600}
         
//          series={[

//           {
//             name:"Social media sub",
//             data:[6578,6787,3454,4564]
//           }

//          ]}

//          options={{}}
         
//          ></Chart>


     
//         </div>
//      </div>


     
//      </div>
   

    
//     </Fragment> 
    
   
//   )
// }

// export default ChartArea






