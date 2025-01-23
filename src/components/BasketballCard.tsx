
interface BasketballCardProps{
    name: string;
    height: number;
    mvp: boolean;
}


function BasketballCard({ name, height, mvp }: BasketballCardProps) {
    
const mvpStatus = mvp ? "Han har blivit MVP" : "Han har inte blivit MVP";

    return (
        <section className="player-card">
            <h2> {name}</h2>
            <p>Längd: {height} ft</p>
            <p> {mvpStatus} </p>
        </section>
    )
}

export default BasketballCard