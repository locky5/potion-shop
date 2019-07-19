import React from 'react'
import Purse from "./Purse"
import InventoryTile from "./InventoryTile"
import PotionTile from "./PotionTile"


class Inventory extends React.Component {

  state = {
    className: "inventory-card",
    action: "sell"
  }

  renderInventory = () => {

    return this.props.inventory.map(item => {
      const potion = this.props.potions.find(potion => potion.id === item.id)

       return (
        <PotionTile potion={potion} sell={this.props.sell} oneClassName={this.state.className} action={this.state.action}>
          <h4>{potion.name} x {item.amount}</h4>
        </PotionTile>
      )
    })
  }

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <Purse stopShake={this.props.stopShake} shake={this.props.shake} gold={this.props.gold}/>
        <div className="inventory-cards">
         {this.renderInventory()}
        </div>
      </div>
    )
  }
}

export default Inventory
