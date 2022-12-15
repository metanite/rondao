import React from "react"
import {FaArrowRight} from "react-icons/fa"

const Articles = ({articles}) => {
	return (
		<div className="tronpedia-articles">
			{
				articles.map((article, index) => {
					return (
						<a key={index} href="/developers/learning/tronpedia/article/" target="_blank" rel="noopenner noreferrer">
							<div className="tronpedia-articles-article d-flex">
								<div className="d-flex align-items-lg-center justify-content-start justify-content-lg-center">
									<img src={article.image} alt={article.alt} className="" /> 
								</div>
								<div className="flex-fill d-flex flex-column my-2 my-lg-0">
									<h2 className="tronpedia-articles-article-title">{article.title}</h2>
									<p className="tronpedia-articles-article-description">{article.description}</p>
									<div className="tronpedia-articles-article-button d-flex d-lg-none">
										<FaArrowRight size={23} />
									</div>
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