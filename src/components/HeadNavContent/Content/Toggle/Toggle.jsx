import React from "react";
import classes from "./Toggle.module.css"

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn:
        true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn:
            !prevState.isToggleOn
        })  );
    }



    render() {
        return (
            <div className={classes.toggleOn}>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Включено' :'Выключено' } </button>
            </div>

        );
    }
}

export default Toggle;