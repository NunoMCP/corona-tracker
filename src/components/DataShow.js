import React from "react"

class dataShow extends React.Component{

    render(props){
        return(
            <div className="column">
                <h2 className="ui center aligned icon header">
                    <i className={`icon ${this.props.icon}`}></i>
                    {this.props.text}{this.props.value}<br/>
                </h2>
            </div>
        )
    }
}

export default dataShow