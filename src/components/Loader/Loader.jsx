import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  {
    console.log("loader");
  }
  return (
    <div className={styles.loaderWrapper}>
      <RingLoader size={60} />
    </div>
  );
};
export default Loader;
