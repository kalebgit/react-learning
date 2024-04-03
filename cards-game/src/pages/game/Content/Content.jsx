import './Content.scss';

function Content({children}){
    return (
        <main className="game-content relative bg-blue-200">
            {children}
        </main>
    )
    
}

export default Content;