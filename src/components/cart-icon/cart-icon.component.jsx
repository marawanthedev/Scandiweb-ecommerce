import dependecies from  "./helpers/dependecies";


class CartIcon extends dependecies.React.Component{

    constructor(props){

        super(props);
        this.state = {}
    }
    
    render() {
        

        const { ToggleCartDropDown, itemCount } = this.props;
     const { ShoppingIcon,React } = dependecies;

         return (    
            <div className={`cart-icon`} onClick={()=> ToggleCartDropDown()}>
                <ShoppingIcon className="shopping-icon"></ShoppingIcon>
                 {
                     itemCount!=0?<div className="item-count-circle">
                    <span className="item-count ">{itemCount}</span>
                </div>:null
                }
            </div>
        )
    }   
    
}


export default CartIcon



    