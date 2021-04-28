import React from "react";

import styles from "./slide.module.css";

const Slide = ({ picNo, show, id }) => {
  return (
    <div
      className={styles.container}
      style={{ display: show === id ? "block" : "none" }}
    >
      <div className={styles.theSlide}>
        <img
          className={styles.background}
          src={`https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20`}
          sizes="100vw"
          srcSet={`https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=100 100w, https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=116 116w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=135  135w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=156 156w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=181 181w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=210 210w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=244 244w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=283 283w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=328 328w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=380 380w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=441 441w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=512 512w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=594 594w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=698 689w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=799 799w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=927 927w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=1075 1075w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=1247 1247w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=1446 1446w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=1678 1678w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=1994 1946w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=2257 2257w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=2619 2619w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=3038 3038w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=3524 3524w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=4087 4087w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=4741 4741w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=5500 5500w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=6380 6380w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=7401 7401w,
https://artbykuze.imgix.net/${picNo}.jpg?auto=format&sharp=20; w=8192 8192w`}
        />
      </div>
    </div>
  );
};

export default Slide;

// <Imgix
//           className={styles.background}
//           src={`https://artbykuze.imgix.net/${picNo}.jpg?q=100`}
//           sizes="100vw"
//         />
