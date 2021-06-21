import React from "react";
import "./IconButton.scss";


class IconButton extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        const { callBack,callBackParam,Icon,isMini,width,height } = this.props;
        return <button className="icon__button" style={{width,height}} onClick={() => callBack(callBackParam)}>
                            <div  className="cart-item__content__btn__icon" style={{backgroundImage:`url(${Icon})`,backgroundPosition:"center",backgroundSize:"cover",width:"100%",height:"100%"}}></div>
                    </button>

    }
}
export default IconButton;