function List({items}){

  // const items = props.items
    return (<ul>
                {items.map((value, i) => {
                return <li key={i}>{value}</li>
                })}
        </ul>)

}

export {List};