import { Link } from "react-router-dom"

export const HeroCard = ({
    id = 'dc-batman',
    superhero = 'Batman',
    alter_ego = 'Bruce wayne',
    characters = "Bruce Wayne",
    publisher = "Dc-comics"
}) => {

    const imgUrl = `src/assets/${id}.jpg`

    return (
        <div className="col d-flex justify-content-center align-items-center p-2">

            <div className="card" style={{ "width": "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p>{publisher}</p>

                    {/* {
                        alter_ego == characters ? <p>{alter_ego}</p> : <p>{characters}</p>
                    } */}
                    <Link className="text-danger" to={`/hero/${id}`}>Ver mas</Link>
                </div>

            </div >

        </div>
    )
}
