

interface myObj {
    listing_id?: number;
    url?: string;
    MainImage?: string;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
    [key:string]: any;
};

interface myObjProps {
    items: myObj[];
};  

function Listing ({items}: myObjProps) {    

    return (
        
        <div className="item-list">
            {items.map((item, i) => (
                <div className="item" key={i}>
                    <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}/>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">
                        {item.title.length > 50 
                        ? item.title.substring(0, 50) + '...' 
                        : item.title }
                    </p>
                    <p className="item-price">
                        {item.currency_code === 'USD' ? '$ ' : item.currency_code === 'EUR' ? '€ ' : 'GBP '}
                        {item.price}
                    </p>
                    <p className={`item-quantity ${(item.quantity < 10 ? 'level-low' : item.quantity > 20 ? 'level-high' : 'level-medium' )}`}>
                        {item.quantity} left
                    </p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Listing;