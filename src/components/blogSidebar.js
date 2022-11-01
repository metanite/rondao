import React from 'react';
import { Link, graphql, StaticQuery } from "gatsby"

const BlogSidebar = ({ data }) => {
    return (
        <>
          <div className="blog-sidebar">
            <p className="text-blender-pro blog-sidebar-title">RECENT</p>
            {
                data.allWpPost.edges.map(({ node }, index) => {
                  return (
                    <>
                      <div className="divider" style={{margin: '20px 0'}}></div>
                      <BlogSidebarItem node={node} key={node.id}/>
                    </>
                  )
                })
              }
          </div>
        </>
    )
}

const BlogSidebarItem = ({node: {title, uri, date, author, categories}}) => {
  return (
    <div className="px-0 text-roboto">
      {
        categories.nodes.length > 0 &&
        <p className="blog-sidebar-item-category text-roboto text-magenta mb-0">{categories.nodes[0].name}</p>
      }
      <Link to={`/blog${uri}`}  className="text-white">
        <p className="mt-1 mb-2">{ title }</p>
      </Link>
      {/* <p className="text-blue">{date} - {author.node.name}</p> */}
      <p className="text-blue">{date}</p>
    </div>
  )
}

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpPost (limit: 3, sort: {order: DESC, fields: date}){
            edges {
              node {
                id
                uri
                title
                content
                date(formatString: "MMMM DD, YYYY")
                author {
                  node {
                    name
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <BlogSidebar data={data} {...props} />}
    />
  )
}
