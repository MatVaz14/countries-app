const Paginate = ({countries, pages}) => {

	const buttons = [];
	for(let i=1; i < Math.ceil(countries.length/8); i++){
		buttons.push(i)
	}

	return(
		<div>
			{
				buttons.map(button => (<button>{button}</button>))
			}
		</div>
	)
}

export default Paginate;