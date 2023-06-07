/**
 * Given the type of image (area,project or people) and the image name, returns the path of the image in the assets folder.
 * @param {string} imageGroup - The type of image (areas, projects, or people).
 * @param {string} imageName - The name of the image.
 * @returns {string} - The path of the image with the name of the dynamic_image_name.
 * @throws {Error} - If the image group is invalid.
 * note that this composables is needed due to a problem in managing dynamic path images in nuxt3 as mentioned in this issue: https://github.com/nuxt/nuxt/issues/14766
 */
import { filename } from 'pathe/utils';

export default function useImages(imageGroup,imageName) {
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