import { TitleField, RichTextField, ImageField } from "@prismicio/client";
interface HeaderProps {
  heading: TitleField;
  description: RichTextField;
  image: ImageField<never>;
}

const headingStyle = {
  heading1: "text-4xl font-bold",
  heading2: "text-3xl font-bold",
  heading3: "text-2xl font-bold",
  heading4: "text-xl font-bold",
  heading5: "text-lg font-bold",
  heading6: "text-base font-bold",
};

export default function Header(props: HeaderProps) {
  const { heading: headingList, description: descriptionList, image } = props;
  const heading = headingList[0];
  const description = descriptionList[0];
  if (!heading || !description) return null;
  return (
    <div>
      <div className="flex justify-center">
        <div className={headingStyle[heading.type]}>{heading.text}</div>
      </div>
      <p className="text-center text-2xl mt-2">{description.text}</p>
      <img
        src={image.url || ""}
        alt={image.alt || "banner"}
        className="w-full mt-4 max-h-[400px] object-cover"
      />
    </div>
  );
}
