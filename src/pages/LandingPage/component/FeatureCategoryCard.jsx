const FeatureCategoryCard = ({itemId, imageSrc, title, categoryClickHandler}) => {
  return (
    <div className="feature-card-container" key={itemId} onClick={categoryClickHandler}>
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
