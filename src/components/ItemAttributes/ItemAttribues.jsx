import React from "react";
import "./itemAttribues.scss"

class ItemAttributes extends React.Component{


    constructor (props) {
        super(props); 
        this.state = {
            selectedAttributeBtnIndex:null
        }
    }
    handleAttributeSelection = (index) => {
        const { onClickCallBack, attributeIndex,item,} = this.props;

        if (index != this.state.selectedAttributeBtnIndex) {this.setState({ selectedAttributeBtnIndex:index})}
        else { this.setState({ selectedAttributeBtnIndex: null }) }
        
        onClickCallBack(attributeIndex,index,item)
    }
    render() {
        const { attribute,hideAttributeName,minHeight} = this.props;
        const { selectedAttributeBtnIndex } = this.state;
        let attributeHeight=minHeight?minHeight:"10rem"
        return <div className="item-attribute" style={{minHeight:attributeHeight}}>
            
            {hideAttributeName!=true?<div className="item-attribute__name">{attribute.name}:</div>:null}
            <div className="item-attribute__buttons-container">
                {attribute.items.map((item, index) => <button className={`item-attribute__btn ${index == selectedAttributeBtnIndex ? "active" : null}`} key={index} onClick={() =>this.handleAttributeSelection(index)}>{item.displayValue}</button>)}
            </div>

        </div>
    }
}
export default ItemAttributes;