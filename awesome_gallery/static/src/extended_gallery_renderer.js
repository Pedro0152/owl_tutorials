/** @odoo-module **/
/** This is how someone could now extend the gallery view by modifying the renderer **/

import { registry } from '@web/core/registry';
import { galleryView } from '@awesome_gallery/gallery_view';
import { GalleryRenderer } from '@awesome_gallery/gallery_renderer';

export class MyExtendedGalleryRenderer extends GalleryRenderer {
   static template = "awesome_gallery.MyExtendedGalleryRenderer";
   setup() {
      super.setup();
      console.log("my gallery renderer extension");
   }
}

registry.category("views").add("my_gallery", {
   ...galleryView,
   Renderer: MyExtendedGalleryRenderer,
});