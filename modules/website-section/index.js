module.exports = {
    extend: '@apostrophecms/piece-type',
    options: {
        label: 'Website Section',
        pluralLabel: 'Website Sections',
        quickCreate: false,
        sort: {
            slug: 1
        },
        export: true,
        import: true,
        openGraph: false,
        seoFields: false,
    },
    fields: {
        add: {
            title: {
                type: 'string',
                label: 'Section name'
            },
            description: {
                type: 'string',
                label: 'Describe the logical and contextual purpose of this section, and what it encompasses',
                textarea: true
            },
            _sectionMastheadImage: {
                label: 'Page background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            applyMastheadImageToAllPagesInSection: {
                type: 'boolean',
                label: 'Use this Masthead for all pages in this section?',
                def: true
            },
            _pages: {
                type: 'relationshipReverse',
                withType: 'default-page',
                reverseOf: '_pageSection',
                withRelationships: [ 'title' ]
            }
        },
        group: {
            basics: {
                label: 'Basics',
                fields: [ 'title', 'description', '_sectionMastheadImage', 'applyMastheadImageToAllPagesInSection' ]
            },
        }
    }
};
