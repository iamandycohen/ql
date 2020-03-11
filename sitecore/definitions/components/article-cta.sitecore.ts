import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ArticleCta component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest) {
  manifest.addComponent({
    name: 'ArticleCta',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'ctaText', type: CommonFieldTypes.SingleLineText },
      { name: 'ctaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.Image },
    ],
  });
}
