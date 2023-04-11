
export const CollapseHero = ({ tittle, content, id }) => {


    return (
        <div className="accordion-item my-4">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#accordion${id}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    {tittle}
                </button>
            </h2>
            <div id={`accordion${id}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                    {content}
                </div>
            </div>
        </div >

    )
}
