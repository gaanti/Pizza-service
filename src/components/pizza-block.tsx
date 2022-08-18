import React, {useState} from 'react';
import ContentLoader from 'react-content-loader';


export function PizzaBlock(props: {
    title: String;
    image: string;
    doughType: [];
    size: [];
    price: Number;
    category: String;
    rank: Number;
}) {
    const [quantity, increaseQuantity] = useState(0);
    const Block = () => {
        return (
            <div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src={"data:image/jpg;base64," + props.image}
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">{props.title}</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            {props.doughType.map((e, index) => {
                                return (
                                    <li className={0 === index ? "active" : ""}>{e}</li>
                                )
                            })}
                        </ul>
                        <ul>
                            {props.size.map((e, index) => {
                                return (
                                    <li className={0 === index ? "active" : ""}>{e} см.</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        {/*@ts-ignore*/}
                        <div className="pizza-block__price">${props.price}</div>
                        <div className="button button--outline button--add"
                             onClick={() => increaseQuantity(quantity + 1)}>
                            <span>Добавить</span>
                            <i>{quantity}</i>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <Block/>)
}

export const Skeleton = () => {
    return (
        <div>
            {/*@ts-ignore*/}
            <ContentLoader
                speed={2}
                width={280}
                height={544}
                viewBox="0 0 280 544"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="140" cy="140" r="140"/>
                <rect x="1" y="293" rx="10" ry="10" width="280" height="31"/>
                <rect x="-1" y="330" rx="10" ry="10" width="140" height="27"/>
                <rect x="140" y="330" rx="10" ry="10" width="140" height="27"/>
                <rect x="0" y="360" rx="10" ry="10" width="93" height="27"/>
                <rect x="93" y="360" rx="10" ry="10" width="93" height="27"/>
                <rect x="186" y="360" rx="10" ry="10" width="93" height="27"/>
                <rect x="0" y="411" rx="10" ry="10" width="59" height="27"/>
                <rect x="140" y="400" rx="10" ry="10" width="140" height="44"/>
            </ContentLoader>
        </div>)
}