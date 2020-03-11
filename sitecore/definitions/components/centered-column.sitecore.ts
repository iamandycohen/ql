import { /* CommonFieldTypes, */ SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the CenteredColumn component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest) {
  manifest.addComponent({
    name: 'CenteredColumn',
    icon: SitecoreIcon.DocumentTag,
    // fields: [
    //   { name: 'heading', type: CommonFieldTypes.SingleLineText },
    // ],
    placeholders: [
      'jss-center'
    ]
  });
}
