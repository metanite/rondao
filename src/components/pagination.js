import React  from 'react';
import { Link } from "gatsby";

const Pagination = ({basePath, previous, next, className}) => {
	const previousUrl = getLink(previous, basePath)
	const nextUrl = getLink(next, basePath)
	const additionalClassNames = (className !== undefined || className !== true) ? className : ''
	return (
          <div className={`blog-post-pagination position-relative ${additionalClassNames}`}>
            {
              previousUrl &&
              <Link to={previousUrl} className="blog-post-pagination-previous">{'< Previous'}</Link>
            }
            {
              nextUrl &&
              <Link to={nextUrl} className="blog-post-pagination-next">{'Next >'}</Link>
            }
          </div>
	)
}
//new link expected to be string or object {uri: 'newLink'}
//basePath prop only used when newLink is an object
const getLink = (newLink, basePath) => {
	const newBasePath = (basePath) ?  basePath : ''
	const linkType = typeof newLink
	switch(linkType) {
		case 'object':
			return (newLink) ? `${newBasePath}${newLink.uri}` : undefined;
			break
		case 'string':
			return newLink
			break
		default:
			return undefined
	}
}

export default Pagination

