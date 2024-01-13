import Image from "next/image";
import styles from "../styles/Productcard.module.css";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${product._id}`}>
      <Image src={product.img} alt="product" width="200" height="200"/>
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>₹{product.prices[0]*90}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default ProductCard;
