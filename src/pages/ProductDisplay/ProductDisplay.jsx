import React from "react"
import "./ProductDisplay.scss"
class ProductDisplayPage extends React.Component{


    constructor (props) {
        super(props);
        this.state={}
    }
    render() {
        
        return <div className="productDisplayPage">
            <div className="productDisplayPage__left-side">
                <div className="productDisplayPage__left-side__images-gallery"></div>
                <div className="productDisplayPage__left-side__selected-image-container"></div>

            </div>
            <div className="productDisplayPage__right-side"></div>

        </div>
    }
}

export default ProductDisplayPage;