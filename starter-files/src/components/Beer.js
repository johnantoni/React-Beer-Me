import React from 'react'; // pull whole react library
import { Link } from 'react-router-dom'; // allow you to create links using push-state
import slug from 'slugify'; // helper to create link urls

class Beer extends React.Component {
	render() {
    // old
    // const id = this.props.details.id;
    // const name = this.props.details.name;
    // const labels = this.props.details.labels;

    // new
    const { id, name, labels } = this.props.details;
    const image = labels.medium;

		return (
			<div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </Link>
      </div>
		)
	}
}

export default Beer;
