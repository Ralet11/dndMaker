import React from 'react'
import Items from '../components/Items'
import TopBar from '../components/TopBar'

const ItemsView = () => {
    return (
        <div>
          <TopBar />
          <div>
            <Items />
          </div>
        </div>
      )
}

export default ItemsView
