require('apostrophe')({
    shortName: 'a3-starter',
    modules: {
        // Apostrophe module configuration
        // *******************************
        //
        // NOTE: most configuration occurs in the respective modules' directories.
        // See modules/@apostrophecms/page/index.js for an example.
        //
        // Any modules that are not present by default in Apostrophe must at least
        // have a minimal configuration here to turn them on: `moduleName: {}`
        // ***********************************************************************
        // `className` options set custom CSS classes for Apostrophe core widgets.
        '@apostrophecms/rich-text-widget': {
            options: {
                className: 'apostrophe-rich-text'
            }
        },
        '@apostrophecms/image-widget': {
            options: {
                label: 'Image',
                className: 'apostrophe-widget--image'
            }
        },
        '@apostrophecms/video-widget': {
            options: {
                className: 'apostrophe-video-widget__container'
            }
        },
        'image-widget': {},
        'container-block-widget': {},
        'brand-widget': {},
        'newsletter-subscription-widget': {},
        'columns-widget': {},
        'cover-block-widget': {},
        'carousel-widget': {},
        'spacer-widget': {},
        'horizontal-rule-widget': {},
        'section-with-background-widget': {},
        'card-widget': {},
        'card-link-widget': {},
        'testimonial-widget': {},
        'figure-widget': {},
        'link-widget': {},
        'button-widget': {},
        'verse-widget': {},
        'quote-widget': {},
        'list-widget': {},
        'definition-list-widget': {},
        'list-group-widget': {},
        'table-widget': {},
        'aside-widget': {},
        'lead-paragraph-widget': {},
        'topic': {},
        'topic-page': {},
        'tag': {},
        'tag-page': {},
        'author': {},
        'author-page': {},
        'article': {},
        'article-page': {},
        'notifications': {},
        'notifications-page': {},
        'reusable-content': {},
        'reusable-content-page': {},
        'website-section': {},
        'website-section-page': {},
        // `asset` supports the project's webpack build for client-side assets.
        asset: {},
        // The project's first custom page type.
        'default-page': {},
        'private-page': {},
        'custom-search-page': {},
        '@apostrophecms/seo': {},
        '@apostrophecms/global': {
            options: {
                seoGoogleVerification: true
            }
        },
        '@apostrophecms/open-graph': {},
        '@apostrophecms/redirect': {
            options: {
                statusCode: 301,
                withType: 'article',
            },
        },
        '@apostrophecms/sitemap': {},
        '@apostrophecms/login-totp': {},
        '@apostrophecms/anchors': {},
        // The main form module
        '@apostrophecms/form': {},
        // The form widget module, allowing editors to add forms to content areas
        '@apostrophecms/form-widget': {},
        // Form field widgets, used by the main form module to build forms.
        '@apostrophecms/form-text-field-widget': {},
        '@apostrophecms/form-textarea-field-widget': {},
        '@apostrophecms/form-select-field-widget': {},
        '@apostrophecms/form-radio-field-widget': {},
        '@apostrophecms/form-file-field-widget': {},
        '@apostrophecms/form-checkboxes-field-widget': {},
        '@apostrophecms/form-boolean-field-widget': {},
        '@apostrophecms/form-conditional-widget': {},
        // The main event piece type module
        '@apostrophecms/event': {},
        // The event page module
        '@apostrophecms/event-page': {},
        // The exporter module
        '@apostrophecms/piece-type-exporter': {},
        // The Importer module
        '@apostrophecms/piece-type-importer': {},
        '@apostrophecms/scheduled-publishing': {},
    }
});
