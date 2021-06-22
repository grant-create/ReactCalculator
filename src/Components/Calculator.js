import { Component } from "react";


export default class Calculator extends Component{
    constructor(props){
            super()
            this.state = {
                num1: 0,
                num2: 0,
                result: 0
            }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }



 render(){
     return(
        <div className="container">
            <h1>Add with React!</h1>
            <div className="add">

                <input
                 type="number"
                 name="num1"
                 value={this.state.num1}
                 placeholder="0"
                 onChange={(e) => this.setNum(e, 'num1')}
                />

                <span>+</span>

                <input
                 type="number"
                 name="num2"
                 value={this.state.num2}
                 placeholder="0"
                 onChange={(e) => this.setNum(e, 'num2')}
                />


                <button>=</button>
                <h3>Addition results go here!</h3>
            
            
            </div>

        </div>
    )
 }   
}

//     constructor(props){
//         super()
//         this.state = {
//             num1: 0,
//             num2: 0
//         }
//     }
    
//     setNum = (e, num) => {
//         this.setState({ [num]: e.target.value});
//         console.log()
//       }
    

//     addition = (num1, num2) => {
//         console.log(num1, num2)
//        return this.num1 + this.num2
//     }

    
    
//     render() {
//         return(
//             <div className="container">
//                 <h1>Add with React!</h1>

//                 <div className="add">
//                    <input type="number"
//                     name="num1"
//                     placeholder="Enter your first number"
//                     value={this.state.num1}
//                     onChange={ (e) => this.setNum(e, 'num1') }
//                     />
//                     <span>+</span>
//                    <input type="number"
//                     name="num2"
//                     placeholder="Enter your Second number"
//                     value={this.state.num2}
//                     onChange={ (e) => this.setNum(e, 'num2') }
//                     />



//                     <button onClick={(e) => this.addition(this.num1, this.num2)}>=</button>
                   
                   
                   
//                     <h3>Addition results go here!</h3>
//                     <h3>{this.addition}</h3>
//                 </div>
//             </div>
//         )
//     }
// }