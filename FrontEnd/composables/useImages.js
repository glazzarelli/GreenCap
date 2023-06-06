import { filename } from 'pathe/utils';

//funtion that given the type of image (area or project) returns the path of the image in the assets folder
export default function useImages(imageGroup,imageName) {
    //set the path to the type of image
    let glob;

    switch (imageGroup) {
      case 'areas':
        glob = import.meta.glob("~/assets/images/areas/*", { eager: true });
        break;
      case 'projects':
        glob = import.meta.glob("~/assets/images/projects/*", { eager: true });
        break;
        case 'people':
            glob = import.meta.glob("~/assets/images/people/*", { eager: true });
            break;
      default:
        throw new Error("Invalid image group");
    }
    //save the images in an object
    const images = Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [filename(key), value.default])
    );
    const dynamic_image_name = imageName.toLowerCase().split(' ').join('-');
    //return the path of the image with the name of the dynamic_image_name
    return images[dynamic_image_name];
}