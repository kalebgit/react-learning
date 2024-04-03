import './Content.scss';

function Content({children}){
    return (
        <main className="flex flex-row flex-wrap justify-center items-center gap-4">
            {children}
        </main>
    )
}

export default Content;