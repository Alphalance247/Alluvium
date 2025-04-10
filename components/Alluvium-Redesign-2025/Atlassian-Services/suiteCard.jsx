const SuiteCard = () => {
  return (
    <div
      className={`${styles.card} ${
        removeBorder ? styles.noBorder : styles.withBorder
      }`}
    >
      <Image width={width} height={height} src={img} alt="icons" />

      <h6 className={`${styles.heading} `}>{title}</h6>

      {description?.map((el, i) => (
        <p className={`${styles.sub__head}`} key={i}></p>
      ))}
    </div>
  );
};
