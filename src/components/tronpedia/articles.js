import React from "react"
import {FaArrowRight} from "react-icons/fa"

const Articles = ({articles}) => {
	return (
		<div className="tronpedia-articles">
			{
				articles.map((article, index) => {
					return (
						<a key={index} href="/#">
							<div className="tronpedia-articles-article d-flex">
								<div className="d-flex align-items-center justify-content-center">
									<img src={article.image} alt={article.alt} className="" /> 
								</div>
								<div className="flex-fill d-flex flex-column">
									<h2 className="tronpedia-articles-article-title">{article.title}</h2>
									<p className="tronpedia-articles-article-description">{article.description}</p>
								</div>
							</div>
						</a>
					)
				})
			}
			<div className="tronpedia-articles-pagination d-flex justify-content-center align-items-center">
				{
					[...Array(5).keys()].slice(1).map(i => {
						return(
							<a href="/#" className={"tronpedia-articles-pagination-page "+ (i === 1 ? "current" : "")}>{i}</a>
						)
					})
				}
				<FaArrowRight size={18} className="ml-3" />
			</div>
		</div>
	)
}

export default Articles