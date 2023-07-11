import ItemCard from './ItemCard';
import portraitImg from "../Assets/images/portrait-img.jpg"
import printImg from "../Assets/images/print-img.jpg"
import autoImg from "../Assets/images/auto-img.jpg"
import editingImg from "../Assets/images/editing-img.jpg"
import eventImg from "../Assets/images/event-img.jpg"
import commercialImg from "../Assets/images/Commercia-Img.jpg"

function ItemCardList() {
    return (
        <div className="mb-8 overflow-x-auto relativ flex flex-nowrap justify-start shadow-inner">
                <ItemCard
                    imgSrc={eventImg}
                    firstP="Event Photography"
                    secondP="Preserve your special moments from weddings, parties, conferences, and other occasions with professional event photography services. From candid shots to capturing the ambiance, I ensure every important detail is beautifully documented."
                />
                <ItemCard
                    imgSrc={portraitImg}
                    firstP="Portrait Photography"
                    secondP="Capture the essence and personality of individuals, families, and couples through stunning portrait sessions that create cherished memories."
                />
                <ItemCard
                    imgSrc={commercialImg}
                    firstP="Commercial Photography"
                    secondP="Provide high-quality images for businesses, including product photography, corporate headshots, and branding visuals. Create captivating visuals that effectively represent your brand and enhance your marketing efforts."
                />
                <ItemCard
                    imgSrc={autoImg}
                    firstP="Automotive Photography"
                    secondP="Specialize in capturing the elegance, power, and detail of performance cars. From sleek sports cars to vintage classics, I create dynamic images that showcase the unique personality of each vehicle."
                />
                <ItemCard
                    imgSrc={editingImg}
                    firstP="Photo Editing and Retouching"
                    secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
                />
                <ItemCard
                    imgSrc={printImg}
                    firstP="Photo Prints and Custom Framing"
                    secondP="I offer high-quality prints of photographs along with custom framing options. Providing clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
                />
        </div>
    );
}

export default ItemCardList;
