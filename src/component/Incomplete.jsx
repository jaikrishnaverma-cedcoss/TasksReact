import React, { Component } from 'react';
class Incomplete extends Component {
    state = {}
    render() {

        return (
            <>
                {
                    this.props.arr.map((data, i) => <li className='row flexAIC flexSB'> <div className="row flexAIC"><input index={i} type="checkbox" name="incompleted" onClick={this.props.actioner} unchecked /><label>{data}</label><input type="text" id="name" className="name" value={data} /></div><div className="col flexAIC"><button className="edit" index={i} name="incompleted" onClick={this.props.edit}>Edit</button><button onClick={this.props.delete} index={i} name="incompleted" className="delete">Delete</button></div> </li>)
                }
            </>
        );
    }
}

export default Incomplete;