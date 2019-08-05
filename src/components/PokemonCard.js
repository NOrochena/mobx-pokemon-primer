import React from 'react'
import {inject, observer } from 'mobx-react'

// Short demostration that functional components can also inject stores.
const PokemonCard = (props) => {
    const { pokemon } = props
    const { firstName } = props.userStore
    return (
        <div className="card">
            <div className="content">
                <div className="header">{pokemon.name}</div>
                <div>Name: {firstName}</div>
            </div>
      </div>
    )
}

// Very similar to Redux syntax. Inject allows you to access specific stores in the component.
// observer takes in a single argument, the current component. 
export default inject('userStore')(observer(PokemonCard))