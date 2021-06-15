import React from "react"
import  CategoryItem from "../../components/CategoryItem/CategoryItem"
import "./Category.scss";
import { connect } from "react-redux"
import {getCategoryProducts} from "../../redux/category/category_action"
class CategoryPage extends React.Component{


    
    constructor (props) {
        
        super(props);

        this.state = {
            
        
        }
    }

  componentDidMount() {
    
  }
 
    render() {
      const { category, selectedCurrency, selectedCurrencySymbol } = this.props;

      return <div className="categoryPage" >
          
            <div className="categoryPage__header">

               {category.name}
            </div>
            <div className="categoryPage__items-container">

 {
                category.items.map((item) =>
                  <CategoryItem {...item}
                    selectedCurrencySymbol={selectedCurrencySymbol}
                    selectedCurrency={selectedCurrency} margin="2rem 1rem"></CategoryItem>
                )
            }
            </div>
           
        </div>
    }

}

const mapStatToProps = ({ categoryReducer, currencyReducer }) => ({
  
  category: categoryReducer.category,
  selectedCurrency: currencyReducer.selectedCurrency,
   selectedCurrencySymbol:currencyReducer.selectedCurrencySymbol
})
const mapDispatchToProps = (dispatch) => ({
  
getCategoryProducts:(category)=>(dispatch(getCategoryProducts(category)))
})

export default connect(mapStatToProps,mapDispatchToProps)(CategoryPage);