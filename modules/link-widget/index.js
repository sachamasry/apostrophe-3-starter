module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Link (block element)',
        icon: 'linkIcon',
        openGraph: false,
    },
    icons: {
        linkIcon: 'LinkVariant'
    },
    fields: {
        add: {
            label: {
                label: 'Link text',
                type: 'string'
            },
            linkType: {
                label: 'Link type',
                type: 'select',
                choices: [
                    {
                        label: 'Page',
                        value: 'page'
                    },
                    {
                        label: 'Article',
                        value: 'article'
                    },
                    {
                        label: 'Author',
                        value: 'author'
                    },
                    {
                        label: 'Topic',
                        value: 'topic'
                    },
                    {
                        label: 'Tag',
                        value: 'tag'
                    },
                    {
                        label: 'File',
                        value: 'file'
                    },
                    {
                        label: 'Image',
                        value: 'image'
                    },
                    {
                        label: 'Custom URL',
                        value: 'custom'
                    }
                ]
            },
            _page: {
                label: 'Page to link',
                type: 'relationship',
                withType: '@apostrophecms/page',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1
                    }
                },
                // Only if it's a page link
                if: {
                    linkType: 'page'
                }
            },
            _article: {
                label: 'Article to link',
                type: 'relationship',
                withType: 'article',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1
                    }
                },
                // Only if it's an article link
                if: {
                    linkType: 'article'
                }
            },
            _author: {
                label: 'Author to link',
                type: 'relationship',
                withType: 'author',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1
                    }
                },
                // Only if it's an author link
                if: {
                    linkType: 'author'
                }
            },
            _topic: {
                label: 'Topic to link',
                type: 'relationship',
                withType: 'topic',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1
                    }
                },
                // Only if it's a topic link
                if: {
                    linkType: 'topic'
                }
            },
            _tag: {
                label: 'Tag to link',
                type: 'relationship',
                withType: 'tag',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1
                    }
                },
                // Only if it's a tag link
                if: {
                    linkType: 'tag'
                }
            },
            _file: {
                label: 'File to link',
                type: 'relationship',
                withType: '@apostrophecms/file',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1,
                        attachment: 1
                    }
                },
                // Only if it's a file link
                if: {
                    linkType: 'file'
                }
            },
            _image: {
                label: 'Image to link',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1,
                required: true,
                builders: {
                    project: {
                        title: 1,
                        _url: 1,
                        attachment: 1
                    }
                },
                // Only if it's a image link
                if: {
                    linkType: 'image'
                }
            },
            customUrl: {
                label: 'URL for custom link',
                type: 'url',
                required: true,
                // Only if it's a custom link
                if: {
                    linkType: 'custom'
                }
            },
            // A nice option to have the link open in a new tab
            target: {
                label: 'Will the link open a new browser tab?',
                type: 'checkboxes',
                choices: [
                    {
                        label: 'Open in new tab',
                        value: '_blank'
                    }
                ]
            },
            downloadLink: {
                label: 'Is this a download link?',
                type: 'boolean',
                def: false
            },
            alignLink: {
                type: 'select',
                label: 'Change alignment',
                def: 'none',
                choices: [
                    {
                        label: 'None',
                        value: 'none'
                    },
                    {
                        label: 'Align left',
                        value: 'left'
                    },
                    {
                        label: 'Align centre',
                        value: 'centre'
                    },
                    {
                        label: 'Align right',
                        value: 'right'
                    }
                ]
            },
            includeNextArrow: {
                type: 'boolean',
                label: 'Append \'Next\' arrow to the end of link?',
                def: true,
            },
            smallLink: {
                type: 'boolean',
                label: 'Make link into small text',
                help: 'Display link in finer print than regular body copy (e.g. help messages, terms, copyright, legal text)',
                def: false,
            },
            linkClass: {
                type: 'string',
                label: 'Link class'
            },
            linkStyle: {
                type: 'string',
                label: 'Link style'
            }
        }
    }
};
