function ListBox(props) {
  return (
    <div>
      <h2 className='smallTitle'>
        {props.titulo} ({props.dados.length})
      </h2>
      <ul>
        {props.dados.map( (item) => {
          return (
            <li key={item.id} id={item.id}>
              <a href={item.url} target='_blank'>
                <img
                  src={item.avatar_url ? item.avatar_url : item.image}
                  alt={item.name}
                />
                <span>{item.name}</span>
              </a>
            </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ListBox
