// modules/@apostrophecms/rich-text-widget/index.js
module.exports = {
    options: {
        defaultOptions: {
            toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'link',
                '|',
                'alignLeft',
                'alignCenter',
                'alignRight',
                'alignJustify',
                'bulletList',
                'orderedList',
                '|',
                'undo',
                'redo'
            ],
            styles: [
                {
                    tag: 'p',
                    label: 'Paragraph (P)',
                    class: ''
                },
                {
                    tag: 'h2',
                    label: 'Section Heading 2 (H2)',
                    class: 'text-lg'
                },
                {
                    tag: 'h2',
                    label: 'Heading 2 (H2)',
                    class: ''
                },
                {
                    tag: 'h3',
                    label: 'Heading 3 (H3)',
                    class: ''
                },
                {
                    tag: 'h4',
                    label: 'Heading 4 (H4)',
                    class: ''
                },
                {
                    tag: 'h5',
                    label: 'Heading 5 (H5)',
                    class: ''
                },
                {
                    tag: 'h6',
                    label: 'Heading 6 (H6)',
                    class: ''
                },
                {
                    tag: 'h1',
                    label: 'Display Heading 1 (H1)',
                    class: 'display-1'
                },
                {
                    tag: 'h2',
                    label: 'Display Heading 2 (H2)',
                    class: 'display-2'
                },
                {
                    tag: 'h3',
                    label: 'Display Heading 3 (H3)',
                    class: 'display-3'
                },
                {
                    tag: 'h4',
                    label: 'Display Heading 4 (H4)',
                    class: 'display-4'
                },
                {
                    tag: 'h5',
                    label: 'Display Heading 5 (H5)',
                    class: 'display-5'
                },
                {
                    tag: 'h6',
                    label: 'Display Heading 6 (H6)',
                    class: 'display-6'
                },
                {
                    tag: 'span',
                    label: 'Inline heading',
                    class: 'text--inline-heading'
                },
                {
                    tag: 'span',
                    label: 'Highlight',
                    class: 'highlight'
                },
                {
                    tag: 'span',
                    label: 'Small capitals (acronyms)',
                    class: 'text--small-caps'
                },
                {
                    tag: 'span',
                    label: 'Smaller text (e.g. fine print)',
                    class: 'small'
                }
            ]
        }
    }
}
