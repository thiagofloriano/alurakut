import styled from 'styled-components'

function BlogList(props) {
  return (
    <div>
      <h2 className="title">
        Blog
      </h2>

      <ul className='blog-items'>

        { props.posts.map( (item, index) => {
          return (
            <li
              className='blog-item'
              key={index}
              id={index}
              css={'display: flex; flex-wrap: wrap; margin-bottom: 10px;'}
            >
              <div
                css={`width: 80px; height: 80px; margin-right: 10px; background-image: url(${item.featured_image}); background-repeat: no-repeat; background-size: cover; `}
              >
              </div>
              <div className="blog-item__data" css={'max-width: calc(100% - 90px)'}>
                <h3>
                  {item.title}
                </h3>
                <p>{item.summary}</p>
                <hr/>
              </div>
            </li>
            )
        } )}

      </ul>
    </div>
  )
}

export default BlogList
