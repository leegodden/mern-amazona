import data from './data';
import styled from 'styled-components';

const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

function App() {
	return (
		<div>
			<header>
				<a href="/">amazona</a>
			</header>
			<main>
				<h1>Featured Products</h1>

				<Products>
					{data.products.map((product) => (
						<div className="product" key={product.slug}>
							<a href={`/product/${product.slug}`}>
								<img src={product.image} alt={product.name} />
							</a>
							<div className="product-info">
								<a href={`/product/${product.slug}`}>
									<p>{product.name}</p>
								</a>
								<p>
									<strong>£{product.price}</strong>
								</p>
								<button>Add to cart</button>
							</div>
						</div>
					))}
				</Products>
			</main>
		</div>
	);
}

export default App;
