import React from "react"
import "../ProductDisplay.scss"
import ItemAttribues from "../../../components/ItemAttributes/ItemAttribues"
import { connect } from "react-redux"
export { AddCartItem }
from "../../../redux/cart/cart.actions"
export { addAttributeSelectionsIndex }
from "../../../redux/cart/cart.actions"


const dependecies = {

    React,
    ItemAttribues,
    connect

}
export default dependecies;