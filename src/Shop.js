import React from 'react'
import PotionTile from "./PotionTile"

class Shop extends React.Component {

  state = {
    className: "card",
    action: "addToInventory"
  }

  renderPotions = () => {
    return this.props.potions.map(potion => {
      return (
        <PotionTile potion={potion} addToInventory={this.props.addToInventory} oneClassName={this.state.className} action={this.state.action}>
          <h4 className="potion-header">{potion.name}</h4>
        </PotionTile>
      )
    })
  }

  render() {
    return (
      <div className="shop">
        <div className="shop-header">
          <img className="torch" src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif" alt="torch"/>
          <h1>Ye Olde Apothecary</h1>
          <img className="torch flipped" src="https://img.itch.zone/aW1nLzEzNDg2ODkuZ2lm/original/BEjCgg.gif" alt="torch"/>
        </div>
        <div className="shop-cards">
          {this.renderPotions()}
        </div>
      </div>
    )
  }
}

export default Shop
