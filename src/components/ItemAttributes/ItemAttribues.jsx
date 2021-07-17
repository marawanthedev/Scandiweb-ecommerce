import React from 'react'
import './itemAttribues.scss'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

class ItemAttributes extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      selectedAttributeBtnIndex: null
    }
  }

  handleAttributeUISelection = (index, isItemSelected) => {
    const { onClickCallBack, attributeIndex, item } = this.props
    if (
      index !== this.state.selectedAttributeBtnIndex &&
      isItemSelected !== true
    ) {
      this.setState({ selectedAttributeBtnIndex: index })
    } else {
      this.setState({ selectedAttributeBtnIndex: null })
    }
    onClickCallBack(attributeIndex, index, item)
  }

  render () {
    const { attribute, hideAttributeName, toggleButtons, isMini } = this.props
    const { selectedAttributeBtnIndex } = this.state

    return (
      <div className={`item-attribute ${isMini ? 'mini' : null}`}>
        {hideAttributeName !== true ? (
          <Fade left>
            <div className='item-attribute__name'>{attribute.name}:</div>
          </Fade>
        ) : null}
        <div className='item-attribute__buttons-container'>
          {attribute.items.map((item, index) => (
            <Zoom>
              <button
                className={`item-attribute__btn ${
                  index === selectedAttributeBtnIndex || item.selected === true
                    ? 'active'
                    : null
                }`}
                key={index}
                onClick={() => {
                  if (toggleButtons)
                    this.handleAttributeUISelection(index, item.selected)
                }}
              >
                {item.displayValue}
              </button>
            </Zoom>
          ))}
        </div>
      </div>
    )
  }
}

export default ItemAttributes
