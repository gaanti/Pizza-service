import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {PizzaBlock, Skeleton} from "./pizza-block";
import Categories from "./categories";
import Sort from "./sort";
import axios from "axios";
import {RootState} from "../redux/store";

function MainPage() {
    const sortBy = useSelector((state: RootState) => state.sort.sortBy)
    const filterBy = useSelector((state: RootState) => state.filter.filterBy)
    const [pages, setPages] = useState(1)
    const [page, setPage] = useState(0)
    type pizzaC = {
        title: String;
        image: string;
        doughType: string;
        size: string;
        price: Number;
        category: String;
        rank: Number;
    };
    const [pizzas, setPizzas] = useState<pizzaC[]>()

    const fetchPizza = async () => {
        const sort = sortBy ? "sortBy=" + sortBy : "";
        const filter = filterBy !== "All" ? "filterBy=" + filterBy : "";
        let res = await axios.get("http://localhost:8080/pizzas?" + sort + "&" + filter + "&page=" + page)
        setPages(res.data.totalPages)

        if (page + 1 === pages && page + 1 > res.data.totalPages) {
            res = await axios.get("http://localhost:8080/pizzas?" + sort + "&" + filter + "&page=" + page)
            setPage(res.data.totalPages - 1)
        }
        setPizzas(res.data.content)
    }

    React.useEffect(() => {
        fetchPizza()
    }, [sortBy, filterBy, page])

    const pagesQty = []
    for (let i = 0; i < pages; i++) {
        pagesQty.push(i + 1)
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {pizzas ? pizzas.map((element) => {
                            return (
                                <PizzaBlock title={element.title}
                                            category={element.category}
                                            doughType={JSON.parse(element.doughType)}
                                            image={element.image}
                                            price={element.price}
                                            rank={element.rank}
                                            size={JSON.parse(element.size)}/>
                            )
                        }) :
                        <>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/>
                            <Skeleton/></>}
                </div>
            </div>
            <ul className="content__pages">
                {pagesQty.map((e, index) => {
                    return (
                        <li className={"button button--outline button--circle " + (page === index ? "content__pages-active-page" : "")}
                            onClick={() => setPage(index)}>{e}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default MainPage;