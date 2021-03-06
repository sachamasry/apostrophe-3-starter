module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Newsletter Subscription',
        icon: 'newsletterIcon',
        openGraph: false,
    },
    icons: {
        newsletterIcon: 'EmailNewsletter'
    },
    fields: {
        add: {
            formHeading: {
                type: 'string',
                label: 'Form heading',
            },
            subscriptionFormVariant: {
                type: 'select',
                label: 'Choose a variation of newsletter form to insert',
                def: 'small',
                choices: [
                    {
                        label: 'Small (one line, email only)',
                        value: 'small'
                    },
                    {
                        label: 'Medium (first name and email only)',
                        value: 'medium'
                    },
                    {
                        label: 'Large (first and last names, and email)',
                        value: 'large'
                    }
                ]
            },
            precedingContent: {
                type: 'area',
                label: 'Content  to display above form',
                help: 'Use this content as a hook to entice subscriptions',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'container-block': {},
                        'cover-block': {},
                        'spacer': {},
                        'horizontal-rule': {},
                        'verse': {},
                        'quote': {},
                        'lead-paragraph': {},
                        'list': {},
                        'list-group': {},
                        'definition-list': {},
                        'link': {},
                        'button': {},
                    }
                }
            },
            formActionEndpoint: {
                type: 'url',
                label: 'Form \'action\' URL endpoint',
                help: 'Define only the endpoint after the /api/<version number> sections of the path. Only necessary if overriding the global newsletter subscription URL'
            },
            emailAddressPlaceholderText: {
                type: 'string',
                label: 'Email address placeholder text',
                help: 'Helpful text inside the email input box when it\'s empty',
                def: 'Enter email address to join our mailing list',
                required: true
            },
            firstNamePlaceholderText: {
                type: 'string',
                label: 'First name placeholder text',
                help: 'Helpful text inside the first name input box when it\'s empty',
                def: 'First name',
                required: true,
                if: {
                    $or: [
                        { subscriptionFormVariant: 'medium' },
                        { subscriptionFormVariant: 'large' },
                    ]
                }
            },
            lastNamePlaceholderText: {
                type: 'string',
                label: 'Last name placeholder text',
                help: 'Helpful text inside the last name input box when it\'s empty',
                def: 'Last name',
                required: true,
                if: {
                    subscriptionFormVariant: 'large',
                }
            },
            buttonText: {
                label: 'Button text',
                type: 'string',
                def: 'Join now',
                help: 'What should the signup button say?',
                required: true
            },
            succeedingContent: {
                type: 'area',
                label: 'Content  to display below form',
                help: 'Use this content as an explainer of how much content a subscriber will receive, how often, how they can unsubscribe, privacy policy, etc.',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'container-block': {},
                        'cover-block': {},
                        'spacer': {},
                        'horizontal-rule': {},
                        'verse': {},
                        'quote': {},
                        'lead-paragraph': {},
                        'list': {},
                        'list-group': {},
                        'definition-list': {},
                        'link': {},
                        'button': {},
                    }
                }
            },
            marketingConsentContext:{
                type: 'string',
                label: 'Marketing Campaign Context',
                help: 'Define why subscriber has given their consent, allowing marketing? Simple title, such as \'Downloaded free eBook\', or other. NOTE: this will override consent context query parameters',
            },
            _onSuccessNotification: {
                type: 'relationship',
                label: 'Notification to show on success',
                help: 'Once the subscription is successful, choose which notification to show',
                withType: 'notifications',
                max: 1
            },
            _onFailureNotification: {
                type: 'relationship',
                label: 'Notification to show on failure',
                help: 'When the subscription is unsuccessful, choose which notification to show',
                withType: 'notifications',
                max: 1
            },
            subscribeToListId: {
                type: 'string',
                label: 'Subscribe to which ActiveCampaign list (ID)?',
                help: 'Choose which ActiveCampaign list the subscriber will be subscribed to. Leave empty for none (needed for double opt-in to work)',
                def: ''
            },
            tagWithTagId: {
                type: 'string',
                label: 'Tag subscriber with which ActiveCampaign tag (ID)?',
                help: 'Choose which ActiveCampaign tag the subscriber will be subscribed to',
                def: ''
            },
            formClass: {
                type: 'string',
                label: 'Newsletter subscription form class',
                help: 'Specify any additional classes for the form'
            },
        }
    }
};
