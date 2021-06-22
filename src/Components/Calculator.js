import { Component } from "react";


export default class Calculator extends Component{
    constructor(props){
            super()
            this.state = {
                operator: "+",
                num1: 0,
                num2: 0,
                result: ''
            }
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }



    calculate = (num1, num2) => {
        // could use an if else, using switch instead

        let int1 = Number(num1) 
        let int2 = Number(num2) 
        let result = 0

        switch(this.state.operator){
            case '+': 
                result = int1 + int2
                break

            case'-':
                result = int1-int2
                break

            case'*':
                result = int1*int2
                break

            case'/':
                result = int1/int2
                break

            default:
                break
        }
        this.setState({
            result:result
        })
        
    }

    setOp = (e) => {
        this.setState({
            operator: e.target.value

        })
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

                <span>{this.state.operator}</span>

                <input
                 type="number"
                 name="num2"
                 value={this.state.num2}
                 placeholder="0"
                 onChange={(e) => this.setNum(e, 'num2')}
                />


                <button onClick={() => this.calculate(this.state.num1, this.state.num2)}>=</button>
                <h3>{this.state.result}</h3>

                <button name='plus' value='+' onClick={(e) => this.setOp(e)}>+</button>
                <button name='sub' value='-' onClick={(e) => this.setOp(e)}>-</button>
                <button name='mult' value='*' onClick={(e) => this.setOp(e)}>*</button>
                <button name='div' value='/' onClick={(e) => this.setOp(e)}>/</button>
               
            
            
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