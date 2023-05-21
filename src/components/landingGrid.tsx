export default function LandingGrid() {
    return (<div>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
            <img src={require("../assets/images/thumb-fp-2023_05_CHE-Ranking-9be06b57dedbd0ba9661b0d4340077c4.jpg")}
                 alt="THM Header" className={"aspect-square shadow-lg"}/>
        </div>
    </div>);
}