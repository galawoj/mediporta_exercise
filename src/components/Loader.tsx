import styles from "./loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.containerLoader}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
