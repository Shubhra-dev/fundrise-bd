function IconBoxBordered({ image, hover = `hover:bg-bg-blush-mist-base`, link = '#' }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-border-brand-4 chamfer-tr-2 p-[1px] cursor-pointer">
        <div className={`bg-bg-blush-mist-light chamfer-tr-2 p-[7px] ${hover}`}>
          <img src={image} alt="icon" />
        </div>
      </div>
    </a>
  );
}

export default IconBoxBordered;
