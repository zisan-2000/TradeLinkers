function ErrorImage  ({ src, altText }) {
  return (
    <img src={src} alt={altText} className="md:h-[240px] md:w-[380px] md:mt-10 h-[180px] w-[320px]"  />
  );
};

export default ErrorImage;
