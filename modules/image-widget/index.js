module.exports = {
    extend: '@apostrophecms/image-widget',
    options: {
        label: 'Image',
        openGraph: false,
    },
    fields: {
        add: {
            size: {
                type: 'select',
                label: 'Select the desired size of image to use',
                help: 'This is a performance and SEO optimization; choose lower sizes to speed up the site',
                def: 'two-thirds',
                choices: [
                    {
                        label: 'Original size (can be large!)',
                        value: 'original'
                    },
                    {
                        label: 'Max (1600px maximum width/height)',
                        value: 'max'
                    },
                    {
                        label: 'full (1140px maximum width/height)',
                        value: 'full'
                    },
                    {
                        label: 'Two thirds (760px maximum width/height)',
                        value: 'two-thirds'
                    },
                    {
                        label: 'One half (570px maximum width/height)',
                        value: 'one-half'
                    },
                    {
                        label: 'One third (380px maximum width/height)',
                        value: 'one-third'
                    },
                    {
                        label: 'One sixth (190px maximum width/height)',
                        value: 'one-sixth'
                    },
                ]
            },
            setDimensionAttributesToRootElement: {
                type: 'boolean',
                label: 'Set image dimension attributes on root element?',
                help: 'Useful for development of complex layouts, where the image dimensions must be known statically',
                def: false
            },
            loadingAttribute: {
                type: 'select',
                label: 'Image loading',
                help: 'How should the browser load the image?',
                def: 'auto',
                choices: [
                    {
                        label: 'Automatic (let the browser decide)',
                        value: 'auto'
                    },
                    {
                        label: 'Eager (load immediately)',
                        value: 'eager'
                    },
                    {
                        label: 'Lazy (load only when needed)',
                        value: 'lazy'
                    }
                ]
            }
        }
    }
};
