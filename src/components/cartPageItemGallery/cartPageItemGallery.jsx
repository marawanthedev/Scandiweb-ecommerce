import React from 'react'
import LightChevron from '../../assets/svg/lightChevron.svg'
import './cartPageItemGallery.scss'
import Fade from 'react-reveal/Fade'

class CartPageItemGallery extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      imageSelectionIndex: 0,
    }
  }

  nextImage = (gallery, imageSelectionIndex) => {
    if (imageSelectionIndex < gallery.length - 1) {
      this.setState({ imageSelectionIndex: imageSelectionIndex + 1 })
    } else {
      this.setState({ imageSelectionIndex: 0 })
    }
  }
  prevImage = (gallery, imageSelectionIndex) => {
    if (imageSelectionIndex > 0) {
      this.setState({ imageSelectionIndex: imageSelectionIndex - 1 })
    } else {
      this.setState({ imageSelectionIndex: gallery.length - 1 })
    }
  }

  render() {
    const { gallery } = this.props
    const { imageSelectionIndex } = this.state

    return (
      <Fade right>
        <div
          className="cart__item__gallery"
          style={{ backgroundImage: `url(${gallery[imageSelectionIndex]})` }}
        >
          {gallery.length > 1 ? (
            <div>
              <div
                className="cart__item__gallery__prev"
                onClick={() => this.prevImage(gallery, imageSelectionIndex)}
              >
                <img src={LightChevron} alt="" />
              </div>
              <div
                className="cart__item__gallery__next"
                onClick={() => this.nextImage(gallery, imageSelectionIndex)}
              >
                <img src={LightChevron} alt="" />
              </div>
            </div>
          ) : null}
        </div>
        ;
      </Fade>
    )
  }
}

export default CartPageItemGallery
