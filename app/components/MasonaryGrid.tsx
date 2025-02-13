import Image from "next/image";

const images = [


  "./dc5dfd68-bc34-427a-af02-5f94c9081e0d.jpg",

  "./IMG_1022.jpg",

  "./6db8a880-8173-4ac5-9d3b-4443546a3f25.jpg",
  "./09249834-cfd7-485a-948a-0538770c2c3b.jpg",
  "./IMG_1890.jpg",
  "./IMG_5120.jpg",
  "./47ccd5e1-1e74-407f-a619-126173f7a9b0.jpg",
  "./acfe8706-98ed-4199-bd6a-b785bb0e913b.jpg",
  "./69f761bc-8e3f-470e-9cd6-8e72b4bd7ece.jpg",
  "./IMG_0928.jpg",
  "./IMG_0417.jpg",
  "./2d8bff53-38eb-4549-b9fa-35b06c640291.jpg",

];

export const MasonaryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mx-4">
      {images.map((src, index) => (
        <div key={index} className="mb-4 ">
          <Image className="w-full object-cover rounded-lg" src={src} alt={`Image ${index + 1}`} width={500} height={500} />
        </div>
      ))}
    </div>
  );
};