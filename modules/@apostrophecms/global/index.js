module.exports = {
    fields: {
        add: {
            siteTitle: {
                type: 'string',
                label: 'Website title'
            },
            footerCopyrightNotice: {
                type: 'string',
                label: 'Website footer copyright notice'
            },
            _defaultFooterContent: {
                label: 'Default footer content',
                help: 'Select the default sitewide footer.',
                type: 'relationship',
                withType: 'reusable-content',
                max: 1
            },
            _defaultPageNotFoundContent: {
                label: 'Default \'404 Page Not Found\' content',
                help: 'Select the content to display on 404 pages',
                type: 'relationship',
                withType: 'reusable-content',
                max: 1
            },
            articleDisclaimerText: {
                type: 'string',
                label: 'Disclaimer notice in articles',
                help: 'This disclaimer notice will be automatically printed in every article',
                textarea: true
            },
            articleNumberOfRecentArticlesByAuthor: {
                type: 'integer',
                label: 'Display recent articles by author',
                help: 'On article pages, display this many most recent articles by author',
                min: 0,
                def: 3,
                step: 1
            },
            articleNumberOfRecentArticlesByTopic: {
                type: 'integer',
                label: 'Display recent articles by topic',
                help: 'On article pages, display this many most recent articles in the same topic',
                min: 0,
                def: 3,
                step: 1
            },
            defaultPlaceholderColour: {
                type: 'color',
                label: 'Default image placeholder colour',
                help: 'Before an image loads, its space is filled with a placeholder background colour, making the eventual appearance of the image less aggressive',
                def: '#666666ff',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#504b90ff', '#8681c8ff', '#AAA6D8', '#CDCCE9', '#F1F1F9', '#f8cf3eff', '#dc3545ff', '#68C3D4ff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            _defaultPageMastheadImage: {
                label: 'Default page background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            defaultAuthorProfileImage: {
                type: 'area',
                label: 'Default author profile image',
                options: {
                    widgets: {
                        'image': {
                            aspectRatio: [ 1, 1 ]},
                    },
                    max: 1,
                }
            },
            _defaultAuthorMastheadImage: {
                label: 'Default author background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            _defaultArticleFeatureImage: {
                label: 'Default article feature image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            _defaultArticleMastheadImage: {
                label: 'Default article background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            _defaultTagMastheadImage: {
                label: 'Default tag page background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            _defaultTopicMastheadImage: {
                label: 'Default topic page background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            _defaultNotificationsMastheadImage: {
                label: 'Default notifications page background image',
                type: 'relationship',
                withType: '@apostrophecms/image',
                max: 1
            },
            primaryNav: {
                label: 'Primary site navigation (Main menu)',
                type: 'array',
                titleField: 'label',
                // The array schema for each item
                fields: {
                    add: {
                        label: {
                            label: 'Navigation item label',
                            type: 'string'
                        },
                        linkType: {
                            label: 'Link type',
                            type: 'select',
                            choices: [
                                {
                                    label: 'Dropdown placeholder',
                                    value: 'dropdown'
                                },
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
                            ],
                            if: {
                                $or: [
                                    { linkType: 'page' },
                                    { linkType: 'article' },
                                    { linkType: 'author' },
                                    { linkType: 'topic' },
                                    { linkType: 'tag' },
                                    { linkType: 'file' },
                                    { linkType: 'image' },
                                    { linkType: 'custom' },
                                ]
                            }
                        },
                        dropdown: {
                            label: 'Make this menu item a dropdown',
                            type: 'boolean',
                            def: false
                        },
                        additionalAttributes: {
                            label: 'Additional link attributes',
                            type: 'array',
                            titleField: 'attributeKey',
                            fields: {
                                add: {
                                    attributeKey: {
                                        type: 'string',
                                        label: 'Attribute name'
                                    },
                                    value: {
                                        type: 'string',
                                        label: 'Attribute value',
                                    }
                                }
                            }
                        },
                        secondLevel: {
                            label: 'Second-level menu',
                            type: 'array',
                            titleField: 'label',
                            fields: {
                                add: {
                                    linkType: {
                                        label: 'Link type',
                                        type: 'select',
                                        choices: [
                                            {
                                                label: 'Dropdown divider',
                                                value: 'dropdown-divider'
                                            },
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
                                    label: {
                                        label: 'Navigation item label',
                                        type: 'string',
                                        if: {
                                            $or: [
                                                { linkType: 'page' },
                                                { linkType: 'article' },
                                                { linkType: 'author' },
                                                { linkType: 'topic' },
                                                { linkType: 'tag' },
                                                { linkType: 'file' },
                                                { linkType: 'image' },
                                                { linkType: 'custom' },
                                            ]
                                        }
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
                                        ],
                                        if: {
                                            $or: [
                                                { linkType: 'page' },
                                                { linkType: 'article' },
                                                { linkType: 'author' },
                                                { linkType: 'topic' },
                                                { linkType: 'tag' },
                                                { linkType: 'file' },
                                                { linkType: 'image' },
                                                { linkType: 'custom' },
                                            ]
                                        }
                                    },
                                    additionalAttributes: {
                                        label: 'Additional link attributes',
                                        type: 'array',
                                        titleField: 'attributeKey',
                                        fields: {
                                            add: {
                                                attributeKey: {
                                                    type: 'string',
                                                    label: 'Attribute name'
                                                },
                                                value: {
                                                    type: 'string',
                                                    label: 'Attribute value',
                                                }
                                            }
                                        }
                                    },
                                }
                            },
                            if: {
                                dropdown: true
                            }
                        }
                    }
                }
            },
            policiesNav: {
                label: 'Policies navigation (footer)',
                type: 'array',
                titleField: 'label',
                // The array schema for each item
                fields: {
                    add: {
                        label: {
                            label: 'Navigation item label',
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
                            ],
                        },
                        additionalAttributes: {
                            label: 'Additional link attributes',
                            type: 'array',
                            titleField: 'attributeKey',
                            fields: {
                                add: {
                                    attributeKey: {
                                        type: 'string',
                                        label: 'Attribute name'
                                    },
                                    value: {
                                        type: 'string',
                                        label: 'Attribute value',
                                    }
                                }
                            }
                        },
                    }
                }
            },
            siteMode: {
                label: 'In what mode is the site running?',
                help: 'The site can be in production mode, where everything functions correctly. In development mode, certain functions are not live, such as payment processing',
                type: 'boolean',
                def: true,
                toggle: {
                    true: 'Production mode',
                    false: 'Development mode'
                }
            },
            productionModeBackendApiBaseUrl: {
                type: 'url',
                label: 'Backend API server live/production mode library URL',
                help: 'Includes base URL and the following \/api\/<version number> sections of the endpoint path',
            },
            developmentModeBackendApiBaseUrl: {
                type: 'url',
                label: 'Backend API server sandbox/development mode library URL',
                help: 'Includes base URL and the following /api/<version number> sections of the endpoint path',
            },
            paypalProductionModeLibraryUrl: {
                type: 'url',
                label: 'PayPal live/production mode library URL'
            },
            paypalSandboxModeLibraryUrl: {
                type: 'url',
                label: 'PayPal sandbox/development mode library URL'
            },
            vimeoLibraryUrl: {
                type: 'url',
                label: 'Vimeo library URL'
            },
            hCaptchaLibraryUrl: {
                type: 'url',
                label: 'hCAPTCHA library URL'
            },
            hCaptchaSitekey: {
                type: 'string',
                label: 'hCAPTCHA sitekey',
            },
            newsletterSubscriptionFormActionEndpoint: {
                type: 'url',
                label: 'Default newsletter subscription form \'Action\' URL endpoint',
                help: 'This is a sitewide default for all newsletter subscription forms, which may be overriden in individual forms'
            },
            newsletterSubscriptionFormEmailAddressPlaceholderText: {
                type: 'string',
                label: 'Default email address placeholder text',
                help: 'Helpful text inside the email input box when it\'s empty, which may be overriden on individual forms',
                def: 'Enter your email to join our mailing list',
                required: true
            },
            newsletterSubscriptionFormFirstNamePlaceholderText: {
                type: 'string',
                label: 'Default first name placeholder text',
                help: 'Helpful text inside the first name input box when it\'s empty, which can be overriden on individual forms',
                def: 'First name',
                required: true
            },
            newsletterSubscriptionFormLastNamePlaceholderText: {
                type: 'string',
                label: 'Default Last name placeholder text',
                help: 'Helpful text inside the last name input box when it\'s empty, which can be overriden on individual forms',
                def: 'Last name',
                required: true,
            },
            newsletterSubscriptionFormButtonText: {
                label: 'Default button text',
                type: 'string',
                def: 'Join now',
                help: 'What should the signup button say? May be overriden on individual forms',
                required: true
            },
            _newsletterSubscriptionFormOnSuccessNotification: {
                type: 'relationship',
                label: 'Default notification to show on success',
                help: 'Once the subscription is successful, choose which notification to show. May be overridden in individual forms',
                withType: 'notifications',
                max: 1
            },
            _newsletterSubscriptionFormOnFailureNotification: {
                type: 'relationship',
                label: 'Default notification to show on failure',
                help: 'When the subscription is unsuccessful, choose which notification to show. May be overridden in individual forms',
                withType: 'notifications',
                max: 1
            },
            newsletterSubscriptionFormSubscribeToListId: {
                type: 'string',
                label: 'Subscribe to which ActiveCampaign list (ID) by default?',
                help: 'Choose which ActiveCampaign list the subscriber will be subscribed to. Leave empty for none (needed for double opt-in to work). May be overridden in individual forms',
                def: ''
            },
            newsletterSubscriptionFormTagWithTagId: {
                type: 'string',
                label: 'Tag subscriber with which ActiveCampaign tag (ID) by default?',
                help: 'Choose which ActiveCampaign tag the subscriber will be subscribed to. May be overridden in individual forms',
                def: ''
            },
        },
        group: {
            basics: {
                label: 'Basics',
                fields: [ 'siteTitle', 'footerCopyrightNotice', '_defaultFooterContent', '_defaultPageNotFoundContent' ]
            },
            navigation: {
                label: 'Navigation menus',
                fields: ['primaryNav', 'policiesNav']
            },
            articles: {
                label: 'Articles',
                fields: [ 'articleDisclaimerText', 'articleNumberOfRecentArticlesByAuthor', 'articleNumberOfRecentArticlesByTopic' ]
            },
            images: {
                label: 'Default placeholder images',
                fields: [ 'defaultPlaceholderColour', '_defaultPageMastheadImage', 'defaultAuthorProfileImage', '_defaultAuthorMastheadImage', '_defaultArticleFeatureImage', '_defaultArticleMastheadImage', '_defaultTagMastheadImage', '_defaultTopicMastheadImage', '_defaultNotificationsMastheadImage' ]
            },
            administration: {
                label: 'Site administration',
                fields: [ 'siteMode', 'productionModeBackendApiBaseUrl', 'developmentModeBackendApiBaseUrl', 'paypalProductionModeLibraryUrl', 'paypalSandboxModeLibraryUrl', 'vimeoLibraryUrl', 'hCaptchaLibraryUrl', 'hCaptchaSitekey' ]
            },
            newsletterSubscriptionFormSettings: {
                label: 'Newsletter subscription form settings',
                fields: [ 'newsletterSubscriptionFormActionEndpoint', 'newsletterSubscriptionFormEmailAddressPlaceholderText', 'newsletterSubscriptionFormFirstNamePlaceholderText', 'newsletterSubscriptionFormLastNamePlaceholderText', 'newsletterSubscriptionFormButtonText', '_newsletterSubscriptionFormOnSuccessNotification', '_newsletterSubscriptionFormOnFailureNotification', 'newsletterSubscriptionFormSubscribeToListId', 'newsletterSubscriptionFormTagWithTagId' ],
            },
        }
    }
}
