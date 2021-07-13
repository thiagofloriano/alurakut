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
              <a href={item.gituser ? `https://github.com/${item.gituser}` : item.url} target='_blank'>
                <img
                  src={item.image}
                  alt={item.nome}
                />
                <span>{item.nome}</span>
              </a>
            </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ListBox
