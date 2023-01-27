import React from "react"
import {Helmet} from "react-helmet"
import TronpediaFeatured from "../../../../components/tronpedia/featured"
import TronpediaSearch from "../../../../components/tronpedia/search"
import TronpediaTopics from "../../../../components/tronpedia/topics"
import EmailCapture from "../../../../components/EmailCapture"
import { FaArrowLeft } from "react-icons/fa"

const TronpediaArticle = () => {

	return (
        <div className="trondao-tronpedia">
            <Helmet>
                <title>Sample Tronpedia Article | TRONDAO</title>
                <meta name="description"
                        content=""/>
                <meta property="og:description" content="Sample Tronpedia Article"/>
                <meta property="og:title" content="Sample Tronpedia Article | TRONDAO"/>
            </Helmet>

            <div className="tronpedia-article-page col-11 col-md-9 mx-auto">
            	<div className="tronpedia-article-page-search">
                    <TronpediaSearch />
                </div>

                <div className="tronpedia-article-page-topics">
                    <h2 className="text-uppercase">Popular Topics</h2>
                    <TronpediaTopics limit={5} />
                </div>

                <div className="tronpedia-article-page-main d-flex flex-column flex-md-row">
                	<a 
                		href="/developers/learning/tronpedia/"
                		className="tronpedia-article-page-main-back"
                	>
                		<FaArrowLeft />
                	</a>
                	<div className="tronpedia-article-page-main-related order-2 order-md-1 col-12 col-md-3 d-flex flex-wrap flex-lg-nowrap flex-row flex-md-column align-items-start">
                		<div>
                			<h2 className="flex-fill">Related Articles</h2>
                		</div>
                		<div className="mt-2 mt-lg-0 d-flex flex-row flex-md-column">
                		{
                			[
                				"Some Article Listed Here", 
                				"Some Other Listed Here",
                				"Some Article Listed Here", 
                				"Some Other Listed Here",
                			].map((article, index) => {
                				return (
                					<a 
                						href="/#"
                						rel="noopener noreferrer"
                						className="tronpedia-article-page-main-related-article"
                						id={"tronpedia-related-article-button-"+article}
                					>
                						{article}
                					</a>
                				)
                			})
                		}
                		</div>
                	</div>
                	<div className="tronpedia-article-page-main-content order-1 order-md-2">
                		<h1>The Guide To NFT's</h1>
                		<div className="tronpedia-article-page-main-content-box"></div>
                		<p>
                		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                		tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque 
                		id diam vel. Bibendum arcu vitae elementum curabitur vitae. Varius vel pharetra 
                		vel turpis. Eros donec ac odio tempor orci dapibus. In pellentesque massa placerat 
                		uis. Ac ut consequat semper viverra nam libero justo laoreet sit. Augue interdum 
                		velit euismod in pellentesque. Morbi tincidunt augue interdum velit euismod. 
                		Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. 
                		Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Enim lobortis scelerisque 
                		fermentum dui faucibus. Fringilla urna porttitor rhoncus dolor. Id semper risus in 
                		hendrerit. Sed nisi lacus sed viverra tellus. Posuere lorem ipsum dolor sit amet 
                		consectetur adipiscing. At imperdiet dui accumsan sit amet nulla facilisi.
                		</p>
                		<p>
						Nisl nisi scelerisque eu ultrices vitae auctor. Libero id faucibus nisl tincidunt 
						eget nullam non. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. 
						Suscipit tellus mauris a diam maecenas. Elementum integer enim neque volutpat. 
						Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. 
						Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. 
						Morbi tristique senectus et netus et malesuada fames. Nibh sed pulvinar proin gravida. 
						Nec nam aliquam sem et. Adipiscing elit ut aliquam purus sit amet luctus. 
						Purus ut faucibus pulvinar elementum.
						</p>
						<p>
						Ut porttitor leo a diam sollicitudin tempor. In eu mi bibendum neque. 
						Dictum varius duis at consectetur. Gravida dictum fusce ut placerat orci nulla 
						pellentesque. Purus non enim praesent elementum facilisis leo vel fringilla. 
						Mauris augue neque gravida in fermentum et sollicitudin ac orci. Quam quisque 
						id diam vel quam elementum pulvinar. Nibh cras pulvinar mattis nunc sed blandit libero. 
						Volutpat sed cras ornare arcu dui vivamus arcu felis. Bibendum arcu vitae elementum 
						curabitur. Tellus in metus vulputate eu. Et magnis dis parturient montes. 
						Lectus magna fringilla urna porttitor rhoncus. Diam donec adipiscing tristique 
						risus nec feugiat in fermentum posuere.
						</p>
						<p>
						Sed velit dignissim sodales ut eu sem integer. Blandit aliquam etiam erat velit. 
						Metus aliquam eleifend mi in nulla. Vulputate eu scelerisque felis imperdiet proin 
						fermentum. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper 
						dignissim cras. Accumsan lacus vel facilisis volutpat est velit egestas dui id. 
						Purus viverra accumsan in nisl nisi scelerisque eu. Condimentum id venenatis a 
						condimentum. Turpis egestas sed tempus urna et pharetra pharetra massa. Purus 
						semper eget duis at tellus. Nibh cras pulvinar mattis nunc sed blandit. Vitae 
						tortor condimentum lacinia quis. Et egestas quis ipsum suspendisse ultrices 
						gravida dictum fusce ut. Sed ullamcorper morbi tincidunt ornare massa eget. 
						Nulla porttitor massa id neque aliquam vestibulum morbi. Sagittis purus sit amet 
						volutpat consequat mauris nunc congue. Ornare quam viverra orci sagittis eu 
						volutpat odio facilisis. Suscipit adipiscing bibendum est ultricies integer.
						</p>
						<p>
						Dictum non consectetur a erat. Tincidunt dui ut ornare lectus sit amet. Ut eu sem 
						integer vitae. Amet consectetur adipiscing elit ut aliquam purus sit. Enim blandit 
						volutpat maecenas volutpat blandit aliquam etiam erat. Quis varius quam quisque 
						id diam vel. Id diam vel quam elementum pulvinar etiam non quam. Diam donec adipiscing 
						tristique risus nec feugiat in fermentum. Enim neque volutpat ac tincidunt vitae 
						semper quis. Non curabitur gravida arcu ac tortor. Aliquam sem fringilla ut morbi 
						tincidunt augue. Pellentesque massa placerat duis ultricies lacus. Massa placerat 
						duis ultricies lacus sed. Adipiscing commodo elit at imperdiet dui accumsan sit amet. 
						Aliquam ut porttitor leo a diam sollicitudin tempor id. Lacus vel facilisis volutpat 
						est velit egestas dui id ornare. Etiam non quam lacus suspendisse faucibus interdum 
						posuere.
                		</p>
                	</div>
                </div>

                <div className="tronpedia-article-page-featured">
                	<TronpediaFeatured />
                </div>

                <div className="tronpedia-article-page-email">
                    <EmailCapture />
                </div>
           	</div>	
        </div>
    )
}

export default TronpediaArticle