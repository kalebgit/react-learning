import './CardsContainer.scss';

function CardsContainer({children}){
    return (
        <section className="cards absolute flex flex-row flex-nowrap justify-start items-center gap-10">
            {children}
        </section>
    )
}

export default CardsContainer;