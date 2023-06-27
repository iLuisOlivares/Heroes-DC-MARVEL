import { Link } from "react-router-dom"

export const HeroCard = ({
    id = 'dc-batman',
    superhero = 'Batman',
    description,
    image
}) => {


    description = description.length > 200 ? description.slice(0, 200) + "..." : description;

    return (

        <div className="col">
            <div className="card card_hero">
                <div className="row g-0 height-100">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mt-4">{superhero}</h5>
                            <p className="card-text card_text">{description}</p>
                            <Link style={{ "color": "#8C30F5", "textDecoration": "none" }} className="text" to={`/hero/${id}`}>Explorar ➤</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded card-image" alt="..." />

                    </div>
                </div>
            </div>
        </div>

    )
}
