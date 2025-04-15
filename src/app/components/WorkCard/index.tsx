import styles from './styles.module.scss';

type WorkCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function WorkCard({ image, title, description }: WorkCardProps) {
  return (
    <div className={styles['work-card']}>
      <div className={styles['work-card__imageWrapper']}>
        <img src={image} alt={title} className={styles['work-card__image']} />
      </div>
      <div className={styles['work-card__content']}>
        <h3 className={styles['work-card__title']}>{title}</h3>
        <p className={styles['work-card__description']}>{description}</p>
      </div>
    </div>
  );
}
