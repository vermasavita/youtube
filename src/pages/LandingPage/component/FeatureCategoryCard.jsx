const FeatureCategoryCard = ({itemId, imageSrc, title}) => {
  return (
    <div className="feature-card-container" key={itemId}>
      <img
        src={imageSrc}
        alt="cateory thumbnail"
      />
      <div>
        <p> {title}</p>
      </div>
    </div>
  );
};

export { FeatureCategoryCard };
