import Image from "next/image";

const images = [
  "./parade.jpg",
  "./tent2.jpg",
  "./flowers.jpg",
  "./kewgardens.jpg",
  "./tent.jpg",
  "./classroom.jpg",
  "./londoneye.jpg",
  "./flowers2.jpg",
  "./medals.jpg",
  "./yoga.jpg",
  "./womensday.jpg",
  "./heroimage.jpg",
  "./vital5nhs.jpg",
  "./fgm.jpg"

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